from flask import jsonify


class UserController:
    @staticmethod
    def test():
        # Handle login logic
        response = {'message': 'This is how to access the user routes'}
        return jsonify(response)
