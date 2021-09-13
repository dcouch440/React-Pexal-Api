import React, { useContext } from 'react';
import { Context } from '../../Context';
import {
    StyledPinkGradient
} from '../../styled/StyledBackground/StyledPinkGradient/StyledPinkGradient';
import TrendingVideosApiMap from './TrendingVideosApiMap';

const TrendingVideos = () => {
    const { backgroundImage } = useContext(Context);
    return (
        <StyledPinkGradient backgroundImg={backgroundImage}>
            <TrendingVideosApiMap />
        </StyledPinkGradient>
    );
};

export default TrendingVideos;