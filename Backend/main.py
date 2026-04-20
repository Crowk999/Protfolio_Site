from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText

app = FastAPI()

# ✅ CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development (later restrict this)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    name: str = Field(..., min_length=4, max_length=15)
    email: EmailStr
    message: str = Field(..., min_length=3, max_length=500)


@app.post("/send-email")
def send_email(data: Message):
    sender_email = "dhitalanir30@gmail.com"
    receiver_email = "dhitalanir30@gmail.com"
    password = "ipkm uxle ehph onol" 

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