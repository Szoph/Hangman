from flask import Blueprint, jsonify
from controllers import UserController
from utils import ApiResponse


user_blueprint: Blueprint = Blueprint('user', __name__)


@user_blueprint.route(rule='/test', methods=['GET'])
def login():
    return UserController.test()
