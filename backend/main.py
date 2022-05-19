from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/api/ping')
def ping():
    return "ping"


if __name__ == "__main__":
    app.run()