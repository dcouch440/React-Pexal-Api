import React, {useState} from "react"

const Context = React.createContext()


function ContextProvider(props) {
    const [theme, setTheme] = useState('dark')
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('default')
    const themeReverse = theme === 'light' ? 'dark' : 'light'
    const API_KEY = '563492ad6f917000010000014e9c5593f57c4f33ba386af41b1e4b6a'
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
    )
}

export {ContextProvider, Context}
