from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import logging

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Configure CORS manually
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

print("CORS configured manually for local development.")

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Email configuration
EMAIL_HOST = os.getenv('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = int(os.getenv('EMAIL_PORT', 587))
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER', 'lakscode1@gmail.com')  # Your Gmail address
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD', 'brfdkvitlzcktndl')  # Your app password

@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def contact():
    # Handle preflight requests for CORS
    if request.method == 'OPTIONS':
        logger.info("Handling OPTIONS request for CORS preflight")
        return jsonify({'status': 'success'}), 200
        
    try:
        logger.info(f"Received headers: {request.headers}")
        logger.info(f"Received raw data: {request.get_data()}")
        
        data = request.json
        if not data:
            logger.error("No JSON data received in request")
            return jsonify({
                "success": False,
                "error": "No data provided in request body"
            }), 400
            
        # Log received data (for debugging only, remove in production)
        logger.info(f"Received contact form submission: {data}")
        
        # Extract form data with validation
        name = data.get('name')
        email = data.get('email')
        
        # Basic validation
        if not name or not email:
            return jsonify({
                "success": False,
                "error": "Name and email are required fields"
            }), 400
            
        company = data.get('company', 'No company provided')
        service = data.get('service', 'No service selected')
        message = data.get('message', 'No message provided')
        
        # Email recipients
        to_email = data.get('to', 'mkumailraza051@gmail.com')
        cc_email = data.get('cc', 'lakscode1@gmail.com')
        
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = f"LaksCode IT Consultancy <{EMAIL_HOST_USER}>"
        msg['To'] = to_email
        msg['Cc'] = cc_email
        msg['Subject'] = f"New Website Inquiry from {name} | LaksCode IT Consultancy"
        
        # Create email body
        email_body = f"""
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
                
                body, html {{
                    font-family: 'Roboto', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    background-color: #f7f7f7;
                }}
                
                .email-container {{
                    max-width: 650px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                    border-radius: 8px;
                    overflow: hidden;
                }}
                
                .email-header {{
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 30px;
                    text-align: center;
                    color: white;
                }}
                
                .email-header h1 {{
                    margin: 0;
                    font-size: 26px;
                    font-weight: 600;
                }}
                
                .company-logo {{
                    display: inline-block;
                    font-size: 30px;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 15px;
                }}
                
                .email-content {{
                    padding: 30px;
                }}
                
                .intro-text {{
                    font-size: 16px;
                    margin-bottom: 25px;
                    color: #555;
                }}
                
                .submission-details {{
                    background-color: #f9f9f9;
                    border: 1px solid #eaeaea;
                    border-radius: 6px;
                    padding: 20px;
                    margin-bottom: 25px;
                }}
                
                .detail-row {{
                    margin-bottom: 15px;
                    border-bottom: 1px solid #eeeeee;
                    padding-bottom: 15px;
                }}
                
                .detail-row:last-child {{
                    margin-bottom: 0;
                    border-bottom: none;
                    padding-bottom: 0;
                }}
                
                .detail-label {{
                    font-weight: 600;
                    color: #555;
                    display: block;
                    margin-bottom: 5px;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }}
                
                .detail-value {{
                    color: #333;
                    font-size: 16px;
                }}
                
                .message-box {{
                    background-color: #f9f9f9;
                    border-left: 4px solid #FF7A00;
                    padding: 15px 20px;
                    margin-top: 10px;
                    border-radius: 0 5px 5px 0;
                    font-style: italic;
                }}
                
                .email-footer {{
                    background-color: #f4f4f4;
                    padding: 20px 30px;
                    text-align: center;
                    font-size: 14px;
                    color: #777;
                    border-top: 1px solid #eaeaea;
                }}
                
                .footer-links {{
                    margin-top: 10px;
                }}
                
                .footer-links a {{
                    color: #764ba2;
                    text-decoration: none;
                    margin: 0 10px;
                }}
                
                .primary-button {{
                    display: inline-block;
                    background: linear-gradient(135deg, #ff7a00, #ff9500);
                    color: #ffffff !important;
                    padding: 12px 25px;
                    text-decoration: none;
                    border-radius: 30px;
                    font-weight: 600;
                    margin-top: 15px;
                    text-align: center;
                    box-shadow: 0 4px 8px rgba(255, 122, 0, 0.25);
                }}
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    <div class="company-logo">LAKSCODE</div>
                    <h1>New Contact Form Submission</h1>
                </div>
                
                <div class="email-content">
                    <p class="intro-text">You have received a new inquiry from your website contact form. Below are the details of the submission:</p>
                    
                    <div class="submission-details">
                        <div class="detail-row">
                            <span class="detail-label">Name</span>
                            <span class="detail-value">{name}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="detail-label">Email Address</span>
                            <span class="detail-value">{email}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="detail-label">Company</span>
                            <span class="detail-value">{company}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="detail-label">Service Interest</span>
                            <span class="detail-value">{service}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="detail-label">Message</span>
                            <div class="message-box">{message}</div>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:{email}" class="primary-button">Reply to {name}</a>
                    </div>
                </div>
                
                <div class="email-footer">
                    <p>© 2025 LaksCode. All rights reserved.</p>
                    <div class="footer-links">
                        <a href="https://lakscode.com">Website</a>
                        <a href="https://lakscode.com/contact">Contact</a>
                        <a href="https://lakscode.com/services">Services</a>
                    </div>
                    <p>Plot no 156, Bharathi Nagar, 8th cross Street, Thanjavur - 613010, Tamil Nadu, India</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Attach HTML content
        msg.attach(MIMEText(email_body, 'html'))
        
        # Get all recipients
        all_recipients = [to_email]
        if cc_email:
            all_recipients.append(cc_email)
        
        try:
            # Setup SMTP server
            server = smtplib.SMTP(EMAIL_HOST, EMAIL_PORT)
            server.starttls()
            server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            
            # Send email
            server.sendmail(EMAIL_HOST_USER, all_recipients, msg.as_string())
            server.quit()
            
            return jsonify({
                "success": True,
                "message": "Email sent successfully!"
            }), 200
            
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return jsonify({
                "success": False,
                "error": f"Failed to send email: {str(e)}"
            }), 500
    
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        return jsonify({
            "success": False,
            "error": f"Server error: {str(e)}"
        }), 500

@app.route('/', methods=['GET'])
def index():
    """Root endpoint to verify the server is running."""
    return jsonify({
        "status": "success",
        "message": "LaksCode IT Consultation Contact Form Server is running",
        "version": "1.0.0",
        "endpoints": {
            "health_check": "/health",
            "contact_form": "/api/contact"
        }
    }), 200

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint to verify the server is running."""
    return jsonify({
        "status": "ok",
        "message": "Server is running",
        "version": "1.0.0"
    }), 200

@app.route('/test-cors', methods=['GET', 'POST', 'OPTIONS'])
def test_cors():
    """Test endpoint to check CORS configuration."""
    if request.method == 'OPTIONS':
        return jsonify({"status": "CORS preflight successful"}), 200
    elif request.method == 'GET':
        return jsonify({"status": "GET request successful"}), 200
    elif request.method == 'POST':
        try:
            data = request.json or {}
            return jsonify({
                "status": "POST request successful", 
                "received_data": data
            }), 200
        except Exception as e:
            return jsonify({
                "status": "error",
                "error": str(e)
            }), 500

# PythonAnywhere specific code - enables WSGI application
# This is the entry point for PythonAnywhere
application = app

if __name__ == '__main__':
    # In production, set debug=False
    debug_mode = os.getenv('FLASK_DEBUG', 'True').lower() in ('true', '1', 't')
    port = int(os.getenv('PORT', 5000))
    
    print(f"Starting server on port {port} with debug={debug_mode}")
    print(f"Root endpoint available at: http://localhost:{port}/")
    print(f"Health check available at: http://localhost:{port}/health")
    print(f"Contact endpoint available at: http://localhost:{port}/api/contact")
    
    app.run(debug=debug_mode, host='0.0.0.0', port=port)
