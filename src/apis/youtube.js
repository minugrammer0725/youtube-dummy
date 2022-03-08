import axios from 'axios';

// access key for youtube API
const KEY = "AIzaSyBlWrMAd4OPcyKjyKmOlzTFrswvhiAzzWg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

})