import React, {useState} from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [navOpen, setNavOpen] = useState(false);

    // KEY HERE
    const API_KEY = process.env.REACT_APP_API_KEY;

    return (
        <Context.Provider value={{
            navOpen,
            setNavOpen,
            API_KEY,
        }}
        >
           {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};
