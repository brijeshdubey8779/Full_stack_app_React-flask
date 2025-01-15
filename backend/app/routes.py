from flask import Blueprint, jsonify, current_app, request
from app import mongo
from werkzeug.security import generate_password_hash, check_password_hash

main = Blueprint('main', __name__)

@main.route('/api/data', methods=['GET','POST'])
def get_data():
    
    data = mongo.db.users.find_one()
    if data:
        data['_id'] = str(data['_id'])
        return jsonify(data)
    return jsonify({"message": "Hello , World!"})

@main.route('/api/register', methods=['POST'])
def register():
        
    if request.method == "POST":
        data = request.get_json()
        try:
            if data.get('email') == None:
                return jsonify({"message": "Email is required"}), 400
            
            if data.get('password') == None:
                return jsonify({"message": "Email is required"}), 400
            
            if mongo.db.users.find_one({"email": data['email']}):
                return jsonify({"message": "Email already exists"})
            data['password'] = generate_password_hash(data.get('password'), method='scrypt')
            mongo.db.users.insert_one(data)
            return jsonify({"message": "Data added successfully!"}), 200
        except Exception as e:
            return jsonify({"message": e})
        
    

@main.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    if data.get('email') == None:
        return jsonify({"message": "Email is required"}), 400
    
    if data.get('password') == None:
        return jsonify({"message": "Password is required"}), 400
    
    if not mongo.db.users.find_one({"email": data['email']}) or check_password_hash(data['password'], mongo.db.users.find_one({"password": data['password']})):
        return jsonify({"message": "please Check your emial or password"}), 400
    else:
        return jsonify({"message": "Logged In"}), 200
    # return jsonify({"message": "Data added successfully!"})
    
@main.route('/api/delete', methods=['POST'])
def delete_data():
    
    mongo.db.patients.delete_many({})
    return jsonify({"message": "Data deleted successfully!"})
            

@main.route("/api/update", methods=["POST"])
def update_data():
    try:
        mongo.db.users.update_many({"name": "Anya"}, {"$set": {"age": 22}})
    except Exception as e:
        print(e)
        return jsonify({"message": e})
    
    return jsonify({"message": "Data updated successfully!"})

@main.route("/api/patinetdata", methods=["POST"])
def add_patient_data():
    data = request.get_json()
    if data.get('name') == None:
        return jsonify({"message": "Name is required"}), 400
    elif data.get('age') == None:
        return jsonify({"message": "Age is required"}), 400
    elif data.get('gender') == None:
        return jsonify({"message": "Gender is required"}), 400
    elif data.get('mobile') == None:
        return jsonify({"message": "Mobile number is required"}), 400
    elif data.get('referred_by') == None:
        return jsonify({"message": "Referred by doctor name is required"}), 400
    elif data.get('date_of_collection') == None:
        return jsonify({"message": "Date of collection of sample is required"}), 400
    elif data.get('date_of_reported') == None:
        return jsonify({"message": "Date of reported date is required"}), 400
    elif data.get('accession_number') == None:
        return jsonify({"message": "Accesion number is required"}), 400
    else:
        mongo.db.patients.insert_one({
            "name": data['name'],
            "age": data['age'],
            "gender": data['gender'],
            "mobile": data['mobile'],
            "referred_by": data['referred_by'],
            "date_of_collection": data['date_of_collection'],
            "date_of_reported": data['date_of_reported'],
            "accession_number": data['accession_number']
            })
        return jsonify({"message": "Data added successfully!"}), 200
    return jsonify({"message": "Something went wrong please try again letter."})

    