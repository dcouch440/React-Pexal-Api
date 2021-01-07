import { useEffect, useReducer, useCallback, useRef, useContext } from 'react'
import { useApi } from './useApi'
import {Context} from '../Context'

const useEverScroll = ({dataType}) => {
    const {searchQuery} = useContext(Context)
    const {trendingPhoto, trendingVideo} = useApi()

    const reducer = (state, action) => {
        switch (action.type) {
            case 'STACK_DATA':
                return { ...state, stackData: state.stackData.concat(action.videoData) }
            case 'FETCHING_DATA':
                return { ...state, fetching: action.fetching }
            default:
                return state;
        }
    }
       
    const pageReducer = (state, action) => {
        switch (action.type) {
            case 'ADVANCE_PAGE':
                return { ...state, page: state.page + 1 }
                default:
                    return state;
        }
    }

    const [ pager, pagerDispatch ] = useReducer(pageReducer, { page: 1 })
    const [dataStacked, dataDispatch] = useReducer(reducer, { stackData:[], fetching: true})

    useEffect(() => {
        dataDispatch({type: 'FETCHING_DATA', fetching: true})
        const fetchData = new Promise((resolve) => {
            if (dataType === 'TRENDING_VIDEO') {
                trendingVideo({perPage: 16, currentPage: pager.page}).then(data => resolve(data))
            }
            if (dataType === 'TRENDING_IMAGES') {
                trendingPhoto({perPage: 16, currentPage: pager.page}).then(data => resolve(data))
            }
        })
        fetchData.then((data) =>  {
            const videoData = data
            dataDispatch({type: 'STACK_DATA', videoData})
            dataDispatch({type: 'FETCHING_DATA', fetching: false})
        })
        .catch(e => {
            dataDispatch({type: 'FETCHING_DATA', fetching: false})
            return e
        })
    }, [dataDispatch, pager.page, searchQuery])
    
    // logic that finds the intersection 
    
    let bottomBoundaryRef = useRef(null);
    const scrollObserver = useCallback(
        node => {
            new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        pagerDispatch({ type: 'ADVANCE_PAGE' })
                    }
                })
            }).observe(node)
        }, [pagerDispatch]
    )

    useEffect(() => {
        if (bottomBoundaryRef.current) {
            scrollObserver(bottomBoundaryRef.current)
        }
    }, [scrollObserver, bottomBoundaryRef])
    
    // lazy loads images with intersection observer
    // only swap out the image source if the new url exists

    const lazyRef = useRef([])
    const observer = useCallback(node => {
        const intObs = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.intersectionRatio > 0) {
                    const currentImg = en.target;
                    const newImgSrc = currentImg.dataset.src;
                    // only swap out the image source if the new url exists
                    if (!newImgSrc) {
                        console.error('Image source is invalid');
                    } else {
                        currentImg.src = newImgSrc;
                    }
                    intObs.unobserve(node); // detach the observer when done
                }
            })
        })
        intObs.observe(node)
    }, [])
    
    useEffect(() => {
        if (lazyRef.current) {
            lazyRef.current.forEach(data => observer(data))
        }
    }, [observer, lazyRef, dataStacked.StackData])

    return [bottomBoundaryRef, lazyRef, dataStacked]

}

export default useEverScroll 