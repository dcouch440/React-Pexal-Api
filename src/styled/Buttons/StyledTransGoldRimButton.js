import BasicButton from './_BasicButton'
import styled from 'styled-components'

export const StyledTransGoldRimButton = styled(BasicButton)`
    button {
        cursor: pointer;
        border: 2px solid #ffb600;
        background-color: #282c34;
        color: #DAA520;
        padding: 15px 25px;
        font-size: 20px;
        font-family: monospace;
        font-weight: 900;
        text-shadow: 1px 1px 1px #2b2b2b, 1px 1px 0px #0000003d;
        box-shadow: inset 1px 1px 0px 0px #f5f5dc8c, inset 0px -1px 0px 0px #f5f5dc61, inset 0px -2px 0px 0px #636363;
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
    
`
