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
                <ScrollToTopLink className='ms_footer_top_logo' to='/'><img src='/nextdex_logo-white.png' className='logo'/></ScrollToTopLink>
                <ul>
                    <li><ScrollToTopLink to='../../test'>{language === 'ko' ? "투자유형 검사" : "Investment Type Test"}</ScrollToTopLink></li>
                    <li><ScrollToTopLink to='../../background'>{language === 'ko' ? "백그라운드" : "Background"}</ScrollToTopLink></li>
                    <li><ScrollToTopLink to='../../types'>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</ScrollToTopLink></li>
                </ul>
            </div>
            <div className='ms_footer_bottom'>
                <div className='ms_footer_bottom_author'>
                    <p><span>김민성 (Min Sung Kim)</span></p>
                    <p>E-mail <span>andrewmin0310@gmail.com</span></p>
                </div>
                <p>{language === 'ko' ? "이 서비스는 한국은행 경제통계센터 오픈 API를 활용하여 제작하였습니다.":"This service was created using the open API provided by the Bank of Korea Economic Statistics Center."}</p>
                <p className='ms_footer_bottom_copyright'>Copyright 2023. Min Sung Kim All pictures cannot be copied without permission.</p>
            </div>
        </div>
    </article>
    );
  }
  
  export default Footer;