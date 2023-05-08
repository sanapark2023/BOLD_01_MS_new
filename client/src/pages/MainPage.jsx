import './MainPage.css';
import Types from '../components/Types';
import { Link } from 'react-router-dom';
import React, {useContext } from 'react';
import { LanguageContext } from "../context/languageContext";
function MainPage() {
    const { language } = useContext(LanguageContext);
    return (
    <>
        <article className='ms_hero'>
            <div className='container'>
                {language === 'ko'?<h1>나만의<br></br> <span>투자유형</span>을<br></br> 알아보세요!</h1>:<h1>Discover<br></br>your own<br></br><span>investment style</span>!</h1>}
                {language === 'ko'?<p>투자유형 검사 결과에 따라<br></br> <span>맞춤형 경제지표</span>를 볼 수 있어요</p>:<p>Take the investment type test.<br></br>See <span>customized economic indicators</span> based on your results.</p>}
                <Link to='/test'>{language === 'ko'?"투자유형 검사하기" : "Take Investment Type Quiz"}</Link>
                <img src='/HeroImg.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_api'>
            <div className='container'>
            <p>{language === 'ko'?"한국은행 ECOS 경제통계센터와 공공데이터 포털의 API를 활용했어요":"We utilized APIs from the Bank of Korea's ECOS Economic Statistics Center and the Public Data Portal."}</p>
            <img src='/api.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_step1'>
            <div className='container'>
                <p className='ms_step1_step'>STEP 1</p>
                <p className='ms_step1_title'>{language === 'ko'? "투자유형을 검사하세요":"Take the Investment Type Test"}</p>
                <p className='ms_step1_desc'>
                {language === 'ko'? "간편한 온라인 설문으로 나의 투자유형을 알아보세요":"Take the investment type test through a simple online survey."}<br></br>
                {language === 'ko'? "총 8개의 유형 중 나의 투자유형은 무엇일까요?":"Find out which of the 8 types suits you best."}
                </p>
                <Link to='/test'>{'투자유형 검사하기 >'}</Link>
                <img src='/1_step.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_step2'>
            <div className='container'>
                <div className='ms_step2_left'>
                    <p className='ms_step2_step'>STEP 2</p>
                    <p className='ms_step2_title'>{language === 'ko'?"추천 지표를 살펴보세요":"Check out your indicators"}</p>
                    <p className='ms_step2_desc'>{language === 'ko'?"수익, 미래가치, ESG에 대한 성향을 바탕으로":"Optimized based on your preference for profit,"}<br></br>
                    {language === 'ko'?"최적화한 데이터입니다. PDF를 다운받아 확인해보세요!":"future value, and ESG. Download the PDF to learn more!"}</p>
                    <Link to='/types'>{language === 'ko'?'추천 지표 살펴보기 >':"Explore the indicators >"}</Link>
                </div>
                <img src='/2_step.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_step3'>
            <div className='container'>
                <p className='ms_step3_step'>STEP 3</p>
                <p className='ms_step3_title'>{language === 'ko'?"투자목표에 한 걸음 더 나아가요!":"Take one step closer to your investment goals!"}</p>
                <p className='ms_step3_desc'>{language === 'ko'?"나의 투자유형과 추천지표를 참고하여":"Use your investment type and recommended indicators "}<br></br>{language === 'ko'?"좋은 투자자가 되기 위해 꾸준히 공부하며 함께 성장해요":"to become a better investor by studying and growing together."}</p>
                <img src='/3_step.png' alt='이미지'></img>
            </div>
        </article>
        <Types/>
    </>
    );
  }
  
  export default MainPage;