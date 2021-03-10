import React, {useContext} from 'react';
import { Context } from '../../Context';
import { StyledDropLink } from '../Dropdown/StyledDropLink';
import Login from '../LoginFormStyled/StyledLogin';
import StyledDropTheme from '../Dropdown/StyledDropTheme';
import ToggleMenu from './styles/ToggleMenu';
import styled from 'styled-components';

const Container = styled.div`
    .toggle-button-container {
        position: relative;
        padding-top: 5px;
        height: 40px;
        margin: 5px 0px;
    }
    @media only screen and (min-width: 670px) {
        .hide {
            display: none;
        }
    }
`;

const InnerNavMenu = ({backgroundColor})  => {
    const {setNavOpen} = useContext(Context)
        return (
            <>
                <Container>
                    <div className='hide'>
                        <div className="toggle-button-container">
                            <ToggleMenu text={'☰'} onClick={() =>  setNavOpen(prevState => !prevState)}/>
                        </div>
                            <Login color={'rgb(218, 165, 32)'} backgroundColor={backgroundColor}/>
                            <StyledDropLink text={'An option'}/>
                            <StyledDropLink text={'Another option'}/>
                            <StyledDropLink text={'One More!'}/>
                            <StyledDropTheme />
                    </div>
                </Container>
            </>
        );
}
export default InnerNavMenu;