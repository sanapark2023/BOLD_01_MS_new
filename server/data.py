import requests
import os
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
import pandas as pd
from requests import get 

AUTH_KEY = os.getenv("AUTH_KEY")
URL_1 = os.getenv("1_URL")
URL_2 = os.getenv("2_URL")
URL_3 = os.getenv("3_URL")
URL_4 = os.getenv("4_URL")
URL_5 = os.getenv("5_URL")
URL_6 = os.getenv("6_URL")
URL_7 = os.getenv("7_URL")

def start_date_check():
    start_date_m = (datetime.today() - timedelta(days=3650)).strftime('%Y%m')
    today_m = datetime.today().strftime('%Y%m')
    start_date_y = (datetime.today() - timedelta(days=3650)).strftime('%Y')
    today_y = datetime.today().strftime('%Y')
    return start_date_m, today_m, start_date_y, today_y
    
def make_raw_data(type):
    start_date_m, today_m, start_date_y, today_y = start_date_check()
    code_1 = URL_1.format(start_date_m, today_m)
    code_2 = URL_2.format(start_date_m, today_m)
    code_3 = URL_3.format(start_date_m, today_m)
    code_4 = URL_4.format(start_date_m, today_m)
    code_5 = URL_5.format(start_date_m, today_m)
    code_6 = URL_6.format(start_date_y, today_y)
    
    # 1. 투자자예탁금
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/120/"+code_1
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data_1 = []
    for d in data_list:
        data_1.append({'name':d["TIME"], 'value':d["DATA_VALUE"]}) 
    if len(data_1) < 120:
        date_string = data_1[-1]['name']
        date_obj = datetime.strptime(date_string, "%Y%m")
        new_date_obj = date_obj + relativedelta(months=1)
        data_1.append({'name':new_date_obj.strftime('%Y%m'), 'value':data_1[-1]['value']})
    
    # 2. 소비심리지수
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/120/"+code_2
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data_2 = []
    for d in data_list:
        data_2.append({'name':d["TIME"], 'value':d["DATA_VALUE"]}) 
    if len(data_2) < 120:
        date_string = data_2[-1]['name']
        date_obj = datetime.strptime(date_string, "%Y%m")
        new_date_obj = date_obj + relativedelta(months=1)
        data_2.append({'name':new_date_obj.strftime('%Y%m'), 'value':data_2[-1]['value']})
    
    # 3. 주식시장 일평균 거래대금(코스피)(천원)
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/120/"+code_3
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data_3 = []
    for d in data_list:
        data_3.append({'name':d["TIME"], 'value':d["DATA_VALUE"]}) 
    if len(data_3) < 120:
        date_string = data_3[-1]['name']
        date_obj = datetime.strptime(date_string, "%Y%m")
        new_date_obj = date_obj + relativedelta(months=1)
        data_3.append({'name':new_date_obj.strftime('%Y%m'), 'value':data_3[-1]['value']})
    
    # 4. 설비투자지수(100)
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/120/"+code_4
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data_4 = []
    for d in data_list:
        data_4.append({'name':d["TIME"], 'value':d["DATA_VALUE"]}) 
    if len(data_4) < 120:
        date_string = data_4[-1]['name']
        date_obj = datetime.strptime(date_string, "%Y%m")
        new_date_obj = date_obj + relativedelta(months=1)
        data_4.append({'name':new_date_obj.strftime('%Y%m'), 'value':data_4[-1]['value']})
    
    # 5. 현재가계저축(100)

    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/120/"+code_5
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    data_5 = []
    for d in data_list:
        data_5.append({'name':d["TIME"], 'value':d["DATA_VALUE"]}) 
    if len(data_5) < 120:
        date_string = data_5[-1]['name']
        date_obj = datetime.strptime(date_string, "%Y%m")
        new_date_obj = date_obj + relativedelta(months=1)
        data_5.append({'name':new_date_obj.strftime('%Y%m'), 'value':data_5[-1]['value']})
    
    # 6. 합계출산율(년도)(명)
    ecos_url = "https://ecos.bok.or.kr/api/StatisticSearch/"+AUTH_KEY+"/json/kr/1/120/"+code_6
    response = requests.get(ecos_url).json()
    data_list = response['StatisticSearch']['row']
    before_data_6 = []
    new_data_6 =[]
    for d in data_list:
        before_data_6.append({'name':d["TIME"], 'value':d["DATA_VALUE"]}) 
    for d in before_data_6:
        start_month = 1
        if d['name'] == start_date_m[:4]:
            start_month = int(start_date_m[-2:])
        while start_month <= 12: 
            new_data_6.append({'name':d['name']+str(start_month).zfill(2), 'value':d['value']})
            start_month += 1
    if before_data_6[-1]['name'][:4] != today_y:
        start_month = 1
        while start_month < int(today_m[-2:]):
            new_data_6.append({'name':today_y+str(start_month).zfill(2), 'value':new_data_6[-1]['value']})
            start_month += 1
    
    # 데이터 프레임으로 변환
    df_1 = pd.DataFrame(data_1, columns=['name', 'value'])
    df_1['value'] = pd.to_numeric(df_1['value'])
    max_value = df_1['value'].max()
    min_value = df_1['value'].min()
    df_1['scaled'] = 50+(df_1['value']-min_value)*100/(max_value-min_value)
    df_1.set_index('name', inplace=True)
    
    df_2 = pd.DataFrame(data_2, columns=['name', 'value'])
    df_2['value'] = pd.to_numeric(df_2['value'])
    df_2['scaled'] = df_2['value'] 
    df_2.set_index('name', inplace=True)
    
    df_3 = pd.DataFrame(data_3, columns=['name', 'value'])
    df_3['value'] = pd.to_numeric(df_3['value'])
    max_value = df_3['value'].max()
    min_value = df_3['value'].min()
    df_3['scaled'] = 50+(df_3['value']-min_value)*100/(max_value-min_value)
    df_3.set_index('name', inplace=True)
    
    df_4 = pd.DataFrame(data_4, columns=['name', 'value'])
    df_4.set_index('name', inplace=True)
    df_4['value'] = pd.to_numeric(df_4['value'])
    df_4['scaled'] = df_4['value'] 
    
    df_5 = pd.DataFrame(data_5, columns=['name', 'value'])
    df_5['value'] = pd.to_numeric(df_5['value'])
    df_5['scaled'] = (df_5['value']-70)*5
    df_5.set_index('name', inplace=True)
    
    df_6 = pd.DataFrame(new_data_6, columns=['name', 'value'])
    df_6['value'] = pd.to_numeric(df_6['value'])
    df_6['scaled'] = df_6['value']*100
    df_6.set_index('name', inplace=True)
    
    #-----------------------------ESG------------------------------#
    
    # ESG 원본 데이터 엑셀저장하고 불러오기
    FILE_NAME = "DowJonesSKI.xls"
    with open("DowJonesSKI.xls", "wb") as f:   
        response = get(URL_7)               
        f.write(response.content)     
    df = pd.read_excel(FILE_NAME, skiprows=6)
    
    # 원본 excel에서 마지막 필요없는 4개 행 제거
    df = df[:-4]
    
    lst = df.values.tolist()
    index = 0
    for i in lst:
        lst[index][0] = i[0].strftime('%Y%m')
        index += 1
    month = {}
    for i in lst:
        if i[0] not in month:
            month[i[0]] = {'total':0, 'days':0, 'avg':0}
    for i in lst:
        month[i[0]]['total'] += i[1]
        month[i[0]]['days'] += 1
    for i in month.values():
        i['avg'] = i['total']/i['days']
        
    trash = []
    start_date_m = (datetime.today() - timedelta(days=3650)).strftime('%Y%m')
    today_m = datetime.today().strftime('%Y%m')
    for i in month.keys():
        if datetime.strptime(i,"%Y%m") < datetime.strptime(start_date_m,"%Y%m"):
            trash.append(i)
    for i in trash:
        del month[i]
        trash.remove(i)
    if len(month)>120:
        for i in month.keys():
            if datetime.strptime(i,"%Y%m") == datetime.strptime(today_m,"%Y%m"):
                trash.append(i)
    for i in trash:
        del month[i]
    data_7 = []
    for i in month.keys():
        data_7.append({'name':i,'value':month[i]['avg']})
        
    # 데이터 프레임으로 변환
    df_7 = pd.DataFrame(data_7, columns=['name', 'value'])
    max_value = df_7['value'].max()
    min_value = df_7['value'].min()
    df_7['scaled'] = 50+(df_7['value']-min_value)*100/(max_value-min_value)
    df_7.set_index('name', inplace=True)
    
    #데이터 합산
    all_df = pd.DataFrame(columns=[1, 2,3,4,5,6,7])
    all_df[1] = df_1['scaled']
    all_df[2] = df_2['scaled']
    all_df[3] = df_3['scaled']
    all_df[4] = df_4['scaled']
    all_df[5] = df_5['scaled']
    all_df[6] = df_6['scaled']
    all_df[7] = df_7['scaled']
    
    all_df['수익'] = ((all_df[1]+all_df[2])/2+4*all_df[3])/5
    all_df['안정'] = ((all_df[1]+all_df[2])*2+all_df[3])/5
    all_df['현재'] = ((all_df[4]+all_df[6])/2+4*all_df[5])/5
    all_df['미래'] = ((all_df[4]+all_df[6])*2+all_df[5])/5
    
    all_df['수현고'] = (all_df['수익']+all_df['현재']+all_df[7])/3
    all_df['수현저'] = (all_df['수익']+all_df['현재']+100/all_df[7])/3
    all_df['수미고'] = (all_df['수익']+all_df['미래']+all_df[7])/3
    all_df['수미저'] = (all_df['수익']+all_df['미래']+100/all_df[7])/3
    all_df['안현고'] = (all_df['안정']+all_df['현재']+all_df[7])/3
    all_df['안현저'] = (all_df['안정']+all_df['현재']+100/all_df[7])/3
    all_df['안미고'] = (all_df['안정']+all_df['미래']+all_df[7])/3
    all_df['안미저'] = (all_df['안정']+all_df['미래']+100/all_df[7])/3
    
    result = [{'name': idx_val, 'value': row[type]} 
          for idx_val, row in all_df.loc[:, [type]].iterrows()]
    return result

def get_data(type):
    if type == 1:
        result = make_raw_data('수현고')
    elif type == 2:
        result = make_raw_data('수현저')
    elif type == 3:
        result = make_raw_data('안현저')
    elif type == 4:
        result = make_raw_data('안현고')
    elif type == 5:
        result = make_raw_data('수미고')
    elif type == 6:
        result = make_raw_data('수미저')
    elif type == 7:
        result = make_raw_data('안미고')
    else:
        result = make_raw_data('안미저')
    return result