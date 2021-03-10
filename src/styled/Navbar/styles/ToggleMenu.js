import BasicButton from '../../_basics/_BasicButton';
import styled from 'styled-components';

const ToggleMenu = styled(BasicButton)`
    button {
        cursor: pointer;
        border: .1px solid #daa520;
        background-color: transparent;
        color: #daa520;
        height: 40px;
        width: 40px;
        align-self: center;
        font-size: 20px;
        font-family: monospace;
        position: absolute;
        right: 4%;
        border-radius: 2px;
        font-weight: 900;
        text-shadow: 1px 1px 1px #2b2b2b, 1px 1px 0px #0000003d;
            :hover {
                background-color: #80808047;
                box-shadow: 0px 0px 3px 0px white;
                color: #ffb600;
                transition: .4s;
            }
            :focus {
                outline: none;
                box-shadow: 0px 0px 5px 2px white;
                background-color: transparent;
                color: white;
                text-shadow: 0px 0px 3px white;
            }
            :active {
                background-color: #ffffff1a;
                -webkit-transition: background-color .1s;
                transition: background-color .1s;
            }
    }
`;

export default ToggleMenu;