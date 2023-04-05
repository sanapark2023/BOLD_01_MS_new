import SurveyComponent from '../components/SurveyComponent';
import './TestPage.css';

function TestPage() {
    return (
    <article className='ms_test'>
        <div className='container'>
        <p className='ms_test_title'>투자유형 검사하기</p>
        <p className='ms_test_question'>투자유형을 검사해보세요</p>
        <p className='ms_test_desc'>간편하게 몇가지 질문에 응답하면 나의 투자유형을 바로 알아볼 수 있어요. 개인정보를 일체 저장하지 않으니 안심하고 응답해주세요!</p>
        </div>
        <SurveyComponent/>
    </article>
    );
  }
  
  export default TestPage;