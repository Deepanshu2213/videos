import axios from 'axios'

const KEY = 'AIzaSyDl5vJ6dHszEwAaqH-f_AFkgernIZRv3IU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
       part: 'snippet',
       type: 'video',
       maxResults: 5,
       key: KEY
    }
});