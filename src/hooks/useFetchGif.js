import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGift'


export const useFetchGif = (category) => {
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() =>{
        const img = await getGifs(category);
        setImages(img);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}
