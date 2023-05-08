import './Types.css';
import ScrollToTopLink from '../components/ScrollToTopLink';
import { LanguageContext } from "../context/languageContext";
import { useCallback, useState, useContext } from "react";

function Types() {
    const { language } = useContext(LanguageContext);
    let type_list
    if (language === "ko") {
        type_list =  [['트렌디한', '월스트리트인'],
                    ['스릴을 즐기는','투자야망인'],
                    ['개척하는', '모험가'],
                    ['실리콘밸리형', '미래 기업인'],
                    ['중재하는', '이상주의자'],
                    ['소확행의', '현실주의자'],
                    ['책임있는', 'CEO'],
                    ['인내하는', '미래비전가']]
    } else {
        type_list =  [['The Trend-sensitive', 'Wallstreeter'],
                    ['The Ambitious','Investor'],
                    ['The Pioneering', 'Explorers'],
                    ['The Silicon-Valleyan', 'Entrepreneur'],
                    ['The moderating', 'idealist'],
                    ['The disciplined', 'realist'],
                    ['The responsible', 'CEO'],
                    ['The persevering', 'visionist']]
    }
    return (
    <article className='ms_types'>
        <div className='container'>
        <p className='ms_types_title'>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</p>
        <p className='ms_types_question'>{language === 'ko' ? "나는 어떤 유형의 투자자일까요?" : "What type of investor am I?"}</p>
        <p className='ms_types_desc'>{language === 'ko' ? "수익과 안정 중 더 추구하는 가치는 무엇인지, 위험성향은 어느정도인지, ESG를 얼마나 고려하는지 등을 종합적으로 판단하여 투자유형을 진단합니다." : "Investment types are diagnosed by comprehensively evaluating preferences for pursuing returns or stability, risk tolerance, consideration of ESG factors, and more."}</p>
        <ul className='ms_types_list'>
            {type_list.map((item, index)=>{return(
                <li key={index}>
                    <ScrollToTopLink to={'/type/'+(index+1)}>
                        <img src={'type'+(index+1)+'.png'}></img>
                        <p>{item[0]}<br></br>{item[1]}</p>
                    </ScrollToTopLink>
                </li>
            )})}
        </ul>
        <a href='test' className='test_btn'>{language === 'ko' ? "투자유형 검사하기" : "Take Investment Type Quiz"}</a>
        </div>
    </article>
    );
  }
  
  export default Types;