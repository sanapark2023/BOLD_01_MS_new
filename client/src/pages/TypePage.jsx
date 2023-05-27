import Chart from '../components/Chart';
import './TypePage.css';
import { useParams } from 'react-router-dom';
import React, { useState,useContext, useEffect } from 'react';
import { LanguageContext } from "../context/languageContext";

function TypePage() {
    const { language } = useContext(LanguageContext);
    const [data, setData] = useState([{'name':0,'value':0},{'name':0,'value':0}]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    let type_list
    if (language === "ko") {
        type_list = [['트렌디한 월스트리트인','트렌디한 월스트리트인들은 수익을 중요시합니다. 이들은 기업의 현재가치를 분석하여 투자결정을 내리고, ESG에 관하여 엄격한 잣대를 보유하고 있습니다.'],
                        ['스릴을 즐기는 투자야망인','스릴을 즐기는 투자야망인은 수익을 중요시합니다. 기업의 현재가치를 분석하여 투자결정을 내리지만 기회가 있다면 ESG 트렌드에 부합하지 않더라도 뛰어들 준비가 되어 있습니다.'],
                        ['개척하는 모험가','개척하는 모험가는 수익을 중시할 뿐만 아니라, 미래의 기업가치를 분석하여 투자결정을 내립니다. ESG 가치를 존중하지만, 우선순위는 단연 수익입니다.'],
                        ['실리콘밸리형 미래 기업인','실리콘밸리형 미래기업인은 수익에 집중하고, 기업의 미래가치를 제고하여 투자결정을 내립니다. ESG는 거스를 수 없는 전세계적인 추세라고 생각하며, 그에 따라 기업의 사회, 환경, 거버넌스에 대한 공헌을 중요시합니다.'],
                        ['중재하는 이상주의자','중재하는 이상주의자들은 투자할 때 미래비전을 중시하지만, 현재의 안정 역시 중요하게 생각하여 타협합니다. 이들은 ESG에 대한 엄격한 잣대를 보유하고 있습니다.'],
                        ['소확행의 현실주의자','소확행의 현실주의자는 적은 위험, 적은 수익을 추구합니다. 이들에게 투자는 단기적이고 부수적인 요소이며 현재 기업의 가치를 중요시합니다.'],
                        ['책임있는 CEO','책임있는 CEO로서 이들은 ESG에 대하여 엄격한 잣대를 요구하며, 무모한 투자보다는 안정적이고 현재가치에 집중하는 투자철학을 보유하고 있습니다.'],
                        ['인내하는 미래비전가','인내하는 미래비전가는 안정적이지만 미래 비전이 확고한 기업들을 선택하여 투자합니다. ESG보다는 현재의 안정 등 현실적인 요소들을 추구합니다.']]
    } else {
        type_list = [['Trend-sensitive Wallstreeter','Trendy Wall Streeters prioritize profitability, analyzing the current value of a company to make investment decisions, and holding strict standards for ESG.'],
                        ['Ambitious Investor','Ambitious investors focuses on analyzing the current value of a company to make investment decisions, but are also prepared to invest in those that do not align with strict ESG trends.'],
                        ['Pioneering Explorers','Pioneering explorers prioritize returns and the long-term value when making investment decisions. While they do respect ESG values, profitability remains their top priority.'],
                        ['Silicon-Valleyan Entrepreneur','Silicon Valleyan Entrepreneurs focus on profits and make investment decisions by enhancing the company\'s future value. They consider ESG to be an unstoppable global trend and therefore value the company\'s contribution to social, environmental, and governance issues.'],
                        ['Moderating idealist','Moderating idealists prioritize future vision when investing, but also value current stability and are willing to compromise. They hold strict standards for ESG.'],
                        ['Disciplined realist','Disciplined realists pursue low risk and low returns. For them, investing is a short-term and incidental factor, and they value the current value of the company.'],
                        ['Responsible CEO','Responsible CEOs demand strict standards for ESG and hold an investment philosophy that prioritizes stability and current value over high-risk investments.'],
                        ['Persevering visionist','Persevering visionists prioritize stable but visionary companies when investing, focusing on practical factors such as current stability rather than ESG.']]
    }
    function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    }
    let type_name_list_fixed
    if (language === "ko") {
        type_name_list_fixed =  [['트렌디한', '월스트리트인',1],
                                    ['스릴을 즐기는','투자야망인',2],
                                    ['개척하는', '모험가',3],
                                    ['실리콘밸리형', '미래 기업인',4],
                                    ['중재하는', '이상주의자',5],
                                    ['소확행의', '현실주의자',6],
                                    ['책임있는', 'CEO',7],
                                    ['인내하는', '미래비전가',8]]
    } else {
        type_name_list_fixed =  [['Trend-sensitive', 'Wallstreeter', 1],
                                    ['Ambitious','Investor', 2],
                                    ['Pioneering', 'Explorer', 3],
                                    ['Silicon-Valleyan', 'Entrepreneur', 4],
                                    ['Moderating', 'Idealist', 5],
                                    ['Disciplined', 'Realist', 6],
                                    ['Responsible', 'CEO', 7],
                                    ['Persevering', 'Visionist'], 8]
    }
    let type_name_list
    if (language === "ko") {
        type_name_list =  [['트렌디한', '월스트리트인',1],
                            ['스릴을 즐기는','투자야망인',2],
                            ['개척하는', '모험가',3],
                            ['실리콘밸리형', '미래 기업인',4],
                            ['중재하는', '이상주의자',5],
                            ['소확행의', '현실주의자',6],
                            ['책임있는', 'CEO',7],
                            ['인내하는', '미래비전가',8]]
    } else {
        type_name_list =  [['Trend-sensitive', 'Wallstreeter', 1],
                            ['Ambitious','Investor', 2],
                            ['Pioneering', 'Explorer', 3],
                            ['Silicon-Valleyan', 'Entrepreneur', 4],
                            ['Moderating', 'Idealist', 5],
                            ['Disciplined', 'Realist', 6],
                            ['Responsible', 'CEO', 7],
                            ['Persevering', 'Visionist', 8]]
    }
    shuffle(type_name_list)

    return (
    <div className='ms_typepage'>
        <div className='ms_typepage_desc'>
            <div className='container'>
                <h3>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}{' > '+type_list[id-1][0]}</h3>
                <h1>{type_name_list_fixed[id-1][0]}<br></br>{type_name_list_fixed[id-1][1]}</h1>
                <p>{type_list[id-1][1]}</p>
                <img src={'../../type'+id+'.png'} alt='img'/>
            </div>
        </div>
        <div className='ms_typepage_index'>
            <div className='container'>
                <div className='ms_typepage_index_left'>
                    {language === 'ko' ? <h3><span>'{type_list[id-1][0]}'</span> 에게 추천하는 경제지표를 소개합니다!</h3>:<h3>
Introducing the recommended index for <span>'{type_list[id-1][0]}'</span></h3>}
                    <p>{language === 'ko' ? "각 유형별 수익/안정, 미래/현재가치, ESG 성향에 따라 7개의 거시경제 지표를 활용하여 산출한 지표입니다. 산출 방법에 대한 자세한 설명은 PDF 파일을 받아 확인해보세요!" : "Check out your customized index derived from 7 macroeconomic indicators based on profitability/stability, future/present value, and ESG tendencies of your investment type. Please download the PDF file for a detailed description of the calculation method and how to best utilize the index."}</p>
                </div>
                <a href={"https://docs.google.com/document/d/1aNj7hSHoMkawlxDrOdf8PCpavK2QFKTQix5Oifq79mE/edit?usp=sharing"} target="_blank">{language === 'ko' ? "유형과 지표 설명 PDF받기" : "Index Description PDF"}</a>
            </div>
        </div>
        <div className='ms_typepage_chart'>
            <div className='container'>
            {loading ? <p className='loading_title'>{language === 'ko' ? "이 유형에 딱 맞는 지표를 산출하고 있어요!":"We are calculating the customized index for your investment type!"}</p>:
                <div className='ms_typepage_chart_index'>
                    <h1>{data[data.length-1]['value'].toFixed(2)}</h1>
                    <div>
                        <p className='index_tag'>
                            <span>{(data[data.length-1]['value']-data[data.length-2]['value']).toFixed(2)}</span>
                            <span>{([(data[data.length-1]['value'] - data[data.length-2]['value'])/data[data.length-1]['value']] * 100).toFixed(2)+"%"}</span></p>
                        <p className='update'>{data[data.length-1]['name']}{language === 'ko' ? " 기준, 1달 단위 업데이트" : ", updated monthly"}</p>
                    </div>
                </div>}
                <Chart id={id} data={data} setData={setData} setLoading={setLoading} loading={loading}/>
            </div>
        </div> 
        <div className='ms_typepage_other'>
            <div className='container'>
                <h3>{language === 'ko' ? "나와 비슷하거나 다른 유형도 구경해보세요!" : "Explore other investment types and their customized indices!"}</h3>
                <ul className='ms_types_list'>
                    {type_name_list.slice(0,4).map((item, index)=>{return(
                        <li key={index}>
                            <a href={'../../type/'+(item[2])}>
                                <div className='img_wrapper'><img src={'../../type'+(item[2])+'.png'}></img></div>
                                <p>{item[0]}<br></br>{item[1]}</p>
                            </a>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    </div>
    );
  }
  
  export default TypePage;