import './Step1.css';

function Step1() {
    return (
    <article className='ms_step1'>
        <div className='container'>
            <p className='ms_step1_step'>STEP 1</p>
            <p className='ms_step1_title'>투자유형을 검사하세요</p>
            <p className='ms_step1_desc'>간편한 온라인 설문으로 나의 투자유형을 알아보세요<br></br>
    총 8개의 유형 중 나의 투자유형은 무엇일까요?</p>
            <a href='test'>{'투자유형 검사하기 >'}</a>
            <img src='/1_step.png' alt='이미지'></img>
        </div>
    </article>
    );
  }
  
  export default Step1;