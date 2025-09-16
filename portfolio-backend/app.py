from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Email configuration
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL")

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"error": "All fields are required!"}), 400

    try:
        # Setup email
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = f"New message from {name} via Portfolio"

        html_content = f"""
        <html>
        <body>
            <h2>Portfolio Contact Form</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong> {message}</p>
        </body>
        </html>
        """
        msg.attach(MIMEText(html_content, 'html'))

        # Send email via Gmail
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        server.send_message(msg)
        server.quit()

        return jsonify({"success": "Message sent successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
