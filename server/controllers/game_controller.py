from flask import jsonify, request
from db_supabase import supabase
from utils import ApiResponse
from .auth_controller import AuthController


class GameController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the game routes'}
        return jsonify(response)

    @staticmethod
    def upload_game():
        try:
            game_state = request.json.get('game_state')
            access_token = request.headers.get("Authorization")
            token = access_token.split()[1]

            if token != 'null':
                user_exists = AuthController.user_exists(game_state['username'])
                if not user_exists.success:
                    return ApiResponse(success=False, error="User wasn't found in database")
                
                user_uuid_response = AuthController.get_user_uuid(game_state['username'])
                if not user_uuid_response.success:
                    return ApiResponse(success=False, error="Unable to get UUID")
                
                user_uuid = user_uuid_response.data
            else:
                token = None

            default_state = {
                'username': "Unknown Player",
                'genre_name': game_state['genre_name'],
                'game_mode': game_state['game_mode'],
                'win': game_state['win'],
            }

            if token:
                default_state['user_id'] = user_uuid
                default_state['username'] = game_state["username"]

            data, _ = supabase.table('games').insert(default_state).execute()
                
            return ApiResponse(success=True, data="Game has been uploaded!")
        except Exception as e:
            return ApiResponse(success=False, data="Failed to upload", error=str(e))
        
    @staticmethod
    def get_ranking():
        try:
            game_state = request.json.get('game_state')
            genre_name = game_state['genre_name']
            game_mode = game_state['game_mode']
            
            game_data, _ = supabase.table('games').select('*').eq('genre_name', genre_name).eq('game_mode', game_mode).execute()
        except Exception as e:
            return ApiResponse(success=False, data="Failed to get leaderboard", error=str(e))

