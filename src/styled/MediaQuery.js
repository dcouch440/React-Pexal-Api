import styled from 'styled-components'
import BasicWrapper from './_BasicWrapper'

export const HideMeOnSmall = styled(BasicWrapper)`
    @media only screen and (max-width: 768px) {
        display: none;
}`;
export const HideMeOnLarge = styled(BasicWrapper)`
    @media only screen and (min-width: 769px) {
    display: none;
}`;