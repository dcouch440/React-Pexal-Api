import React, { useContext } from 'react'
import { StyledPinkGradient } from '../../styled/StyledBackground/StyledPinkGradient/StyledPinkGradient'
import TrendingVideosApiMap from './TrendingVideosApiMap'
import { Context } from '../../Context'

const TrendingVideos = () => {
    const {backgroundImage} = useContext(Context) 
    return (
        <StyledPinkGradient backgroundImg={backgroundImage}>
            <TrendingVideosApiMap />
        </StyledPinkGradient>
    )
}

export default TrendingVideos