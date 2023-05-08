import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import './Background.css';

function Background() {
    const { language, changeLanguage, getMessage } = useContext(LanguageContext);
    return (
    <article className='ms_background'>
        <div className='container'>
            <div className='ms_background_section'>
                <h2>{getMessage('background', "title_s_1")}</h2>
                <h1>{getMessage('background',"title_1_1")}<br></br>{getMessage('background',"title_2_1")}</h1>
                <p>{getMessage('background',"desc_1")}</p>
            </div>
        </div>
        <div className='container'>
            <div className='ms_background_section'>
                <h2>{getMessage('background', "title_s_2")}</h2>
                <h1>{getMessage('background',"title_1_2")}</h1>
                <p>{getMessage('background',"desc_2")}</p>
            </div>
        </div>
        <div className='container'>
            <div className='ms_background_section'>
                <h2>{getMessage('background', "title_s_3")}</h2>
                <h1>{getMessage('background',"title_1_3")}</h1>
                <p>{getMessage('background',"desc_3")}</p>
            </div>
        </div>
    </article>
    );
  }
  
  export default Background;