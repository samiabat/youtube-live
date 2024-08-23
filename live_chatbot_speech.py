import aiohttp
import asyncio
from googleapiclient.discovery import build
import time
import io

# Replace with your own API key
API_KEY = "AIzaSyCp7i5IHB5dlBTM3Nz3cysqRPEq9czhv0Y"
VIDEO_ID = "U6Sl9v0Z8_E"  # Replace with the video ID of your live stream

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

# Asynchronous function to send a comment to the chatbot API and get a response
async def get_chatbot_response(session, comment, username):
    payload = {
        "body": {
            "event_id": 1,
            "game_id": None,
            "character_name": "saionji",
            "username": username,
            "userid": 662,
            "comment": comment,
            "giftid": None,
            "gender": "male",
            "embedding": None,
            "language": "English"
        }
    }

    try:
        async with session.post(CHATBOT_API_URL, json=payload) as response:
            if response.status == 200:
                response_data = await response.json()
                return response_data.get('body', {}).get('text', 'No response from chatbot')
            else:
                print(f"Chatbot request failed with status: {response.status}")
                return None
    except Exception as e:
        print(f"Failed to get chatbot response: {e}")
        return None

# Asynchronous function to convert text to speech using the speech API
async def convert_to_speech(session, text):
    params = {
        "text": text,
        "model_id": 9,
        "speaker_name": "SPEAKER-A",
        "speaker_id": 0,
        "sdp_ratio": 0.2,
        "noise": 0.6,
        "noisew": 0.8,
        "length": 1,
        "language": "JP",
        "auto_split": "true",
        "split_interval": 0.5,
        "assist_text_weight": 1,
        "style": "Sad",
        "style_weight": 1,
        "pitch_scale": 1,
        "intonation_scale": 1
    }

    try:
        async with session.post(SPEECH_API_URL, params=params) as response:
            if response.status == 200:
                # Read the audio file from the response
                audio_data = await response.read()
                print("Speech generated successfully. Playing audio...")
                # Simulate playing the audio file
                await play_audio(audio_data)
            else:
                print(f"Failed to generate speech. Status code: {response.status}")
                if response.status == 405:
                    print("Method not allowed, retrying...")
                    await asyncio.sleep(60)  # Wait before retrying
                else:
                    print("An unexpected error occurred.")
    except Exception as e:
        print(f"Failed to connect to the speech API: {e}")

# Function to simulate playing audio
async def play_audio(audio_data):
    # Simulate playing audio (this could be replaced with actual playback code)
    # For example, save to a file or use an audio library to play the sound
    with open("speech_output.wav", "wb") as audio_file:
        audio_file.write(audio_data)
    print("Audio saved as speech_output.wav.")
    await asyncio.sleep(2)  # Simulate the delay for playing the audio

# Asynchronous function to fetch live chat messages in real-time
async def get_live_chat_comments(api_key, live_chat_id):
    youtube = build('youtube', 'v3', developerKey=api_key)
    next_page_token = None
    last_response_time = 0  # Track the last response time

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
                    tasks = []
                    current_time = asyncio.get_event_loop().time()
                    for item in live_chat_response['items']:
                        author = item['authorDetails']['displayName']
                        message = item['snippet']['displayMessage']
                        print(f"{author}: {message}")

                        # Check if enough time has passed since the last response
                        if current_time - last_response_time >= 120:  # 2 minutes
                            # Create a task for handling each comment (chatbot + speech)
                            tasks.append(handle_comment(session, author, message))
                            last_response_time = current_time  # Update the last response time
                        else:
                            print("Waiting to avoid spamming too quickly...")

                    # Run all the tasks concurrently
                    await asyncio.gather(*tasks)

                next_page_token = live_chat_response.get('nextPageToken', None)
                polling_interval = int(live_chat_response.get('pollingIntervalMillis', 20000)) / 1000
                print(f"Waiting for {polling_interval} seconds before fetching new messages...\n")
                await asyncio.sleep(polling_interval)

            except Exception as e:
                print("An error occurred while fetching live chat messages.")
                print(f"Error details: {e}")
                print("Retrying in 10 seconds...\n")
                await asyncio.sleep(10)

# Asynchronous function to handle each comment (chatbot + speech)
async def handle_comment(session, author, message):
    # Send the comment to the chatbot API
    chatbot_response = await get_chatbot_response(session, message, author)
    if chatbot_response:
        print(f"Chatbot response: {chatbot_response}")

        # Convert the chatbot response to speech
        await convert_to_speech(session, chatbot_response)

        # Wait for a while before processing the next comment
        await asyncio.sleep(60)  # Wait for 2 minutes before processing the next comment

if __name__ == "__main__":
    # Get the liveChatId using the video ID
    live_chat_id = get_live_chat_id(API_KEY, VIDEO_ID)

    if live_chat_id:
        print(f"Live Chat ID found: {live_chat_id}")
        asyncio.run(get_live_chat_comments(API_KEY, live_chat_id))
    else:
        print("The video is not currently live or has no active chat.")
