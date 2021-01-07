import BasicButton from './_BasicButton'
import styled from 'styled-components'

export const StyledGoldButton = styled(BasicButton)`
        .end {
            display: flex;
            flex-direction: row-reverse;
            padding-right: 5%;
        }
        
        button {
        cursor:pointer;
        font-size: 14px;
        font-family: monospace;
        text-shadow: 1px 1.2px 2px grey;
        color: black;
        border-Radius: 14px;
        border: .2px groove black;
        background-color: #DAA520;
        padding: 13px 18px;
        margin: 5px 10px;
        
    }
        button:hover {
            transform: scale(1.01);
            animation-timing-function: .2s;
            
        }
        button:focus {
            outline: none;
            box-shadow: 0px 0px 12px black, .1px .1px 8px white;
        }
`