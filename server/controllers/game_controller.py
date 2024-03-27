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
    def check_user_points(username: str):
        try:
            user_uuid_response = AuthController.get_user_uuid(username)
            if not user_uuid_response.success:
                return ApiResponse(success=False, error="Unable to get UUID")
                
            user_uuid = user_uuid_response.data
            data, _ = supabase.table('user_points').select("username").eq("id", user_uuid ).single().execute()

            return ApiResponse(success=True, data="User was with points found")
        except Exception as e:
            return ApiResponse(success=False, data="User doesn't have any points")

    @staticmethod
    def calculate_points(game_mode) -> int:
        if game_mode == 1:
            return 2
        elif game_mode == 2:
            return 5
        elif game_mode == 3:
            return 8
        else:
            return 0

    @staticmethod
    def update_points():
        try:
            game_state = request.json.get('game_state')
            user_uuid_response = AuthController.get_user_uuid(game_state['username'])
            if not user_uuid_response.success:
                return ApiResponse(success=False, error="Unable to get UUID")
                
            user_uuid = user_uuid_response.data
            user_data, _ = supabase.table('user_points').select("points").eq("id", user_uuid).single().execute()

            user_current_points = user_data[1]["points"]
            reward_points = GameController.calculate_points(game_state['game_mode'])
            updated_points = user_current_points + reward_points
             
            data, _ = supabase.table('user_points').update({'points': updated_points}).eq('id', user_uuid).execute()
            
            return ApiResponse(success=True, data="User points have been updated")
        except Exception as e:
            return ApiResponse(success=False, data="Unable to update points", error={str(e)})
        
    @staticmethod
    def upload_points():
        try:
            game_state = request.json.get('game_state')
            user_uuid_response = AuthController.get_user_uuid(game_state['username'])
            if not user_uuid_response.success:
                return ApiResponse(success=False, error="Unable to get UUID")
                
            user_uuid = user_uuid_response.data
            reward_points = GameController.calculate_points(game_state['game_mode'])

            user_points_params = {
                'id': user_uuid,
                'username': game_state["username"],
                'points': reward_points,
            }

            data, _ = supabase.table('user_points').insert(user_points_params).execute()

            return ApiResponse(success=True, data="User points have been uploaded")
        except Exception as e:
            return ApiResponse(success=False, data="Unable to upload points", error="Problem uploading points in database")


    @staticmethod
    def get_ranking():
        try:
            game_data, _ = supabase.table('user_points').select('*').execute()

            all_users = game_data[1]
            sorted_users = sorted(all_users, key=lambda x: x['points'], reverse=True)

            ranking = [{'username': entry['username'], 'points': entry['points']} for entry in sorted_users]
            
            return ApiResponse(success=True, data=ranking)
        except Exception as e:
            return ApiResponse(success=False, data="Failed to get leaderboard", error=str(e))

