// import React from 'react'

// const useFetch = () => {
    
//     const videoReducer = (state, action) => {
//         switch (action.type) {
//             case 'STACK_VIDEOS':
//                 return { ...state, videos: state.videos.concat(action.videos) }
//                 case 'FETCHING_VIDEOS':
//                     return { ...state, fetching: action.fetching }
//             default:
//                 return state;
//             }
//         }
        
//     const pageReducer = (state, action) => {
//         switch (action.type) {
//             case 'ADVANCE_PAGE':
//                 return { ...state, page: state.page + 1 }
//                 default:
//                     return state;
//         }
//     }
                
//     const [ pager, pagerDispatch ] = useReducer(pageReducer, { page: 1 })
//     const [vidData, vidDispatch] = useReducer(videoReducer,{ videos:[], fetching: true})

    
//     useEffect(() => {
//         vidDispatch({type: 'FETCHING_VIDEOS', fetching: true})
//         const fetchData = new Promise((resolve) => {
//             const videoData = createClient(API_KEY).videos.popular({per_page: 8, page: pager.page})
//             resolve(videoData)
//         })
//         fetchData.then((data) =>  {
//             const videos = data.videos
//             vidDispatch({type: 'STACK_VIDEOS', videos})
//             vidDispatch({type: 'FETCHING_VIDEOS', fetching: false})
            
//         })
//         .catch(e => {
//             vidDispatch({type: 'FETCHING_VIDEOS', fetching: false})
//             return e
//         })
//     }, [vidDispatch, pager.page])
    
//     let bottomBoundaryRef = useRef(null);
    
//     // implement infinite scrolling with intersection observer
//     const scrollObserver = useCallback(
//         node => {
//             new IntersectionObserver(entries => {
//                 entries.forEach(en => {
//                     if (en.intersectionRatio > 0) {
//                         pagerDispatch({ type: 'ADVANCE_PAGE' });
//                     }
//                 });
//             }).observe(node);
//         },[pagerDispatch]
//         );
//         useEffect(() => {
//         if (bottomBoundaryRef.current) {
//             scrollObserver(bottomBoundaryRef.current);
//         }
//     }, [scrollObserver, bottomBoundaryRef]);
    
//     // lazy loads images with intersection observer
//     // only swap out the image source if the new url exists
//     const videosRef = useRef([]);
//     const vidObserver = useCallback(node => {
//         const intObs = new IntersectionObserver(entries => {
//             entries.forEach(en => {
//                 if (en.intersectionRatio > 0) {
//                     const currentImg = en.target;
//                     const newImgSrc = currentImg.dataset.src;
//                     // only swap out the image source if the new url exists
//                     if (!newImgSrc) {
//                         console.error('Image source is invalid');
//                     } else {
//                         currentImg.src = newImgSrc;
//                     }
//                     intObs.unobserve(node); // detach the observer when done
//                 }
//             });
//         })
//         intObs.observe(node);
//     }, [])
    
//     useEffect(() => {
//         if (videosRef.current) {
//             videosRef.current.forEach(img => vidObserver(img));
//         }
//     }, [vidObserver, videosRef, vidData.videos]);
// }

// export default useFetch 