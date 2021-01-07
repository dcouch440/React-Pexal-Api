import { createClient } from 'pexels'

export const useApi = () => {
    const API_KEY = 
    const trendingPhoto = ({perPage = null, currentPage = null}) => {
        return createClient(API_KEY).photos.curated({ 
            per_page: perPage , 
            page: currentPage, 
        }).then(data => data.photos)
    }

    const trendingVideo = ({perPage = null, currentPage = null}) => {
        return createClient(API_KEY).videos.popular({ 
            per_page: perPage , 
            page: currentPage, 
        }).then(data => data.videos)
    }

    return {trendingPhoto, trendingVideo}
}



