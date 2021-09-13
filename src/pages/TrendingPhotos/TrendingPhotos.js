import React from 'react';
import {
    StyledPinkGradient
} from '../../styled/StyledBackground/StyledPinkGradient/StyledPinkGradient';
import TrendingPhotosApiMap from './TrendingPhotosApiMap';

const TrendingPhotos = () => {
    return (
        <>
            <StyledPinkGradient>
                <TrendingPhotosApiMap />
            </StyledPinkGradient>
        </>
    );
};

export default TrendingPhotos;