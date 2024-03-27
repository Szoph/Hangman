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