
from dotenv import load_dotenv
import os
load_dotenv()



if os.getenv("EMAIL_PASS"):
    print("Email is set up correctly.")
else:
    print("Email is NOT set up. Please check your .env file.")