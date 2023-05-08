import './Header.css';
import ScrollToTopLink from '../components/ScrollToTopLink';
import ScrollToTopNavLink from '../components/ScrollToTopNavLink';
import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

function Header() {
    const { language, changeLanguage, getMessage } = useContext(LanguageContext);
    return (
    <header className='ms_header'>
        <div className='container'>
        <h1><ScrollToTopLink to=''>Survey CI</ScrollToTopLink></h1>
        <nav>
            <ScrollToTopNavLink to="test" activeClassName="active"><h2>{language === 'ko' ? "투자유형 검사" : "Investment Type Test"}</h2></ScrollToTopNavLink>
            <ScrollToTopNavLink to="background" activeClassName="active"><h2>{language === 'ko' ? "백그라운드" : "Background"}</h2></ScrollToTopNavLink>
            <ScrollToTopNavLink to="types" activeClassName="active"><h2>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</h2></ScrollToTopNavLink>
        </nav>
        <ul>{language === 'en' ? <li onClick={() => changeLanguage("ko")}>English</li> :<li onClick={() => changeLanguage("en")}>한국어</li>}
            
        </ul>
        </div>
    </header>
    );
  }
  
  export default Header;
  