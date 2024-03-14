import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider (props) {

    const [language, setLanguage] = useState("english");
    const changeLanguage = (event) => 
        event.target.value && setLanguage( event.target.value );

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}