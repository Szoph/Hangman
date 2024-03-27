from flask import Blueprint, jsonify
from controllers import GameController


game_blueprint: Blueprint = Blueprint('game', __name__)


@game_blueprint.route(rule='/test', methods=['GET'])
def test():
    return GameController.test()


@game_blueprint.route(rule='/upload_game', methods=["POST"])
def upload_game():
    upload_state = GameController.upload_game()
    
    if upload_state.success:
        return jsonify({
            'success': upload_state.success,
            'message': upload_state.data,
        })
    else:
        return jsonify({
            'success': upload_state.success,
            'message': upload_state.data,
            'error': upload_state.error
        })
    
@game_blueprint.route(rule='/check_user_points/<username>', methods=["GET"])
def check_user_points(username: str):
    check_state = GameController.check_user_points(username)
    if check_state.success:
        return jsonify({
            'success': check_state.success,
            'message': check_state.data,
        })
    else:
        return jsonify({
            'success': check_state.success,
            'error': check_state.error
        })
    
@game_blueprint.route(rule='/update_points', methods=['PUT'])
def update_points():
    points_state = GameController.update_points()
    if points_state.success:
        return jsonify({
            'success': points_state.success,
            'message': points_state.data,
        })
    else:
        return jsonify({
            'success': points_state.success,
            'message': points_state.data,
            'error': points_state.error
        })
    
@game_blueprint.route(rule='/upload_points', methods=["POST"])
def upload_points():
    points_state = GameController.upload_points()
    if points_state.success:
        return jsonify({
            'success': points_state.success,
            'message': points_state.data,
        })
    else:
        return jsonify({
            'success': points_state.success,
            'message': points_state.data,
            'error': points_state.error
        })
 
@game_blueprint.route(rule='/world_ranking', methods=['GET'])
def get_ranking():
    ranking_state = GameController.upload_game()

    if ranking_state.success:
        return jsonify({
            'success': ranking_state.success,
            'message': ranking_state.data,
        })
    else:
        return jsonify({
            'success': ranking_state.success,
            'message': ranking_state.data,
            'error': ranking_state.error
        })