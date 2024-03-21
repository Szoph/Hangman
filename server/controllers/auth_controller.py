from flask import jsonify
import jwt
from datetime import datetime, timedelta
from functools import wraps
from db_supabase import supabase
from utils import ApiResponse


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
    def sign_up_user(username: str, password: str):
        try:
        except Exception as e:
            return ApiResponse(success=False, error=(str(e)))
