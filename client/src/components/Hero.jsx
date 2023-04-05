import './Hero.css';

function Hero() {
    return (
    <article className='ms_hero'>
        <div className='container'>
            <h1>나만의<br></br> <span>투자유형</span>을<br></br> 알아보세요!</h1>
            <p>투자유형 검사 결과에 따라<br></br> <span>맞춤형 경제지표</span>를 볼 수 있어요</p>
            <a href='/test'>투자유형 검사하기</a>
            <img src='/HeroImg.png' alt='이미지'></img>
        </div>
    </article>
    );
  }
  
  export default Hero;