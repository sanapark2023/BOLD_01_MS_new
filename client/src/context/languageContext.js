// languageContext.js

import React, { createContext, useState } from "react";
import messages from "./messages/messages";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

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
