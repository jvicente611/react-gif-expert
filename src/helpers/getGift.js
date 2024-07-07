export const getGifs = async(category) =>{
    const api_key= 'kU0h3jZ9MghGjHXJatvP6FcBuM4u5XIB'   
    const url_search = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;

    const resp = await fetch(url_search);

    const {data =[]} = await resp.json();

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
}