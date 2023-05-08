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
            <NavLink to="test" activeClassName="active"><h2>투자유형 검사</h2></NavLink>
            <NavLink to="background" activeClassName="active"><h2>백그라운드</h2></NavLink>
            <NavLink to="types" activeClassName="active"><h2>8가지 투자유형</h2></NavLink>
        </nav>
        <ul>
            <li onClick={() => changeLanguage("ko")}>한국어</li>
            <li onClick={() => changeLanguage("en")}>English</li>
        </ul>
        </div>
    </header>
    );
  }
  
  export default Header;
  