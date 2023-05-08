import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

function Header() {
    const { language, changeLanguage, getMessage } = useContext(LanguageContext);
    return (
    <header className='ms_header'>
        <div className='container'>
        <h1><Link to=''>Survey CI</Link></h1>
        <nav>
            <NavLink to="test" activeClassName="active"><h2>{language === 'ko' ? "투자유형 검사" : "Investment Type Test"}</h2></NavLink>
            <NavLink to="background" activeClassName="active"><h2>{language === 'ko' ? "백그라운드" : "Background"}</h2></NavLink>
            <NavLink to="types" activeClassName="active"><h2>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</h2></NavLink>
        </nav>
        <ul>{language === 'en' ? <li onClick={() => changeLanguage("ko")}>English</li> :<li onClick={() => changeLanguage("en")}>한국어</li>}
            
        </ul>
        </div>
    </header>
    );
  }
  
  export default Header;
  