import BasicDropLink from '../../_basics/_BasicDropLink';
import styled from 'styled-components';

export const StyledDropLink = styled(BasicDropLink)`
    display: flex;
    flex-direction: row;
    width: 99.9%;
    clear: both;
    font-weight: 400;
    text-align: inherit;
    background-color: transparent;
    border-top: .1px solid #8080806b;
    font-size: calc(10px + 2vmin);
    .container {
        display: flex;
        padding: 1px 0px;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    a {
        width: 100%;
        padding: 10px 24px;
        color: rgb(218, 165, 32);
        text-align: start;
        padding-left: 5%;
        text-decoration: none;
        font-family: monospace;
        font-size: 20px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
            :hover {
                background-color: #80808047;
                transition: background-color .4s;
            }
            :active {
                background-color: #ffffff40;
                transition: background-color .1s;
            }
    }
`;
