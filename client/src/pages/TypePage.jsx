import Chart from '../components/Chart';
import './TypePage.css';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { LanguageContext } from "../context/languageContext";

function TypePage() {
    const { language, changeLanguage, getMessage } = useContext(LanguageContext);
    const [data, setData] = useState([{'name':'000000', 'value':0},{'name':'000000', 'value':0}]);
    const { id } = useParams();
    const type_list = getMessage('types', "type_list")

    function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    }
    const type_name_list_fixed =  getMessage('types', "type_name_list_fixed")
    const type_name_list =  getMessage('types', "type_name_list")
    shuffle(type_name_list)

    return (
    <div className='ms_typepage'>
        <div className='ms_typepage_desc'>
            <div className='container'>
                <h3>{getMessage('types', "path")+' > '+type_list[id-1][0]}</h3>
                <h1>{type_name_list_fixed[id-1][0]}<br></br>{type_name_list_fixed[id-1][1]}</h1>
                <p>{type_list[id-1][1]}</p>
                <img src={'../../type'+id+'.png'} alt='img'/>
            </div>
        </div>
        <div className='ms_typepage_index'>
            <div className='container'>
                <div className='ms_typepage_index_left'>
                    <h3><span>'{type_list[id-1][0]}'</span> {getMessage('types', "recommend")}</h3>
                    <p>{getMessage('types', "recommend_desc")}</p>
                </div>
                <a href={"/type"+id+".pdf"} target="_blank">{getMessage('types', "pdf_btn")}</a>
            </div>
        </div>
        <div className='ms_typepage_chart'>
            <div className='container'>
                <div className='ms_typepage_chart_index'>
                    <h1>{data[data.length-1]['value'].toFixed(2)}</h1>
                    <div>
                        <p className='index_tag'>
                            <span>{(data[data.length-1]['value']-data[data.length-2]['value']).toFixed(2)}</span>
                            <span>{([(data[data.length-1]['value'] - data[data.length-2]['value'])/data[data.length-1]['value']] * 100).toFixed(2)+"%"}</span></p>
                        <p className='update'>{data[data.length-1]['name']} {getMessage('types', "update")}</p>
                    </div>
                </div>
                <Chart id={id} data={data} setData={setData}/>
            </div>
        </div>
        <div className='ms_typepage_other'>
            <div className='container'>
                <h3>{getMessage('types', "others")}</h3>
                <ul className='ms_types_list'>
                    {type_name_list.slice(0,4).map((item, index)=>{return(
                        <li key={index}>
                            <Link to={'../../type/'+(item[2])}>
                                <img src={'../../type'+(item[2])+'.png'}></img>
                                <p>{item[0]}<br></br>{item[1]}</p>
                            </Link>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    </div>
    );
  }
  
  export default TypePage;