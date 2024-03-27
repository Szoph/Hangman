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
            print("This should be the data", data)

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
    def validate_token(username: str, auth_token: str = None):
        if auth_token:
            token = auth_token
        else:
            access_token = request.headers.get('Authorization')
            if not access_token:
                return ApiResponse(success=False, error="Token is missing")
            token = access_token.split()[1]

        try:
            payload = jwt.decode(token, os.environ.get("SECRET_KEY"), algorithms=['HS256'])
            if payload["username"] == username:
                return ApiResponse(success=True, data=payload)
            else:
                return ApiResponse(success=False, error="Suspicious Activity")
        except jwt.ExpiredSignatureError:
            return ApiResponse(success=False, error="Token has expired")
        except jwt.InvalidTokenError:
            return ApiResponse(success=False, error="Invalid token")

    @staticmethod
    def sign_in_user():
        try:
            username = request.json.get('username')
            password = request.json.get('password')
            print(username)
            print(password)

            if not username or not password:
                return ApiResponse(success=False, error="Invalid username or password")

            data_password, _ = supabase.table("users").select("password").eq('username', username).single().execute()
            print(data_password)


            encrypted_password = data_password[1]["password"]
            print("This should be the decrypted password", encrypted_password)


            decrypt_password = bcrypt.checkpw(password.encode('utf-8'), encrypted_password.encode('utf-8'))
            print("This should be the decrypted password", decrypt_password)


            if decrypt_password:
                token_expiry = datetime.now() + timedelta(hours=1)
                payload = {'username': username, 'exp': token_expiry}
                jwt_token = jwt.encode(payload, os.environ.get("SECRET_KEY"), algorithm='HS256')
                print(jwt_token)
                return ApiResponse(success=True, data={'message': 'User signed in!', 'token': jwt_token})
            else:
                return ApiResponse(success=False, error="Incorrect password")
        except Exception as e:
            print("This is the response error: ", e)
            return ApiResponse(success=False, error=(str(e)))

    @staticmethod
    def update_username(user: str, new_username: str):
        try:
            user_check = AuthController.user_exists(user)

            if not user_check.success:
                return ApiResponse(success=False, error="User doesn't exist")

            data, _ = supabase.table('users').update({"username": new_username}).eq('username', user).execute()

            # Recreate Access Token
            token_expiry = datetime.now() + timedelta(hours=1)
            payload = {'username': new_username, 'exp': token_expiry}
            jwt_token = jwt.encode(payload, os.environ.get("SECRET_KEY"), algorithm='HS256')

            return ApiResponse(success=True, data={'confirmation': "User has been updated!", 'new_token': jwt_token})
        except Exception as e:
            return ApiResponse(success=False, data="Failed to update username", error={str(e)})

    @staticmethod
    def update_password(user: str, old_password: str, new_password: str):
        try:
            data_password, _ = supabase.table("users").select("password").eq('username', user).single().execute()
            encrypted_password = data_password[1]["password"]

            decrypt_password = bcrypt.checkpw(old_password.encode('utf-8'), encrypted_password.encode('utf-8'))
            if not decrypt_password:
                return ApiResponse(success=False, error="Password doesn't match")

            encrypt_password = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())

            data, _ = (supabase.table('users').update({'password': encrypt_password.decode('utf-8')})
                       .eq('username', user).execute())

            return ApiResponse(success=True, data="Password has been changed!")
        except Exception as e:
            return ApiResponse(success=False, data="Failed to update password", error={str(e)})

    @staticmethod
    def update_user():
        user = request.json.get('user')
        change_type = request.json.get('type')
        old_value = request.json.get('oldValue')
        new_value = request.json.get('newValue')

        access_token = request.headers.get('Authorization')
        if not access_token:
            return ApiResponse(success=False, error="Token is missing")

        token = access_token.split()[1]

        token_validation: ApiResponse = AuthController.validate_token(username=user, auth_token=token)

        if token_validation.success:
            if change_type == "username":
                return AuthController.update_username(user, new_username=new_value)
            else:
                return AuthController.update_password(user, old_password=old_value, new_password=new_value)

        else:
            return ApiResponse(success=False, error=token_validation.error)

    @staticmethod
    def delete_user(username: str):
        access_token = request.headers.get('Authorization')
        if not access_token:
            return ApiResponse(success=False, error="Token is missing")

        token = access_token.split()[1]

        token_validation: ApiResponse = AuthController.validate_token(username=username, auth_token=token)

        if token_validation.success:
            data, _ = supabase.table('users').delete().eq('username', username).execute()

            return ApiResponse(success=True, data="Account has been deleted!")
        else:
            return ApiResponse(success=False, data="Failed to delete account", error=token_validation.error)
