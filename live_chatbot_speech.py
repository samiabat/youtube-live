import aiohttp
import asyncio
from googleapiclient.discovery import build
from pydantic import BaseModel
import time
import io
from fastapi.responses import StreamingResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)


# Replace with your own API key
API_KEY = "AIzaSyAanTRdi4pKdkri0Wp8SnihLoWNYHYrMoA"
VIDEO_ID = "-mvUkiILTqI"  # Replace with the video ID of your live stream

CHATBOT_API_URL = "http://18.176.84.155:5000/live"
SPEECH_API_URL = "http://13.114.188.215:5000/voice"

# Function to get liveChatId from the video ID
def get_live_chat_id(api_key, video_id):
    youtube = build('youtube', 'v3', developerKey=api_key)
    video_response = youtube.videos().list(
        part='liveStreamingDetails',
        id=video_id
    ).execute()

    live_chat_id = video_response['items'][0]['liveStreamingDetails'].get('activeLiveChatId')
    return live_chat_id


async def get_live_chat_comments(api_key, live_chat_id):
    youtube = build('youtube', 'v3', developerKey=api_key)
    next_page_token = None

    async with aiohttp.ClientSession() as session:
        while True:
            try:
                print("Fetching messages...")

                # Retrieve live chat messages
                live_chat_request = youtube.liveChatMessages().list(
                    liveChatId=live_chat_id,
                    part='snippet,authorDetails',
                    maxResults=200,
                    pageToken=next_page_token
                )
                live_chat_response = live_chat_request.execute()

                if 'items' in live_chat_response:
                    for item in live_chat_response['items']:
                        author = item['authorDetails']['displayName']
                        message = item['snippet']['displayMessage']
                        yield {"author": author, "message": message}

                next_page_token = live_chat_response.get('nextPageToken', None)
                polling_interval = int(live_chat_response.get('pollingIntervalMillis', 20000)) / 1000
                await asyncio.sleep(polling_interval)

            except Exception as e:
                print(f"An error occurred while fetching live chat messages: {e}")
                print("Retrying in 10 seconds...\n")
                await asyncio.sleep(10)

# FastAPI endpoint to stream raw user comments in real-time
@app.get("/stream-comments-only")
async def stream_comments_only():
    live_chat_id = get_live_chat_id(API_KEY, VIDEO_ID)
    if not live_chat_id:
        return {"error": "The video is not currently live or has no active chat."}

    async def comment_stream_only():
        # Now the generator function is called correctly
        async for comment in get_live_chat_comments(API_KEY, live_chat_id):
            yield f"data: {comment}\n\n"  # Stream comment in Server-Sent Events format

    return StreamingResponse(comment_stream_only(), media_type="text/event-stream")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)