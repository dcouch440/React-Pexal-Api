import BasicWrapper from '../../styled/_basics/_BasicWrapper';
import styled from 'styled-components';

export const TrendingPhotosStyles = styled(BasicWrapper)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .modal-container {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1002;
        background-color: #000000f5;
        display: flex;
        justify-content: center;
        .modal-links {
            position: absolute;
            top: 10%;
            width: 15vw;
            right: 0%;
            display: flex;
            flex-flow: column;
            text-align-last: end;
            padding: 2px;
            border-radius: 6px;
            a {
                text-decoration: none;
                color: #ffb600;
                margin: 4px 1px;
                font-size: 2vw;
                padding: 11px 17px;
                background-color: #121212c2;
                border-radius: 4px;
                &:hover{
                    background-color: #58585842;
                    transition: .5s;
                    color: whitesmoke;
                }
            }
        }
        img {
            box-shadow: 0px 0px 1px white;
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
            padding: 3px 0px;
        }
        button {
            background: transparent;
            border: none;
            color: white;
            font-size: 2vw;
            font-family: 'Nunito', sans-serif;
            position: absolute;
            left: 2%;
            top: 2%;
            padding: 10px;
            cursor: pointer;
                &:focus {
                    outline: none;
                }
        }
    }
    .trending-container {
        width: 90%;
        height: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: space-evenly;
    }
    .crown-button {
        display: none;
    }
    .image-container {
        display: flex;
        justify-content: center;
        width: 12%;
        height: auto;
        height: 50%;
        border: 1px solid black;
        box-shadow: px 5px 5px 0px #00000054;
        .crown-button {
            cursor: pointer;
        }
            &:active {
                img {
                    transform: scale(1.09);
                }
            }
            @media only screen and (min-width: 670px) {
            &:hover {
                transition-delay: 2s;
                border: none;
                box-shadow: none;
                .crown-button {
                    display: block;
                    color: goldenrod;
                    font-size: 2vw;
                    text-shadow: 1px 0px 9px black;
                    width: 100%;
                    background: transparent;
                    height: 100%;
                    align-self: center;
                    font-family: 'Parisienne',cursive;
                    outline: none;
                }
                .centered-container {
                    cursor: pointer;
                    background-color: transparent;
                    position: fixed;
                    top: 50%;
                    left:50%;
                    transform: translate(-50%, -50%);
                    border: none;
                        &:focus {
                            outline: none;
                        }
                }
                img {
                    border: 2px solid #d3a220;
                    box-shadow: 0px 2px 10px 6px #3f3f3f85;
                    height: 45%;
                    top: 50%;
                    left:50%;
                    transform: translate(-50%, -50%);
                    margin-right: auto;
                    margin-left: auto;
                    object-fit: fill;
                    transform: scale(1.02);
                    z-index: 1001;
                    transition: transform 2s;
                    width: auto;
                        @media only screen and (max-width: 1200px) {
                            height: 300px;
                            width: auto;
                        }
                }
            }
        }
    }
    img {
        width: 100%;
        min-width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media only screen and (max-width: 670px) {
        .image-container{width: 25%; height: 25%}
    }
`;