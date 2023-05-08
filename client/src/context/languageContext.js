// languageContext.js

import React, { createContext, useState, useEffect } from "react";
import messages from "./messages/messages";
import useLocalStorageState from 'use-local-storage-state';

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");


  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const getMessage = (key) => {
    return messages[language][key];
  };



  return (
    <LanguageContext.Provider value={{ language, changeLanguage, getMessage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
