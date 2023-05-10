from type import get_investment_preference_result
from data import get_data
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from dotenv import load_dotenv

load_dotenv()
PORT = os.getenv("PORT")
CLIENT_URL = os.getenv("CLIENT_URL")
app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": CLIENT_URL}})

def response_header_set(response):
    response.headers['Access-Control-Allow-Origin'] = CLIENT_URL
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response

@app.route('/api/submit-survey')
def get_investment_preference_data():
    survey_data = json.loads(request.args.get('surveyData'))
    type = get_investment_preference_result(survey_data)
    response = jsonify({'type': type})
    response = response_header_set(response)
    return  response

@app.route('/api/data/<int:type>')
def send_data(type):
    data = get_data(type)
    response = jsonify({'message': data})
    response = response_header_set(response)
    return response

if __name__ == '__main__':
    app.run(port=PORT, debug=True)