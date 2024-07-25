import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_with_template(sender_email, sender_password, recipient_email, subject, email_template):
    """
    Sends an email with a predefined text (template) to the specified recipient.

    Args:
        sender_email (str): The email address of the sender.
        sender_password (str): The password associated with the sender's email address.
        recipient_email (str): The email address of the recipient.
        subject (str): The subject line of the email.
        email_template (str): The predefined text content of the email.

    Returns:
        bool: True if the email is sent successfully, False otherwise.
    """

    try:
        # Create a secure connection with STARTTLS
        with smtplib.SMTP_SSL('smtp.gmail.com', 587) as server:
            server.ehlo()
            server.starttls()

            # Authenticate the sender
            server.login(sender_email, sender_password)

            # Create a MIMEMultipart message (supports plain text and HTML)
            message = MIMEMultipart('alternative')
            message['From'] = sender_email
            message['To'] = recipient_email
            message['Subject'] = subject

            # Create plain text and HTML versions of the email content (optional)
            text_part = MIMEText(email_template, 'plain')
            message.attach(text_part)

            # Optionally create an HTML version with formatting (uncomment for HTML)
            # html_part = MIMEText('<html><body><h2>' + email_template + '</h2></body></html>', 'html')
            # message.attach(html_part)

            # Send the email
            server.sendmail(sender_email, recipient_email, message.as_string())

            print(f"Email sent successfully to {recipient_email}")
            return True

    except Exception as e:
        print(f"Error sending email: {e}")
        return False

