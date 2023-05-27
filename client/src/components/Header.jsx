import './Header.css';
import ScrollToTopLink from '../components/ScrollToTopLink';
import ScrollToTopNavLink from '../components/ScrollToTopNavLink';
import React, { useContext,useRef,useEffect,useState } from "react";
import { HiMenu } from 'react-icons/hi'
import { LanguageContext } from "../context/languageContext";

function Header() {
    const { language, changeLanguage, getMessage } = useContext(LanguageContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [menuRef]);
  
    
    
    return (
    <header className='ms_header'>
        <div className='container'>
        <h1><ScrollToTopLink to=''><img src='/nextdex_logo-white.png' className='logo'/></ScrollToTopLink></h1>
        <nav className='pc_nav'>
            <ScrollToTopNavLink to="test" activeClassName="active"><h2>{language === 'ko' ? "투자유형 검사" : "Investment Type Test"}</h2></ScrollToTopNavLink>
            <ScrollToTopNavLink to="background" activeClassName="active"><h2>{language === 'ko' ? "백그라운드" : "Background"}</h2></ScrollToTopNavLink>
            <ScrollToTopNavLink to="types" activeClassName="active"><h2>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</h2></ScrollToTopNavLink>
        </nav>
        <nav ref={menuRef} className='mb_nav'>
        <button onClick={toggleMenu}>
          <HiMenu />
        </button>
        {isMenuOpen && (
          <ul>
            <li><ScrollToTopNavLink to="test" activeClassName="active"><h2>{language === 'ko' ? "투자유형 검사" : "Investment Type Test"}</h2></ScrollToTopNavLink></li>
            <li><ScrollToTopNavLink to="background" activeClassName="active"><h2>{language === 'ko' ? "백그라운드" : "Background"}</h2></ScrollToTopNavLink></li>
            <li><ScrollToTopNavLink to="types" activeClassName="active"><h2>{language === 'ko' ? "8가지 투자유형" : "The 8 investment types"}</h2></ScrollToTopNavLink></li>
          </ul>
        )}
      </nav>

        <ul>{language === 'en' ? <li onClick={() => changeLanguage("ko")}>English</li> :<li onClick={() => changeLanguage("en")}>한국어</li>}
            
        </ul>
        </div>
    </header>
    );
  }
  
  export default Header;
  