from flask import Blueprint, jsonify

from controllers import GameController


game_blueprint: Blueprint = Blueprint('game', __name__)


@game_blueprint.route(rule='/test', methods=['GET'])
def test():
    return GameController.test()


@game_blueprint.route(rule='/call-api', methods=['GET'])
def movie_external_api_call():
    movie_response = GameController.movie_external_api_call()
    print(movie_response)

    if movie_response and isinstance(movie_response, (dict, list)):
        return jsonify(movie_response)
    else:
        return jsonify({
            'success': False,
            'error': 'Failed to fetch movies'
    }), 500

@game_blueprint.route(rule='/get-movies', methods=['GET'])
def get_movies_fromdb():
    genre_response, status_code = GameController.get_movies_fromdb()
    print(genre_response)
    return jsonify(genre_response), status_code
    # else:
    #     return jsonify({
    #         'success': False,
    #         'error': 'Failed to fetch movies'
    # }), 500


