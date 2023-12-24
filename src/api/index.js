import axios from "axios";

const key = 'AIzaSyDaE-4Il065OlSijXrt-dRb9Y8-K7-67Zk'
const getPlaylist = async (playlistID, pageToken='', result=[]) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistID}&key=${key}&pageToken=${pageToken}`;

    const {data} = await axios.get(URL);

    result = [...result, ...data.items];

    if(data.nextPageToken) {
       result = getPlaylist(playlistID, data.nextPageToken, result);
    }
    return result;
}

export default getPlaylist;