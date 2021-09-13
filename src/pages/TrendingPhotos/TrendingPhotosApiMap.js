import React, { useContext, useState } from 'react';
import { Context } from '../../Context';
import useEverScroll from '../../globalHooks/useEverScroll';
import { TrendingPhotosStyles } from './TrendingPhotosStyles';

const TrendingPhotosApiMap = () => {
    const [modal, setModal] = useState(0);
    const [toggleShow, setToggleShow] = useState('none');
    const { setScrollBehavior } = useContext(Context);
    const [bottomBoundaryRef, lazyRef, imgData] = useEverScroll({ dataType: 'TRENDING_IMAGES' });

    const handleClick = (i = 0) => {
        setModal(i);
        setToggleShow(prevState => prevState === 'none' ? null : 'none');
        setScrollBehavior(prev => !prev);
    };

    const imagesMapped =  imgData?.stackData.map(
        (data, i) => {
            return (
                <div
                    className={'image-container'}
                    key={i}
                    ref={el => lazyRef.current[i] = el}
                >
                    <button
                        className='crown-button'
                        onClick={() => handleClick(i)}
                    >
                        <i className="fas fa-crown"></i>
                        Click
                    </button>
                    <div
                        className='centered-container'
                        onClick={() => handleClick(i)}
                    >
                        <img
                            alt='Trending'
                            src={data.src.large}
                        />
                    </div>
                </div>
            );
        }
    );

    return (
        <>
            <TrendingPhotosStyles>
                <div
                    className='modal-container'
                    style={{ display: toggleShow }}
                >
                    <button onClick={() => handleClick()}>
                        X
                    </button>
                    {imgData.stackData.length > 0 && (
                        <>
                            <img
                                alt='modal'
                                src={imgData?.stackData[modal].src.original}
                            />
                            <div className='modal-links'>
                                <a
                                    href={imgData.stackData[modal].src.original}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Original</a>
                                <a
                                    href={imgData.stackData[modal].src.tiny}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Tiny</a>
                                <a
                                    href={imgData.stackData[modal].src.small}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Small</a>
                                <a
                                    href={imgData.stackData[modal].src.medium}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Medium</a>
                                <a
                                    href={imgData.stackData[modal].src.large}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Large</a>
                                <a
                                    href={imgData.stackData[modal].src.large2x}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Extra Large</a>
                                <a
                                    href={imgData.stackData[modal].src.portrait}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Portrait</a>
                                <a
                                    href={imgData.stackData[modal].src.landscape}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Landscape</a>
                            </div>
                        </>
                    )}
                </div>
                <div  className={'trending-container'}>
                    {imagesMapped}
                    <br />
                    <br />
                    <div
                        id='page-bottom-boundary'
                        ref={bottomBoundaryRef}
                        style={{ width: '0px', height: '0px' }}
                    ></div>
                </div>
            </TrendingPhotosStyles>
        </>
    );
};

export default TrendingPhotosApiMap;