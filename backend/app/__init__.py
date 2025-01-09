from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo

mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    CORS(app)
    
    mongo.init_app(app)
    
    from .routes import main
    app.register_blueprint(main)
    return app
