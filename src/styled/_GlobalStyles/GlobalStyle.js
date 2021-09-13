import { createGlobalStyle } from  'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    body {
        overflow: ${({ stopScroll }) => stopScroll && 'hidden'};
    }
    #root {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;