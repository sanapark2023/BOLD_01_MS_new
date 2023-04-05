import './Step1.css';

function Step1() {
    return (
    <article className='ms_step1'>
        <div className='container'>
        <p>STEP 1</p>
        <p>투자유형을 검사하세요.</p>
        <p>간편한 온라인 설문으로 나의 투자유형을 알아보세요
총 8개의 유형 중 나의 투자유형은 무엇일까요?</p>
<a>{'투자유형 검사하기 >'}</a>
        <img src='/1_step.png' alt='이미지'></img>
        </div>
    </article>
    );
  }
  
  export default Step1;