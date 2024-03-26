from flask import jsonify
# from db_supabase import supabase
# from utils import ApiResponse


class UserController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the user routes'}
        return jsonify(response)
