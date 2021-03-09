import pinkOrangeSplash from './pinkOrangeSplash.jpg';
import styled from 'styled-components';
import { StyledBackground } from '../_BasicStyledBackground';

export const StyledPinkGradient = styled(StyledBackground)`
    width: 100%;
    height: 100%;
    position: relative;
    .background-container-Styled {
        border: 200px solid black;
        z-index: -999;
        border: 2px solid green;
        background-image: ${`url(${pinkOrangeSplash})`};
        background-size: cover;
        position: fixed;
        width: 100%;
        height: 100%;
        filter: blur(30px);
        opacity: .80;
    }
`;