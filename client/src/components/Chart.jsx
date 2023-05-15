import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer, Legend } from 'recharts';
import React, { useState, useEffect,useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
import CircularProgress from '@mui/material/CircularProgress';
import './Chart.css';
import axios from 'axios';

const server_url = "http://3.36.71.159:5000"

// responsible 에서 rendering이 안되는 오류 발생하여 없엤다가 다시 넣어봄
function Chart({id, data, setData, setLoading, loading}) {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    axios.get(server_url+'/api/data/'+id,{ withCredentials: true })
        .then(res => {
            console.log(res.data.message)
            setData(res.data.message);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
        });
}, []);

    return (
      <div className="ms_chart">
        {loading ? 
        <div className='ms_chart_container'>
        <div className='loading_table'>
          <p>{language === 'ko' ? '데이터를 불러오는 중입니다':"Loading data,"}</p>
          <p className='margin_bottom_16px'>{language === 'ko' ? '조금만 기다려 주세요':"please wait a moment."}</p>
          <CircularProgress color="inherit" />
        </div>
        </div>
        :
        <ResponsiveContainer width='100%' height={500}>
          <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 50, right: 50, top: 5, bottom: 5 }} />
            <YAxis/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} /> 
          </LineChart>
        </ResponsiveContainer>}
      </div>
    );
  }

export default Chart;