import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './themes';


const ToggleThemeContext = React.createContext();
export const useTheme = () => React.useContext(ToggleThemeContext);

export const MSThemeProvider = ({ children }) => {
    const [ themeState, setThemeState ] = React.useState({
        mode: 'light'
      });
    const  ThemeWrapper = styled.div`
        background-color: ${backgroundColor};
        color: ${textColor}
    `;

    const toggleTheme = () => {
        const update = (themeState.mode === 'light' ? 'dark' : 'light');
        setThemeState({ mode: update });
    }

    return (
        <ToggleThemeContext.Provider value={{ toggleTheme: toggleTheme }}>
            <ThemeProvider theme={{
                mode: themeState.mode
            }}>
                <ThemeWrapper>{children}</ThemeWrapper>
            </ThemeProvider>
        </ToggleThemeContext.Provider>)
};

export default ThemeProvider;