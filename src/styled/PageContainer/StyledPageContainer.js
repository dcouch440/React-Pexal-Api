import styled from 'styled-components'
import BasicPageContainer from './_BasicPageContainer'

const StyledPageContainer = styled(BasicPageContainer)`
        height: calc(100% - 61.7px);
        width: 100%;
        background-color: ${props => props.bgColor};
        color: ${props => props.color};
        display: flex;
`;

export default StyledPageContainer;