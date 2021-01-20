import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Context } from '../../Context'
import { createClient } from 'pexels'

const ImageStyles = styled.div`
    width: 100%;
    height: 100%;
    
    .background-image img {
        z-index: -1;
        height: 100%;
        width: auto;
        min-width: 60%;
        object-fit: cover;
        filter: blur(20px);
    }
    .pictures-container {
        display: flex;
        position: relative;
        justify-content: center;
        height: 100%;
        width: 100%;  
    }
    .picture-left img {
        position: absolute;
        height: auto;
        left: 0%;
        height: 100%;
        width: auto;
        max-width: 100%; 
        filter: blur(5px);
    }
    .picture-center img {
        border: 1px outset #080808;
        box-shadow: 0px 5px 20px 0px #000000e8;
        z-index: 1000;
        height: auto;
        width: auto;
        max-height: 95%;
        max-width: 60%;
        position:absolute; 
        left:50%; 
        top:50%; 
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
        @media only screen and (max-width: 1100px){
            .picture-center img {
                max-width: 90%;
                width: 90%;
                height: auto;
            }
        }

    .center-image-container {
        height: auto;
        width: auto;
        border: 2px solid green;
    }
    .picture-right img {
        position: absolute;
        height: auto;
        right: 0%;
        height: 100%;
        width: auto;
        max-width: 100%; 
        object-fit: cover;
        filter: blur(5px);
    }
        @media only screen and (max-width: 1100px) {
            .page-container{
                padding: 0;
            }
        }
    .enter-button {
        cursor: pointer;
        position: absolute;
        text-decoration: none;
        z-index: 1001;
        padding: 10px 10px;
        font-family: monospace;
        border: 2px solid goldenrod;
        background-color: #000000e8;
        box-shadow: 0px 5px 20px 0px #000000e8;
        color: goldenrod;
        font-size: 2vw;
        bottom: 40%;
        left: 40%;
        &:hover {
            background-color: #0000008a;
            transition: 1s;
            text-decoration: line;
        }
    }
        @media only screen and (max-width: 1100px) {
                img {
                    width: 100%;
                }
            }
        .link { 
        z-index: 1001;
        border: 1px solid goldenrod;
        padding: 5px;
        background-color: black;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: goldenrod;
        text-shadow: 1px 0px 1px black;
        box-shadow: 0px 5px 20px 0px #000000e8;
        font-size: 1vw;
        font-family: monospace;
        position: absolute;
        bottom: 40%;
        right: 40%;
        &:hover {
            background-color: #0000008a;
            transition: 1s;
        }

    }

`
const HomeImageApiMap = () => {
    const [response, setResponse] = useState([])
    const [count, setCount] = useState(0)
    const {API_KEY} = useContext(Context)

    useEffect(() => {
        if (response.length < 1) {
            const fetchData = new Promise((resolve, reject) => {
                const responseData = createClient(API_KEY).photos.curated() 
                resolve(responseData)
                reject(console.log('No response HomeImageApiMap.js'))
            })
            fetchData.then((data) =>  {
                setResponse(data.photos)
                console.log(data.photos)
                console.log(response)
            }) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setTimeout(() => {   
            if (count === 0) {
                setCount(1)
            }
            else {
                if (count + 1 < response.length) {
                    setCount(prevCount => prevCount + 1)
                }
                else {
                    setCount(0)
                }
            }
        }, 3000)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])
   
    const mappedData = response.length > 1 && response.map(
        data => (
            <>
                <img src={data.src.large2x} alt='ss'/>
            </>
        ))
   
    const picturedBehind = (images = mappedData) => {
        const startInterval = count === 0 ? mappedData.length -  1 : count - 1
        const currentInterval = count
        const endInterval = count === mappedData.length - 1 ? 0 : count + 1

        return (
            <div className='pictures-container'>
                <div className='background-image'>
                    {images[currentInterval]}    
                </div>
                <div className='picture-left'>
                    {images[startInterval]}
                </div>
                <div className='picture-center'>
                    {images[currentInterval]}                       
                        <a href={'/photos'} className='enter-button'>
                            Enter    
                        </a>
                    {response.length > 0 && <a className='link' href={response[currentInterval].photographer_url}>{response[currentInterval].photographer}</a>}
                </div>
                <div className='picture-right'>
                    {images[endInterval]}
                </div>
            </div>
        )
    }
    return (
        <>
            <ImageStyles>
                {picturedBehind()}
            </ImageStyles>
        </>
    )  
}
export default HomeImageApiMap