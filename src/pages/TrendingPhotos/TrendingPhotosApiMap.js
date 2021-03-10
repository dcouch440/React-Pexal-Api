import React, { useState, useContext} from 'react';
import { TrendingPhotosStyles } from './TrendingPhotosStyles';
import EverScroll from '../../api/EverScroll';
import { Context } from '../../Context'
const TrendingPhotosApiMap = () => {
    const [modal, setModal] = useState(0);
    const [toggleShow, setToggleShow] = useState('none');
    const {setScrollBehavior} = useContext(Context);
    const [bottomBoundaryRef, lazyRef, imgData] = EverScroll({dataType: 'TRENDING_IMAGES'});

    const handleClick = (i = 0) => {
        setModal(i);
        setToggleShow(prevState => prevState === 'none' ? null : 'none');
        setScrollBehavior(prev => !prev)
    }

    const imagesMapped =  imgData?.stackData.map(
        (data, i) => {
            return(
            <div key={i} ref={el => lazyRef.current[i] = el} className={'image-container'}>
                <button className='crown-button' onClick={() => handleClick(i)}>
                    <i class="fas fa-crown"></i>
                    Click
                </button>
                <div onClick={() => handleClick(i)} className='centered-container'>
                    <img src={data.src.large} alt='Trending' />
                </div>
            </div>
            )
        }
    )
    return (
        <>
            <TrendingPhotosStyles>
                <div className='modal-container' style={{display: toggleShow}}>
                    <button onClick={() => handleClick()}>
                        X
                    </button>
                    {imgData.stackData.length > 0 && (
                        <>
                            <img src={imgData?.stackData[modal].src.original} alt='modal'/>
                            <div className='modal-links'>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.original}>Original</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.tiny}>Tiny</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.small}>Small</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.medium}>Medium</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.large}>Large</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.large2x}>Extra Large</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.portrait}>Portrait</a>
                                <a target="_blank" rel="noopener noreferrer" href={imgData.stackData[modal].src.landscape}>Landscape</a>
                            </div>
                        </>
                    )}
                </div>
                <div  className={'trending-container'}>
                    {imagesMapped}
                    <br />
                    <br />
                    <div style={{width: '0px', height: '0px'}} id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
                </div>
            </TrendingPhotosStyles>
        </>
    );
}
export default TrendingPhotosApiMap;