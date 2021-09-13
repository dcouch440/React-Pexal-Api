import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from './StyledDropDownMenu';
import StyledTransGoldRimButton from './styles/StyledTransGoldRimButton';

const DropdownStyles = styled.div`
    .Component-Container {
      position: relative;
      display: inline-block
    }
    .hide-me {
      display: none;
    }
`;

const StyledDropGold = () => {
    const [display, setDisplay] = useState(false);

    const icon = (thing = true) => (
        thing === true
            ? <div>
                <i className="fas fa-angle-left" /> Menu
            </div>
            : <div>
                <i className="fas fa-angle-right" /> Menu
            </div>
    );

    const handleClick = () => {
        setDisplay(prevState => !prevState);
    };

    return (
        <div className="App">
            <header className="App-header">
                <DropdownStyles>
                    <div className='Component-Container'>
                        <StyledTransGoldRimButton
                            text={icon()}
                            onClick={() => handleClick()}
                        />
                        <div className='dropdown-side'>
                            { display && <DropDownMenu /> }
                        </div>
                    </div>
                </DropdownStyles>
            </header>
        </div>
    );
};

export default StyledDropGold;
