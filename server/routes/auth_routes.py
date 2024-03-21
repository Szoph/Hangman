from flask import Blueprint, jsonify
from controllers import AuthController
from utils import ApiResponse


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


@auth_blueprint.route(rule="/signin", methods=['POST', 'GET'])
def sign_in_user():
    user_sign_in = AuthController.sign_in_user()

    if user_sign_in.success:
        return jsonify({
            'success': user_sign_in.success,
            'message': user_sign_in.data
        })

    return jsonify({
        'success': user_sign_in.success,
        'error': user_sign_in.error
    })


@auth_blueprint.route(rule="/access_token/<username>", methods=['POST', 'GET'])
def validate_token(username: str):
    token_check = AuthController.validate_token(username)

    if token_check.success:
        return jsonify({
            'success': True,
            'payload': token_check.data
        })

    return jsonify({
        'success': False,
        'error': token_check.error
    })
