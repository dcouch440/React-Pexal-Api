import React, {useState} from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [navOpen, setNavOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('default');

    // KEY HERE
    const API_KEY = process.env.REACT_APP_API_KEY;

    return (
        <Context.Provider value={{
            navOpen,
            setNavOpen,
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
