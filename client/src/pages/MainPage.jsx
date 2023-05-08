import './MainPage.css';
import Types from '../components/Types';
import { Link } from 'react-router-dom';
function MainPage() {
    return (
    <>
        <article className='ms_hero'>
            <div className='container'>
                <h1>나만의<br></br> <span>투자유형</span>을<br></br> 알아보세요!</h1>
                <p>투자유형 검사 결과에 따라<br></br> <span>맞춤형 경제지표</span>를 볼 수 있어요</p>
                <Link to='/test'>투자유형 검사하기</Link>
                <img src='/HeroImg.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_api'>
            <div className='container'>
            <p>한국은행 ECOS 경제통계센터와 공공데이터 포털의 API를 활용했어요</p>
            <img src='/api.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_step1'>
            <div className='container'>
                <p className='ms_step1_step'>STEP 1</p>
                <p className='ms_step1_title'>투자유형을 검사하세요</p>
                <p className='ms_step1_desc'>
                    간편한 온라인 설문으로 나의 투자유형을 알아보세요<br></br>
                    총 8개의 유형 중 나의 투자유형은 무엇일까요?
                </p>
                <Link to='/test'>{'투자유형 검사하기 >'}</Link>
                <img src='/1_step.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_step2'>
            <div className='container'>
                <div className='ms_step2_left'>
                    <p className='ms_step2_step'>STEP 2</p>
                    <p className='ms_step2_title'>추천 지표를 살펴보세요</p>
                    <p className='ms_step2_desc'>수익, 미래가치, ESG에 대한 성향을 바탕으로<br></br>
                    최적화한 데이터입니다. PDF를 다운받아 확인해보세요!</p>
                    <Link to='/types'>{'추천 지표 살펴보기 >'}</Link>
                </div>
                <img src='/2_step.png' alt='이미지'></img>
            </div>
        </article>
        <article className='ms_step3'>
            <div className='container'>
                <p className='ms_step3_step'>STEP 3</p>
                <p className='ms_step3_title'>투자목표에 한 걸음 더 나아가요!</p>
                <p className='ms_step3_desc'>나의 투자유형과 추천지표를 참고하여<br></br> 좋은 투자자가 되기 위해 꾸준히 공부하며 함께 성장해요</p>
                <img src='/3_step.png' alt='이미지'></img>
            </div>
        </article>
        <Types/>
    </>
    );
  }
  
  export default MainPage;