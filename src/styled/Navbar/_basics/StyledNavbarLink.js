import styled from 'styled-components'
import BasicNavbarLink from './_BasicNavbarLink'

const StyledNavbarLink = styled(BasicNavbarLink)`
    padding: 18px 9px;
    font-size: 19px;
    a {
        color: #d3a220;
        padding: 7px 0px;
        text-decoration: none;
        font-family: monospace;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }
    a:hover {
        transition: .2s;
        color: rgb(226 226 226 / 95%);
        text-shadow: -1px 0px 5px rgb(177 177 177 / 22%);
        box-shadow: 0px 2px 0px rgb(196 195 195 / 66%);
        border-radius: 1px
    }
    a.light-nav-link:hover {
        transition: .2s;
        color: rgb(114, 114, 114);
        text-shadow: 0px 1px 1px rgba(5, 5, 5, 0.349);
        box-shadow: 0px 2px 0px rgba(86, 90, 76, 0.657);
    }
`
export default StyledNavbarLink