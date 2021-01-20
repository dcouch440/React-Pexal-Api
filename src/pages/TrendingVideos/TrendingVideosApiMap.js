import React from 'react'
import TrendingVideoStyles from './TrendingVideoStyles'
import useEverScroll from '../../api/useEverScroll'

const TrendingVideos = () => {
    const [bottomBoundaryRef, lazyRef, vidData] = useEverScroll({dataType: 'TRENDING_VIDEO'})

    const displayMedia = vidData.stackData.length > 0 && vidData.stackData.map(
        (data, i) => {
            return (
                <div key={i} ref={el =>  lazyRef.current[i] = el} className={'video-container'}>
                    <video className='modal-video' controls height={data.video_files[0].height} width={data.video_files[0].width}>
                        <source src={data.video_files[0].link} type={data.video_files[0].file_type} />
                    </video>
                </div>
            )
        }
    )
    return (
        <>
            <TrendingVideoStyles>
                <div  className={'trending-container'}>
                    {displayMedia}
                    <br />
                    <br />
                    <div style={{width: '0px', height: '0px'}} id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
                </div>      
            </TrendingVideoStyles>
        </>
    ) 
}

export default TrendingVideos