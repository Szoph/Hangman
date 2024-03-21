from flask import Blueprint, jsonify, request
from controllers import AuthController
from utils import ApiResponse
import bcrypt


auth_blueprint: Blueprint = Blueprint('auth', __name__)


@auth_blueprint.route(rule='/test', methods=['GET'])
def test():
    return AuthController.test()


@auth_blueprint.route(rule='/user_exists/<username>', methods=['GET'])
def user_exists(username: str):
    exists: ApiResponse = AuthController.user_exists(username)

    return jsonify({
        'success': exists.success
    })


@auth_blueprint.route(rule="/signup", methods=['POST'])
def sign_up_user():
    user_sign_up = AuthController.sign_up_user()

    if user_sign_up.success:
        return jsonify({
            'success': user_sign_up.success,
            'message': user_sign_up.data
        })

    return jsonify({
        'success': user_sign_up.success,
        'error': user_sign_up.error
    })
