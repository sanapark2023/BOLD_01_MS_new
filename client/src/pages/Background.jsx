import SurveyComponent from '../components/SurveyComponent';
import './Background.css';

function Background() {
    return (
    <article className='ms_background'>
        <div className='container'>
            <div className='ms_background_section'>
                <h2>서비스 개발 배경</h2>
                <h1>국가데이터에 접근하기 힘들었나요? <br></br>실업률이나 환율 변동이 무엇을 나타내는지, 그 중요성은 어떠한지 분석하기 어려웠나요?</h1>
                <p>SurveyCI에 오신 것을 환영합니다! 우리는 초보투자자들의 투자를 돕고자 이 서비스를 만들게 되었습니다. 
                    초보자들이 접하기 힘든 국가데이터를 니즈에 맞게 최적화하여 산출한 지수를 보여드립니다. 
                    또한, 우리는 지구온난화 및 기업의 사회적 공헌 등에 대한 ESG 가치를 존중하며 투자자들의 ESG에 대한 높은 관심을 환영합니다. 
                    이에 따라 ESG에 대한 척도 역시 포함하여 지수에 산출합니다.</p>
            </div>
        </div>
        <div className='container'>
            <div className='ms_background_section'>
                <h2>서비스 활용법</h2>
                <h1>지표를 이렇게 활용하세요!</h1>
                <p>Survey CI에서 제공하는 데이터로 당신의 투자결정을 보조할 수 있습니다! 
                    최근 5년간 범국가적 경제 데이터, 코스피 상장사들의 ESG 준수율 등을 세밀하게 분석하여 당신의 투자성향에 최적화하였습니다.</p>
            </div>
        </div>
        <div className='container'>
            <div className='ms_background_section'>
                <h2>참조 자료</h2>
                <h1>공신력 있는 데이터를 사용했습니다</h1>
                <p>SurveyCI는 공신력 있는 국가데이터 자료만 사용합니다. 
                    지수 산출에 필요한 실업률, 경제성장률, ESG 준수율 등 모든 데이터는 한국은행 및 기타 공공포털의 open API 소스를 활용하였습니다.</p>
            </div>
        </div>
    </article>
    );
  }
  
  export default Background;