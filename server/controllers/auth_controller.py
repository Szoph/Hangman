from flask import jsonify


class AuthController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the auth routes'}
        return jsonify(response)
