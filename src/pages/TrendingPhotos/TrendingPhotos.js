import React from 'react'
import TrendingPhotosApiMap from './TrendingPhotosApiMap'
import {StyledPinkGradient} from '../../styled/StyledBackground/StyledPinkGradient/StyledPinkGradient'

const TrendingPhotos = () => {
    return (
        <>
            <StyledPinkGradient>
                <TrendingPhotosApiMap />
            </StyledPinkGradient>
        </>
    )
}
export default TrendingPhotos