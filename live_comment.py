from googleapiclient.discovery import build
import time

# Replace with your own API key
API_KEY = "AIzaSyCp7i5IHB5dlBTM3Nz3cysqRPEq9czhv0Y"
VIDEO_ID = "TanZi2nfmAs"  # Replace with the video ID of your live stream

# Function to get liveChatId from the video ID
def get_live_chat_id(api_key, video_id):
    youtube = build('youtube', 'v3', developerKey=api_key)
    video_response = youtube.videos().list(
        part='liveStreamingDetails',
        id=video_id
    ).execute()

    live_chat_id = video_response['items'][0]['liveStreamingDetails'].get('activeLiveChatId')
    return live_chat_id

# Function to fetch live chat messages in real-time
def get_live_chat_comments(api_key, live_chat_id):
    youtube = build('youtube', 'v3', developerKey=api_key)
    next_page_token = None

    while True:
        try:
            print("Fetching messages...")  # Indicate that the script is actively fetching comments.

            # Retrieve live chat messages
            live_chat_request = youtube.liveChatMessages().list(
                liveChatId=live_chat_id,
                part='snippet,authorDetails',
                maxResults=200,  # Maximum messages to retrieve
                pageToken=next_page_token
            )

            live_chat_response = live_chat_request.execute()

            # Extract messages and author details
            if 'items' in live_chat_response:
                for item in live_chat_response['items']:
                    author = item['authorDetails']['displayName']
                    message = item['snippet']['displayMessage']
                    print(f"{author}: {message}")

            # Update the next page token for continuous fetching
            next_page_token = live_chat_response.get('nextPageToken')

            # Introduce a delay between requests (YouTube recommends at least a 5-second delay)
            # polling_interval = int(live_chat_response['pollingIntervalMillis']) / 1000
            print(f"Waiting for comments \n")
            time.sleep(5)

        except Exception as e:
            print("An error occurred while fetching live chat messages.")
            print(f"Error details: {e}")
            print("Retrying in 10 seconds...\n")
            time.sleep(10)  # Wait for a while before retrying to avoid continuous failures

if __name__ == "__main__":
    # Get the liveChatId using the video ID
    live_chat_id = get_live_chat_id(API_KEY, VIDEO_ID)
    
    if live_chat_id:
        print(f"Live Chat ID found: {live_chat_id}")
        get_live_chat_comments(API_KEY, live_chat_id)
    else:
        print("The video is not currently live or has no active chat.")
