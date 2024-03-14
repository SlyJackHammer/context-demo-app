import React, { createContext } from 'react';
import useToggle from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider (props) {

    const [isDarkMode, toggleDarkMode] = useToggle(false);

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}