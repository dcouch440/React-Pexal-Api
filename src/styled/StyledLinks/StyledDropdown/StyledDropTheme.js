import React from 'react'
import {useTheme} from '../../../globalHooks/useTheme'
import {StyledDropLink} from './StyledDropLink'
import styled from 'styled-components'


const StyledCog = styled.div`
    .fa-lightbulb {
        animation: lightbulb 4s infinite
    }
    @keyframes lightbulb {
        0%{color: #FFF} 
        100%{color: grey}
        80%{color: grey}
        60%{color: grey}
        20%{color: grey}
    }

`
export const StyledDropTheme = () => {
    const {handleTheme} = useTheme()
    const text = () => (
            <StyledCog>
                <span>Lights <i class="fas fa-lightbulb"></i> </span>
            </StyledCog>
    )
    return (
        <StyledDropLink 
            text={text()}
            onClick={(e) => handleTheme(e)}
        />
    )
}

export default StyledDropTheme