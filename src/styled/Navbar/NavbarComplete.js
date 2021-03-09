import React, {useContext} from 'react'
import StyledNavbarLink from './Links/StyledNavbarLink'
import NavbarTransDark from './NavbarTransDark'
import StyledDropGold from '../_CompleteStyledComponents/DropdownDarkGold/StyledDropGold';
import InnerNavMenu from './InnerNavMenu';
import {Context} from '../../Context';

const NavbarComplete = () => {
    const {navOpen} = useContext(Context);

    return (
        <>
            <NavbarTransDark toggleNav={navOpen}>
                <div className='brand-links'>
                    <div className='brand'>
                        <i class="fas fa-crown"></i>
                         Images
                    </div>
                    <StyledNavbarLink to={'/'} text={'Home'}/>
                    <StyledNavbarLink to={'/photos'} text={'Photos'}/>
                    <StyledNavbarLink to={'/videos'} text={'Videos'}/>
                </div>
                <div className='menu-side' style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <StyledDropGold/>
                </div>
                <div className='toggle-sign-in'>
                    <InnerNavMenu />
                </div>
            </NavbarTransDark>
        </>
    );
}

export default NavbarComplete;