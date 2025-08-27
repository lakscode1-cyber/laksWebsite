# LaksCode IT Consultation Contact Form Backend

This is a Flask server that handles contact form submissions from the LaksCode IT Consultation website and forwards them as emails.

## Setup Instructions for Local Development

1. Make sure Python 3.8+ is installed on your system.

2. Install the required dependencies:
   ```
   cd backend
   pip install -r requirements.txt
   ```

3. Set up your email credentials in the `.env` file:
   - For Gmail, you'll need to use an App Password instead of your regular password.
   - Go to your Google Account > Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail" and paste it in the `.env` file.

4. Run the Flask server:
   ```
   python app.py
   ```

## API Endpoints

### GET /
Returns server status information and available endpoints.

### GET /health
Health check endpoint to verify the server is running.

### POST /api/contact
Accepts form data from the contact form and sends an email.

**Required fields:**
- name: String
- email: String

**Optional fields:**
- company: String
- service: String
- message: String
- to: Email recipient (defaults to admin email)
- cc: CC email address

## Deployment on PythonAnywhere

1. **Create a Web App on PythonAnywhere**
   - Sign in to PythonAnywhere
   - Go to the Web tab and click "Add a new web app"
   - Choose "Manual configuration" (not "Flask")
   - Select Python version (3.8 or newer)

2. **Set Up Files**
   - Upload all backend files to PythonAnywhere using the Files tab
   - Structure should match your local repository

3. **Create Virtual Environment and Install Dependencies**
   ```bash
   mkvirtualenv --python=python3.8 laksform
   cd ~/path/to/your/app
   pip install -r requirements.txt
   ```

4. **Configure Web App**
   - In the Web tab, set:
     - Source code: /home/yourusername/path/to/app
     - Working directory: /home/yourusername/path/to/app
     - WSGI configuration file: Use the auto-generated one but modify it

5. **Edit the WSGI Configuration File**
   Replace the Flask section with:
   ```python
   import sys
   path = '/home/yourusername/path/to/app'
   if path not in sys.path:
       sys.path.append(path)
   
   from app import application  # Import the application object
   ```

6. **Set Environment Variables**
   - In the Web tab, add environment variables for:
     - EMAIL_HOST
     - EMAIL_PORT
     - EMAIL_HOST_USER
     - EMAIL_HOST_PASSWORD
     - FLASK_DEBUG (set to "False" for production)

7. **Reload the Web App**
   - Click the "Reload" button for your web app

## Important Notes

- CORS is configured to allow requests only from lakscode.com domains
- Make sure to update the `.env` file with your actual email credentials before running the server
- For security, never commit the `.env` file with real credentials to version control
- Use HTTPS in production for secure communication
- Monitor logs on PythonAnywhere for any issues
