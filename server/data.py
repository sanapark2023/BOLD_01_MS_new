import requests
import os
from datetime import datetime, timedelta

AUTH_KEY = os.getenv("AUTH_KEY")

def scale_1(df):
    df
    scaled_data = []
    return scaled_data

def scale_2(df):
    df
    scaled_data = []
    return scaled_data

def scale_3(df):
    df
    scaled_data = []
    return scaled_data

def get_data(type):
    start_date = (datetime.today() - timedelta(days=3650)).strftime('%Y%m')
    today = datetime.today().strftime('%Y%m')
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
    return data