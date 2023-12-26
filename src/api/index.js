import axios from "axios";


const getPlaylist = async (playlistID, pageToken='', result=[]) => {
    const key = import.meta.env.VITE_YOUTUBE_API_KEY;
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistID}&key=${key}&pageToken=${pageToken}`;

    const {data} = await axios.get(URL);

    result = [...result, ...data.items];

    if(data.nextPageToken) {
       result = getPlaylist(playlistID, data.nextPageToken, result);
    }
    return result;
}

export default getPlaylist;