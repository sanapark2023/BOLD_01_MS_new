import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <header className='ms_header'>
        <div className='container'>
        <h1 onClick={()=>window.location.assign("/")}>Survey CI</h1>
        <nav>
            <NavLink to="/test" activeClassName="active"><h2>투자유형 검사</h2></NavLink>
            <NavLink to="/bg" activeClassName="active"><h2>백그라운드</h2></NavLink>
            <NavLink to="/types" activeClassName="active"><h2>8가지 투자유형</h2></NavLink>
        </nav>
        <ul>
            <li>한국어</li>
            <li>English</li>
        </ul>
        </div>
    </header>
    );
  }
  
  export default Header;
  