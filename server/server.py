from type import get_investment_preference_result
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import requests
from datetime import datetime, timedelta

PORT = "5000"
app = Flask(__name__)
CORS(app)

client_url = "http://localhost:3000"
cors = CORS(app, resources={r"/api/*": {"origins": client_url}})

def response_header_set(response):
    response.headers['Access-Control-Allow-Origin'] = client_url
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
    start_date = (datetime.today() - timedelta(days=3650)).strftime('%Y%m')
    today = datetime.today().strftime('%Y%m')
    AUTH_KEY = "D0W02F3T4EJL1VJ2L2Q3"
    if type == 1:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    elif type == 2:
        code = "511Y002/M/{}/{}/FMDA/99988".format(start_date, today)
    elif type == 3:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    elif type == 4:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    elif type == 5:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    elif type == 6:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    elif type == 7:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    else:
        code = "901Y056/M/{}/{}/S23A".format(start_date, today)
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/150/"+code
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data = []
    for d in data_list:
        data.append({'name':d["TIME"], 'value':d["DATA_VALUE"]})        
    response = jsonify({'message': data})
    response = response_header_set(response)
    return response

if __name__ == '__main__':
    app.run(port=PORT, debug=True)