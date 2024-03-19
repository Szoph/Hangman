from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/", methods=["GET"])
def return_home():
    return jsonify({
        'message': "Flask is running",
    })

if __name__ == "__main__":
    app.run(debug=True) # Development Mode
