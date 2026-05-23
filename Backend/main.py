
from fastapi import FastAPI, Request
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware

import resend
#import smtplib from email.mime.text import MIMEText from fastapi import Request

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
    allow_origins=["https://adhrit-site.vercel.app",
                    "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    name: str = Field(..., min_length=3, max_length=15)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=500)

resend.api_key = os.getenv("RESEND_API_KEY")

@app.post("/send-email")
@limiter.limit("3 per 5 minutes")
async def send_email(request:Request, data: Message): 
    try:
        resend.Emails.send({
                "from": "Portfolio <onboarding@resend.dev>",
                "to": os.getenv("MY_EMAIL"),
                "subject": "Message from Site",
                "html": f"""
                    Name: {data.name}<br>
                    Email: {data.email}<br>
                    Message: {data.message}
                """
            })
        print("response")
        return {"message": "Email sent successfully"}
    
    except Exception as e:
        print("Message didnt went")
        print("eror:", str(e))
        return {"error": str(e)}