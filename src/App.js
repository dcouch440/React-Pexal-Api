import React, {useContext} from 'react';
import './App.css';
import NavbarComplete from './styled/Navbar/NavbarComplete';
import PageRouter from './pages/PageRouter';
import GlobalStyle from './styled/GlobalStyle';
import {Context} from './Context';

function App() {
  const {theme} = useContext(Context);
  const lights = theme === 'light' ? 'rgba(0, 0, 0, 0.400)' : 'rbg(0,0,0)';

  return (
    <>
        <GlobalStyle lights={lights}/>
        <NavbarComplete />
        <PageRouter />
    </>
  );
}

export default App;
