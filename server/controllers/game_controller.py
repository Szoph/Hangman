from flask import jsonify
from db_supabase import supabase
from utils import ApiResponse


class GameController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the game routes'}
        return jsonify(response)
