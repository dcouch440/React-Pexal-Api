import React, { useContext } from 'react';
import { Context } from './Context';
import PageRouter from './pages/PageRouter';
import NavbarComplete from './styled/Navbar/NavbarComplete';
import GlobalStyle from './styled/_GlobalStyles/GlobalStyle';

const App = () => {
    const { scrollBehavior } = useContext(Context);
    return (
        <>
            <GlobalStyle stopScroll={scrollBehavior} />
            <NavbarComplete />
            <PageRouter />
        </>
    );
};

export default App;
