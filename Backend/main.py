
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware

import smtplib
from email.mime.text import MIMEText
from fastapi import Request

# Env for email
from dotenv import load_dotenv
import os
load_dotenv()

# For Rate Limiting
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded


limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


#  CORS SETTINGS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://adhrit-site.vercel.app", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)


class Message(BaseModel):
    name: str = Field(..., min_length=3, max_length=15)
    email: str
    message: str = Field(..., min_length=10, max_length=500)


@app.post("/send-email")
@limiter.limit("3 per 5 minutes")
async def send_email(request: Request, data: Message):
    sender_email = os.getenv("MY_EMAIL")
    receiver_email = os.getenv("MY_EMAIL")
    password = os.getenv("EMAIL_PASS") 

    try:
        msg = MIMEText(f"""
        See This is your Email from Protfolio Site.
        Name: {data.name}
        Email: {data.email}
        Message: {data.message}
        """)

        msg["Subject"] = "Message from Personal Site"
        msg["From"] = sender_email
        msg["To"] = receiver_email

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, password)
        server.send_message(msg)
        server.quit()

        print("Email Went")
        return {"message": "Email sent successfully"}

    except Exception as e:
        
        print("Message didnt went")
        print("eror:", str(e))
        return {"error": str(e)}