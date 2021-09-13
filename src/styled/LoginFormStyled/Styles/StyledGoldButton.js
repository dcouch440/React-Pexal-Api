import BasicButton from '../../_basics/_BasicButton';
import styled from 'styled-components';

export const StyledGoldButton = styled(BasicButton)`
        overflow: hidden;
        height: 100%;
        width: 100%;
        .end {
            display: flex;
            height: 100%;
            margin: 10px;
            flex-direction: row-reverse;
            padding-right: 5%;
        }
        button {
        cursor: pointer;
        font-size: 1rem;
        font-family: monospace;
        text-shadow: 1px 1.2px 2px grey;
        color: black;
        border-Radius: 14px;
        border: .2px groove black;
        background-color: #DAA520;
        display: inline-block;
        padding: .375rem .75rem;
        margin: 5px 10px;
        position: relative;
    }
        button:hover {
            box-shadow: 0.1px 0.1px 0.5px 1px #808080;
            transition: .2s;
        }
        button:focus {
            outline: none;
            box-shadow: 0px 0px 12px black, .1px .1px 8px white;
        }
`;