import React from 'react';
import NavbarComplete from './styled/Navbar/NavbarComplete';
import PageRouter from './pages/PageRouter';
import GlobalStyle from './styled/GlobalStyle';


const App = () => (
    <>
        <GlobalStyle />
        <NavbarComplete />
        <PageRouter />
    </>
);

export default App;
