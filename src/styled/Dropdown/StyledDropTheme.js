import React from 'react';
import {useTheme} from '../../globalHooks/useTheme';
import {StyledDropLink} from './styles/StyledDropLink';
import styled from 'styled-components';


const StyledCog = styled.div`
    .fa-lightbulb {
        animation: light 4s infinite
    }
    @keyframes light {
        0%{color: #FFF}
        100%{color: grey}
        80%{color: grey}
        60%{color: grey}
        20%{color: grey}
    }
`;
export const StyledDropTheme = () => {
    const {handleTheme} = useTheme()
    const text = () => (
        <StyledCog>
            <span>Lights <i class="fas fa-lightbulb"></i> </span>
        </StyledCog>
    );
    return (
        <StyledDropLink
            text={text()}
            onClick={() => handleTheme()}
        />
    );
}

export default StyledDropTheme;