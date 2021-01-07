import {BasicWrapperText} from './_BasicInput'
import styled from 'styled-components'

export const StyledTextInput = styled(BasicWrapperText)`
    font-size: 16px;
    border-radius: 12px;
    padding: 12px 5px;
    .label-container {
        text-align: start;
        padding-left: 3%;
        font-size: 30px;
    }
        input:hover {
            box-shadow: 0px 0px 1px white;
        }
        :focus {
            outline: none;
            box-shadow: 0px 0px .2px gold, 0px 0px 2px 2px white;
        }
`