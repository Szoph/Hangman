from flask import Blueprint
from controllers import UserController


user_blueprint: Blueprint = Blueprint('user', __name__)


@user_blueprint.route(rule='/test', methods=['GET'])
def login():
    return UserController.test()

