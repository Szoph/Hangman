from flask import jsonify


class GameController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the game routes'}
        return jsonify(response)
