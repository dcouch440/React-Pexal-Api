import BasicButton from '../../_basics/_BasicButton';
import styled from 'styled-components';

const StyledTransGoldRimButton = styled(BasicButton)`

    button {
        cursor: pointer;
        border: .1px solid #daa520;
        background-color: transparent;
        color: #daa520;
        padding: 10px 25px;
        font-size: 20px;
        font-family: monospace;
        font-weight: 900;
        text-shadow: 1px 1px 1px #2b2b2b, 1px 1px 0px #0000003d;
        box-shadow: inset 1px 1px 1px 0px #daa520, inset 0px -1px 1px 0px #daa520, inset 0px -1px 1px 0px #daa520, inset -1px 0px 1px 0px #daa520;
        border-radius: 10px;
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
    i {
        position: relative;
        line-height: 0;
        font-size: 25px;
        bottom: -3px;
    }
`;
export default StyledTransGoldRimButton;