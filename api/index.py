from flask import Flask
app = Flask(__name__)


@app.route("/api/hello")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/hi")
def hi_world():
    return "<p>Hi, World!</p>"
