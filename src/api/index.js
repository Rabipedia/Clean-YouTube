import axios from "axios";

const key = 'AIzaSyDaE-4Il065OlSijXrt-dRb9Y8-K7-67Zk'
const getPlaylist = async (playlistId, pageToken='', result=[]) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`

    const {data} = await axios.get(URL);

    result = [...result, data.item];

    if(data.nextPageToken) {
       result = getPlaylist(playlistId, data.nextPageToken, result);
    }
    return result;
}

export default getPlaylist;