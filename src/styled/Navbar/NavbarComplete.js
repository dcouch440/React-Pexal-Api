import React, { useContext } from 'react';
import StyledNavbarLink from './_basics/StyledNavbarLink';
import NavbarTransDark from './styles/NavbarTransDark';
import StyledDropGold from '../Dropdown/StyledDropGold';
import InnerNavMenu from './InnerNavMenu';
import { Context } from '../../Context';

const NavbarComplete = () => {
    const { navOpen } = useContext(Context);

    return (
        <>
            <NavbarTransDark toggleNav={navOpen}>
                <div className='brand-links'>
                    <div className='brand'>
                        <i className="fas fa-crown"></i>
                         Images
                    </div>
                    <StyledNavbarLink
                        text={'Home'}
                        to={'/'}
                    />
                    <StyledNavbarLink
                        text={'Photos'}
                        to={'/photos'}
                    />
                    <StyledNavbarLink
                        text={'Videos'}
                        to={'/videos'}
                    />
                </div>
                <div
                    className='menu-side'
                    style={{ marginTop: 'auto', marginBottom: 'auto' }}
                >
                    <StyledDropGold />
                </div>
                <div className='toggle-sign-in'>
                    <InnerNavMenu />
                </div>
            </NavbarTransDark>
        </>
    );
};

export default NavbarComplete;