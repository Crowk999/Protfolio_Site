
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
from fastapi.responses import JSONResponse
from fastapi import Request

# Env for email
from dotenv import load_dotenv
import os
load_dotenv()

# For Rate Limiting
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware



app = FastAPI()

def rate_limit_handler(request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={
            "error": "RATE_LIMIT_EXCEEDED",
            "detail": "Too many requests. Please wait and try again.",
            "retry_after_seconds": 90
        }
    )

# Limit setting
limiter = Limiter(key_func = get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, rate_limit_handler)
app.add_middleware(SlowAPIMiddleware)


#  CORS SETTINGS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://adhrit-site.vercel.app", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)


class Message(BaseModel):
    name: str = Field(..., min_length=4, max_length=15)
    email: str
    message: str = Field(..., min_length=3, max_length=500)


@app.post("/send-email")
@limiter.limit("1/90 seconds")
async def send_email(request: Request, data: Message):
    sender_email = os.getenv("MY_EMAIL")
    receiver_email = os.getenv("MY_EMAIL")
    password = os.getenv("EMAIL_PASS") 

    try:
        msg = MIMEText(f"""
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

        return {"message": "Email sent successfully"}

    except Exception as e:
        return {"error": str(e)}