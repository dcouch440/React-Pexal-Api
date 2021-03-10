import React from 'react';
import StyledLogin from './styles/StyledLogin'
import { StyledDropLink } from './StyledDropLink'
import StyledDropTheme from './StyledDropTheme'
import styled from 'styled-components'

const Container = styled.div`
    .housing {
        z-index: 9999;
        display: block;
        float: left;
        background-color: #2e2e2e;
        width: 300px;
        height: 500px;
        padding: 2px;
        border-radius: 12px;
        box-shadow: inset 1px 1px 1px 0px #daa520, inset 0px -1px 1px 0px #daa520, inset 0px -1px 1px 0px #daa520, inset -1px 0px 1px 0px #daa520;
        overflow: hidden;
        position: absolute;
        top: 10%;
        right: 102%;
    }
`;

const DropDownMenu = ()  =>  {
    return(
        <>
            <Container>
                <div className='housing'>
                    <StyledLogin color={'rgb(218, 165, 32)'} />
                    <StyledDropLink text={'An option'}/>
                    <StyledDropLink text={'Another option'}/>
                    <StyledDropLink text={'One More!'}/>
                    <StyledDropTheme />
                </div>
            </Container>
        </>
    );
}
export default DropDownMenu;