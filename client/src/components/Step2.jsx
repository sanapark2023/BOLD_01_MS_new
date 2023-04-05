import './Step2.css';

function Step2() {
    return (
    <article className='ms_step2'>
        <div className='container'>
            <div className='ms_step2_left'>
                <p className='ms_step2_step'>STEP 2</p>
                <p className='ms_step2_title'>추천 지표를 살펴보세요</p>
                <p className='ms_step2_desc'>간편한 온라인 설문으로 나의 투자유형을 알아보세요<br></br>
        총 8개의 유형 중 나의 투자유형은 무엇일까요?</p>
                <a href='type/1'>{'추천 지표 살펴보기 >'}</a>
            </div>
            <img src='/2_step.png' alt='이미지'></img>
        </div>
    </article>
    );
  }
  
  export default Step2;