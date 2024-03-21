from flask import Blueprint
from controllers import AuthController


auth_blueprint = Blueprint('auth', __name__)


@auth_blueprint.route(rule='/test', methods=['GET'])
def test():
    return AuthController.test()
