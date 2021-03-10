import React, {useContext} from 'react';
import NavbarComplete from './styled/Navbar/NavbarComplete';
import PageRouter from './pages/PageRouter';
import GlobalStyle from './styled/_GlobalStyles/GlobalStyle';
import {Context} from './Context'

const App = () => {
    const {scrollBehavior} = useContext(Context)
    return (
        <>
            <GlobalStyle stopScroll={scrollBehavior}/>
            <NavbarComplete />
            <PageRouter />
        </>
    );
};

export default App;
