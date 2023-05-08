import SurveyComponent from '../components/SurveyComponent';
import React, { useState,useContext, useEffect } from 'react';
import { LanguageContext } from "../context/languageContext";
import './TestPage.css';

function TestPage() {
    const { language } = useContext(LanguageContext);
    return (
    <article className='ms_test'>
        <div className='container'>
        <p className='ms_test_title'>{language==="ko"?"투자유형 검사하기":"Investment Type Test"}</p>
        <p className='ms_test_question'>{language==="ko"?"투자유형을 검사해보세요":"Discover Your Investment Type"}</p>
        <p className='ms_test_desc'>{language==="ko"?"간편하게 몇가지 질문에 응답하면 나의 투자유형을 바로 알아볼 수 있어요. 개인정보를 일체 저장하지 않으니 안심하고 응답해주세요!":"Easily discover your investment style by answering a few simple questions. Rest assured that no personal information is stored, so please feel free to respond with confidence!"}</p>
        </div>
        <SurveyComponent/>
    </article>
    );
  }
  
  export default TestPage;