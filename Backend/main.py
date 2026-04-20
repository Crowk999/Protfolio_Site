from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText

# Env for email
from dotenv import load_dotenv
import os
load_dotenv()


app = FastAPI()

#  CORS SETTINGS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    name: str = Field(..., min_length=4, max_length=15)
    email: str
    message: str = Field(..., min_length=3, max_length=500)


@app.post("/send-email")
def send_email(data: Message):
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