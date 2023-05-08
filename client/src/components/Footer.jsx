import './Footer.css';
import ScrollToTopLink from '../components/ScrollToTopLink';
import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
function Footer() {
    const { language, changeLanguage, getMessage } = useContext(LanguageContext);
    return (
    <article className='ms_footer'>
        <div className='container'>
            <div className='ms_footer_top'>
                <ScrollToTopLink className='ms_footer_top_logo' to='/'>Survey CI</ScrollToTopLink>
                <ul>
                    <li><ScrollToTopLink to='../../test'>{language === 'ko' ? "투자유형 검사" : "Investment Type Test"}</ScrollToTopLink></li>
                    <li><ScrollToTopLink to='../../background'>{language === 'ko' ? "백그라운드" : "Background"}</ScrollToTopLink></li>
                    <li><ScrollToTopLink to='../../types'>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</ScrollToTopLink></li>
                </ul>
            </div>
            <div className='ms_footer_bottom'>
                <div className='ms_footer_bottom_author'>
                    <p><span>김민성 (Kim Minsung)</span></p>
                    <p>E-mail <span>ms@gmail.com</span></p>
                </div>
                <p>{language === 'ko' ? "이 서비스는 한국은행 경제통계센터 오픈 API를 활용하여 제작하였습니다.":"This service was created using the open API of the Bank of Korea Economic Statistics Center."}</p>
                <p className='ms_footer_bottom_copyright'>Copyright 2021. Kim Minsung All pictures cannot be copied without permission.</p>
            </div>
        </div>
    </article>
    );
  }
  
  export default Footer;