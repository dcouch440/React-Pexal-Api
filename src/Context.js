import React, {useState} from "react";
const Context = React.createContext();

function ContextProvider(props) {
    const [theme, setTheme] = useState('dark');
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('default');
    const themeReverse = theme === 'light' ? 'dark' : 'light';

    // KEY HERE
    const API_KEY = process.env.REACT_APP_API_KEY;

    return (
        <Context.Provider value={{
            theme,
            themeReverse,
            setTheme,
            isDarkTheme,
            setIsDarkTheme,
            isLoggedIn,
            navOpen,
            setNavOpen,
            setIsLoggedIn,
            searchQuery,
            setSearchQuery,
            API_KEY,
        }}
        >
           {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};
