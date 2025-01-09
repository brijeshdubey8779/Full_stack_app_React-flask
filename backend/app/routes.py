from flask import Blueprint, jsonify, current_app, request
from app import mongo

main = Blueprint('main', __name__)

@main.route('/api/data', methods=['GET','POST'])
def get_data():
    # mongo = current_app.extensions['mongo']
    data = mongo.db.users.find_one()
    if data:
        data['_id'] = str(data['_id'])
        return jsonify(data)
    return jsonify({"message": "Hello , World!"})