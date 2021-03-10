import styled from 'styled-components';
import BasicWrapper from '../../styled/_basics/_BasicWrapper';

const TrendingVideoStyles = styled(BasicWrapper)`
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
        .modal-video {
            width: 100%;
            height: 100%;
            object-fit: contain;
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
    .video-container {
        display: flex;
        justify-content: center;
        width: 20%;
        margin: 10px;
        height: auto;
        height: 50%;
        border: 1px solid black;
        box-shadow: 0px 5px 5px 0px #00000054;
    }
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media only screen and (max-width: 670px) {
            .video-container{width: 25%; height: 25%}
    }
`;

export default TrendingVideoStyles;