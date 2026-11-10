# مثال للقراءة فقط: كود الخادم الذي يستقبل رسالة التواصل. لا يعمل في هذا المشروع.
import os
import sqlite3

from dotenv import load_dotenv

load_dotenv()
EMAIL_API_KEY = os.getenv("EMAIL_API_KEY")


def receive_message(name, email, message):
      if not name or not email or not message:
                return {"ok": False, "error": "الرسالة فارغة أو ناقصة"}

      connection = sqlite3.connect("messages.db")
      connection.execute(
          "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
          (name, email, message),
      )
      connection.commit()
      connection.close()
      return {"ok": True}
  
