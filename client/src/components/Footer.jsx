import './Footer.css';

function Footer() {
    return (
    <article className='ms_footer'>
        <div className='container'>
            <div className='ms_footer_top'>
                <a className='ms_footer_top_logo' href='/'>Survey CI</a>
                <ul>
                    <li><a href='test'>투자유형 검사하기</a></li>
                    <li><a href='background'>백그라운드</a></li>
                    <li><a href='types'>8가지 투자유형</a></li>
                </ul>
            </div>
            <div className='ms_footer_bottom'>
                <div className='ms_footer_bottom_author'>
                    <p>만든이 <span>김민성</span></p>
                    <p>이메일 <span>ms@gmail.com</span></p>
                </div>
                <p>이 서비스는 한국은행 경제통계센터 오픈 API를 활용하여 제작하였습니다.</p>
                <p className='ms_footer_bottom_copyright'>Copyright 2021. 김민성 All pictures cannot be copied without permission.</p>
            </div>
        </div>
    </article>
    );
  }
  
  export default Footer;