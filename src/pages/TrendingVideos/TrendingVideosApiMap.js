import React from 'react';
import useEverScroll from '../../globalHooks/useEverScroll';
import TrendingVideoStyles from './TrendingVideoStyles';

const TrendingVideos = () => {
    const [bottomBoundaryRef, lazyRef, vidData] = useEverScroll({ dataType: 'TRENDING_VIDEO' });

    const displayMedia = vidData.stackData.length > 0 && vidData.stackData.map(
        (data, i) => {
            return (
                <div
                    className={'video-container'}
                    key={i}
                    ref={el =>  lazyRef.current[i] = el}
                >
                    <video
                        controls
                        className='modal-video'
                        height={data.video_files[0].height}
                        width={data.video_files[0].width}
                    >
                        <source
                            src={data.video_files[0].link}
                            type={data.video_files[0].file_type}
                        />
                    </video>
                </div>
            );
        }
    );
    return (
        <>
            <TrendingVideoStyles>
                <div  className={'trending-container'}>
                    {displayMedia}
                    <br />
                    <br />
                    <div
                        id='page-bottom-boundary'
                        ref={bottomBoundaryRef}
                        style={{ width: '0px', height: '0px' }}
                    />
                </div>
            </TrendingVideoStyles>
        </>
    );
};

export default TrendingVideos;