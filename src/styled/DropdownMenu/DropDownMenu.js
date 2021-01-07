import React from 'react';
import Login from '../LoginFormStyled/StyledLogin/StyledLoginCompleteForGold/StyledLogin'
import {StyledDropLink} from '../StyledLinks/StyledDropdown/StyledDropLink'
import StyledDropTheme from '../StyledLinks/StyledDropdown/StyledDropTheme'
import styled from 'styled-components'
const Container = styled.div`
    .housing {
        background-color: #282c34;
        max-width: 300px;
        max-height: 510px;
        border-radius: 15px 15px 15px 15px;
        border: 2px solid #ffb600b0;
        box-shadow: 0.5px 0.2px 6px 1px rgb(188 140 16);
        overflow: hidden;
        padding-bottom: 4px;
    }
`;

const DropDownMenu = ({backgroundColor})  => ( 
    <>    
        <Container>
            <div className='housing'>
                <div className="App">
  
                    <Login color={'rgb(218, 165, 32)'} backgroundColor={backgroundColor}/>
                    <StyledDropLink text={'An option'}/>
                    <StyledDropLink text={'Another option'}/>
                    <StyledDropLink text={'One More!'}/>
                    <StyledDropTheme />
                    

                </div>
            </div>
        </Container>
    </>
)

export default DropDownMenu;