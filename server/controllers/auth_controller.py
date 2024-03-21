from flask import jsonify, request
import jwt
from datetime import datetime, timedelta
# from functools import wraps
import bcrypt
from db_supabase import supabase
from utils import ApiResponse
import os
from dotenv import load_dotenv

load_dotenv()


class AuthController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the auth routes'}
        return jsonify(response)

    @staticmethod
    def user_exists(username: str):
        try:
            data, _ = supabase.table("users").select("username").eq('username', username).single().execute()

            return ApiResponse(success=True, data=data)
        except Exception as e:
            return ApiResponse(success=False, error=str(e))

    @staticmethod
    def sign_up_user():
        try:
            username = request.json.get('username')
            password = request.json.get('password')

            if not username or not password:
                return ApiResponse(success=False, error="Invalid username or password")

            encrypt_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

            user_data: dict = {
                'username': username,
                'password': encrypt_password.decode('utf-8')
            }

            data, _ = supabase.table("users").insert(user_data).execute()

            return ApiResponse(success=True, data="User was created!")
        except Exception as e:
            return ApiResponse(success=False, error=(str(e)))

    @staticmethod
    def validate_token(token):
        if not token:
            return ApiResponse(success=False, error="Token is missing")

        try:
            payload = jwt.decode(token, os.environ.get("SECRET_KEY"), algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return ApiResponse(success=False, error="Token has expired")
        except jwt.InvalidTokenError:
            return ApiResponse(success=False, error="Invalid token")

        return ApiResponse(success=True, data=payload)

    @staticmethod
    def sign_in_user():
        try:
            username = request.json.get('username')
            password = request.json.get('password')

            if not username or not password:
                return ApiResponse(success=False, error="Invalid username or password")

            data_password, _ = supabase.table("users").select("password").eq('username', username).single().execute()
            encrypted_password = data_password[1]["password"]

            decrypt_password = bcrypt.checkpw(password.encode('utf-8'), encrypted_password.encode('utf-8'))

            if decrypt_password:
                token_expiry = datetime.now() + timedelta(hours=1)
                payload = {'username': username, 'exp': token_expiry}
                jwt_token = jwt.encode(payload, os.environ.get("SECRET_KEY"), algorithm='HS256')
                return ApiResponse(success=True, data={'message': 'User signed in!', 'token': jwt_token})
            else:
                return ApiResponse(success=False, error="Incorrect password")
        except Exception as e:
            return ApiResponse(success=False, error=(str(e)))
