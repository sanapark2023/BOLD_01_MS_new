import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer, Legend } from 'recharts';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import './Chart.css';
import axios from 'axios';

const server_url = "http://localhost:5000"

// responsible 에서 rendering이 안되는 오류 발생하여 없엤다가 다시 넣어봄
function Chart({id}) {
  const [data, setData] = useState([{'name':'000000', 'value':0}]);
  useEffect(() => {
    axios.get(server_url+'/api/data/'+id,{ withCredentials: true })
        .then(res => {
            console.log(res.data.message)
            setData(res.data.message);
        })
        .catch(err => {
            console.error(err);
        });
}, []);

    return (
      <div className="ms_chart">
         {data.length > 0 ? (
        <ResponsiveContainer width='100%' height={500}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 50, right: 50, top: 5, bottom: 5 }} />
            <YAxis/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    );
  }

export default Chart;