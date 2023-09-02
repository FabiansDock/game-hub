
const getImageUrls = (url: string) => {
    const target = url.indexOf('media/');
    const baseURL = url.slice(0, target+'media/'.length);
    const endpoint = url.substring(target+'media/'.length)
    return baseURL+"crop/600/400/"+endpoint
}

export default getImageUrls;
