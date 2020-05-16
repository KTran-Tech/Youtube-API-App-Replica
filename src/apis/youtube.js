import axios from 'axios'


const KEY = 'AIzaSyCnB-sy11X0L1vGGPPrit2KEBN7Mk7giMY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})