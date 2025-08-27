#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
This file is used by PythonAnywhere to serve your application.
It imports your Flask application and serves it.
"""

from app import application

# PythonAnywhere looks for an 'application' object in this file
if __name__ == '__main__':
    application.run()
