from flask import Flask, jsonify, request, redirect, url_for
from flask import render_template
from flask.views import View
from flask_cors import CORS
import json 
import requests
from datetime import datetime, timedelta
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
def get_data():
    profit, esg, future_vision = 0, 0, 0
    survey_data = json.loads(request.args.get('surveyData'))
    if survey_data["1"] == 1:
        profit += 4
        esg += 4
        future_vision += 4
    elif survey_data["1"] == 2:
        profit += 3
        esg += 3
        future_vision += 3
    elif survey_data["1"] == 3:
        profit += 2
        esg += 2
        future_vision += 2
    else:
        profit += 1
        esg += 1
        future_vision += 1
    if survey_data["3"] == 1:
        profit += 1
    elif survey_data["3"] == 2:
        profit += 2
    elif survey_data["3"] == 3:
        profit += 3
    else:
        profit += 4
    if survey_data["4"] == 1:
        profit += 1
    elif survey_data["4"] == 2:
        profit += 2
    elif survey_data["4"] == 3:
        profit += 3
    else:
        profit += 4
    if survey_data["5"] == 1:
        profit += 2
    elif survey_data["5"] == 2:
        profit += 4
    elif survey_data["5"] == 3:
        profit += 6
    else:
        profit += 8
    if survey_data["6"] == 1:
        pass
    else:
        profit += 5
    if survey_data["7"] == 1:
        profit += 1
        future_vision += 2
    elif survey_data["7"] == 2:
        profit += 2
        future_vision += 2
    if survey_data["8"] == 1:
        esg += 2
    elif survey_data["8"] == 2:
        esg += 4
    elif survey_data["8"] == 3:
        esg += 6
    else:
        esg += 8
    if profit >= 14 and future_vision < 3 and esg >= 6:
        type = 1
    elif profit >= 14 and future_vision < 3 and esg < 6:
        type = 2
    elif profit >= 14 and future_vision >= 3 and esg < 6:
        type = 3
    elif profit >= 14 and future_vision >= 3 and esg >= 6:
        type = 4
    elif profit < 14 and future_vision >= 3 and esg >= 6:
        type = 5
    elif profit < 14 and future_vision < 3 and esg < 6:
        type = 6
    elif profit < 14 and future_vision < 3 and esg >= 6:
        type = 7
    else:
        type = 8
    response = jsonify({'type': type})
    response = response_header_set(response)
    return  response

@app.route('/api/data/<int:type>')
def send_data(type):
    start_date = (datetime.today() - timedelta(days=3650)).strftime('%Y%m')
    today = datetime.today().strftime('%Y%m')
    auth_key = "D0W02F3T4EJL1VJ2L2Q3"
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
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+auth_key+"/json/kr/1/150/"+code
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data = []
    for d in data_list:
        data.append({'name':d["TIME"], 'value':d["DATA_VALUE"]})        
    response = jsonify({'message': data})
    response = response_header_set(response)
    return response

if __name__ == '__main__':
    app.run(port=5000)