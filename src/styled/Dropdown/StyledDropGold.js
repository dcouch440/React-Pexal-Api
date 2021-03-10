import React, {useState} from 'react';
import DropDownMenu from './DropDownMenu';
import StyledTransGoldRimButton from './styles/StyledTransGoldRimButton';
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
const StyledDropGold = () => {
    const [display, setDisplay] = useState('hide-me');

  const icon = (thing = true) => (
      thing === true ?
      <div>
        <i className="fas fa-angle-left" /> Menu
      </div>
      :
      <div>
        <i className="fas fa-angle-right" /> Menu
      </div>

  );
  const handleClick = () => {
      setDisplay(prevState => prevState === 'hide-me' ? '' : 'hide-me')
  };

  return (
      <div className="App">
          <header className="App-header">
              <DropdownStyles>
                  <div className='Component-Container'>
                      <StyledTransGoldRimButton text={icon()} onClick={() => handleClick()} />
                      <div className={ `${display} dropdown-side` }>
                          <DropDownMenu />
                      </div>
                  </div>
            </DropdownStyles>
          </header>
      </div>
  );
}

export default StyledDropGold;
