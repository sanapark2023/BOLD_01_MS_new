import './Step2.css';

function Step2() {
    return (
    <article className='ms_step2'>
        <div className='container'>
            <div className='ms_step2_left'>
                <p className='ms_step2_step'>STEP 2</p>
                <p className='ms_step2_title'>추천 지표를 살펴보세요</p>
                <p className='ms_step2_desc'>수익, 미래가치, ESG에 대한 성향을 바탕으로<br></br>
                최적화한 데이터입니다. PDF를 다운받아 확인해보세요!</p>
                <a href='type/1'>{'추천 지표 살펴보기 >'}</a>
            </div>
            <img src='/2_step.png' alt='이미지'></img>
        </div>
    </article>
    );
  }
  
  export default Step2;