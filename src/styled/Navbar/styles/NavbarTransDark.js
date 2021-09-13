import styled from 'styled-components';
import { BasicNavbar } from '../_basics/_BasicNavbar';

const NavbarTransDark = styled(BasicNavbar)`
    box-sizing: border-box;
    justify-items: center;
    background-color: #000000d0;
    padding: 0px 7%;
    .brand {
        font-family: 'Parisienne',cursive;
        font-size: 22px;
        color: #DAA520;
        padding: 0px 10px;
        -webkit-text-decoration: underline;
        text-decoration: underline;
        -webkit-text-decoration-color: gray;
        text-decoration-color: #ffffff8a;
        text-shadow: 0 0 #c6c6c6;
    }
    .brand-links {
        display: flex;
        flex: auto;
        align-items: center;
        padding: 0px 5px;
    }
    .Nav-container {
        display: flex;
    }
        @media only screen and (max-width: 670px) {
            padding: 0;
            overflow: hidden;
            height: ${({ toggleNav }) => toggleNav === false ? '60px' : null};
            -moz-animation: height 2s linear;
            .brand {
                font-size: 4vw;
                height: 50px;
                padding-top: 12px;
            }
            .brand-links {
                display: block;
            }
            .menu-side {
                display: none;
            }
            .toggle-sign-in {
                width: 60vw;
                flex: auto;
            }
        }
`;

export default NavbarTransDark;