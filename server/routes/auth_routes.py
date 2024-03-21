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
