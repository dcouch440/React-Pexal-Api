import { useContext } from 'react';
import { createClient } from 'pexels';
import { Context } from '../Context';

export const Api = () => {
    const {API_KEY} = useContext(Context);

    const trendingPhoto = async ({perPage = null, currentPage = null}) => {
        const data = await createClient(API_KEY).photos.curated({
            per_page: perPage,
            page: currentPage,
        });

        return data.photos;
    }

    const trendingVideo = async ({perPage = null, currentPage = null}) => {
        const data = await createClient(API_KEY).videos.popular({
            per_page: perPage,
            page: currentPage,
        });

        return data.videos;
    }
    return {trendingPhoto, trendingVideo};
}



