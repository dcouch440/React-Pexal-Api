import React, {useState} from 'react';
import DropDownMenu from './Components/DropDownMenu';
import StyledTransGoldRimButton from './Components/StyledTransGoldRimButton';
import styled from 'styled-components';

const DropdownStyles = styled.div`
    .Component-Container {
      position: relative;
      display: inline-block
    }
    .hide-me {
      display: none;
    }
`;
function StyledDropGold() {
    const [display, setDisplay] = useState('hide-me');

  const icon = (thing = true) => (
      thing === true ?
      <div>
        <i class="fas fa-angle-left" /> Menu
      </div>
      :
      <div>
        <i class="fas fa-angle-right" /> Menu
      </div>

  );
  const handleClick = () => {
      setDisplay(prevState => prevState === 'hide-me' ? '' : 'hide-me')
  };

  return (
      <div className="App">
          <header className="App-header">
              <DropdownStyles>
                  <div class='Component-Container'>
                      <StyledTransGoldRimButton text={icon()} onClick={() => handleClick()}/>
                      <div class={ `${display} dropdown-side`}>
                          <DropDownMenu />
                      </div>
                  </div>
            </DropdownStyles>
          </header>
      </div>
  );
}

export default StyledDropGold;
