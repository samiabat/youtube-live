import aiohttp
import asyncio

CHATBOT_API_URL = "http://18.176.84.155:5000/live"

async def get_chatbot_response(comment, username):
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

    async with aiohttp.ClientSession() as session:
        try:
            async with session.post(CHATBOT_API_URL, json=payload) as response:
                if response.status == 200:
                    response_data = await response.json()
                    # Extract text from response
                    chatbot_response = response_data.get('body', {}).get('text', 'No response from chatbot')
                    return chatbot_response
                else:
                    print(f"Chatbot request failed with status: {response.status}")
                    return "No response from chatbot"
        except Exception as e:
            print(f"Failed to get chatbot response: {e}")
            return "No response from chatbot"

async def main():
    response = await get_chatbot_response(comment="Hello", username="Samuel")
    print(f"Chatbot response: {response}")

if __name__ == "__main__":
    asyncio.run(main())
