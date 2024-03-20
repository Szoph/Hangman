from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from supabase import create_client, Client
from routes import auth_routes, game_routes, user_routes

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})  # TODO: Add vercel URL here

load_dotenv()

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")


supabase: Client = create_client(url, key)


@app.route(rule="/test_flask", methods=["GET", "OPTIONS"])
def return_home():
    return jsonify({
        'message': "Flask is running",
    })


@app.route(rule="/test_supabase", methods=["GET"])
def test_supabase():
    try:
        data, _ = supabase.table('test').select("*").execute()
        return jsonify(data[1])
    except Exception as e:
        return jsonify({
            'error': str(e)
        })


app.register_blueprint(auth_routes.auth_blueprint, url_prefix='/auth')  # http://127.0.0.1:5000/auth/...
app.register_blueprint(game_routes.game_blueprint, url_prefix='/game')  # http://127.0.0.1:5000/game/...
app.register_blueprint(user_routes.user_blueprint, url_prefix='/user')  # http://127.0.0.1:5000/user/...


if __name__ == "__main__":
    app.run(debug=True)  # Development Mode
