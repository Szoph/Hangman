from flask import Flask, jsonify
from flask_cors import CORS
from routes import auth_routes, game_routes, user_routes
from db_supabase import supabase_connection

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})  # TODO: Add vercel URL here
# 1ab54a6a721446f3ba5dc7cce2466bc9


@app.route(rule="/test_flask", methods=["GET", "OPTIONS"])
def return_home():
    return jsonify({
        'message': "Flask is running",
    })


app.register_blueprint(supabase_connection.supabase_blueprint, url_prefix='/supabase')  # http://127.0.0.1:5000/user/...
app.register_blueprint(auth_routes.auth_blueprint, url_prefix='/auth')  # http://127.0.0.1:5000/auth/...
app.register_blueprint(game_routes.game_blueprint, url_prefix='/game')  # http://127.0.0.1:5000/game/...
app.register_blueprint(user_routes.user_blueprint, url_prefix='/user')  # http://127.0.0.1:5000/user/...


if __name__ == "__main__":
    app.run(debug=True)  # Development Mode
