"""
Diagnostic script for PythonAnywhere setup
Run this file on PythonAnywhere to verify configuration
"""
import os
import sys
import smtplib
import socket

def check_python_version():
    print(f"Python version: {sys.version}")
    print(f"Python executable: {sys.executable}")
    print(f"Python path: {sys.path}")

def check_environment_variables():
    print("\n--- Environment Variables ---")
    for var in ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_HOST_USER', 'EMAIL_HOST_PASSWORD']:
        value = os.environ.get(var)
        if value:
            masked = '********' if 'PASSWORD' in var else value
            print(f"{var}: {masked} (found)")
        else:
            print(f"{var}: Not set")

def check_network_connectivity():
    print("\n--- Network Connectivity ---")
    host = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
    port = int(os.environ.get('EMAIL_PORT', 587))
    
    print(f"Testing connection to {host}:{port}")
    try:
        # Test if we can connect to the email server
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(10)
        s.connect((host, port))
        s.close()
        print(f"✅ Successfully connected to {host}:{port}")
    except Exception as e:
        print(f"❌ Failed to connect to {host}:{port}: {str(e)}")

def check_smtp_auth():
    print("\n--- SMTP Authentication ---")
    host = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
    port = int(os.environ.get('EMAIL_PORT', 587))
    username = os.environ.get('EMAIL_HOST_USER', '')
    password = os.environ.get('EMAIL_HOST_PASSWORD', '')
    
    if not username or not password:
        print("❌ Missing email credentials")
        return
    
    try:
        server = smtplib.SMTP(host, port)
        server.set_debuglevel(1)  # Enable debugging
        server.starttls()
        
        print("Attempting login...")
        server.login(username, password)
        print("✅ SMTP authentication successful")
        server.quit()
    except Exception as e:
        print(f"❌ SMTP authentication failed: {str(e)}")

def check_installed_packages():
    print("\n--- Installed Packages ---")
    try:
        import flask
        print(f"Flask version: {flask.__version__}")
    except ImportError:
        print("❌ Flask not installed")
    
    try:
        import flask_cors
        print(f"Flask-CORS installed")
    except ImportError:
        print("❌ Flask-CORS not installed")
    
    try:
        from dotenv import load_dotenv
        print("python-dotenv installed")
    except ImportError:
        print("❌ python-dotenv not installed")

if __name__ == "__main__":
    print("=== PythonAnywhere Diagnostic Tool ===")
    check_python_version()
    check_environment_variables()
    check_network_connectivity()
    check_smtp_auth()
    check_installed_packages()
    print("\nDiagnostic complete.")
