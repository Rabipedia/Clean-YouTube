import { useState } from "react";
import getPlaylist from "../api";

const usePlaylist = () => {
    const [state, setState] = useState({
        playlists: {},
        favourites: [],
        recentPlaylist: []
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getPlaylistById = async (playlistId, force=false) => {
        if(state.playlists[playlistId] && !force) {
            return;
        }
        
        let result;

        try{
            result = await getPlaylist(playlistId);
        } catch {
            console.log(e.response?.data?.data?.message || 'Something went wrong!');
        } finally {
            setLoading(true);
        };

        let cid, ct;
      
        result = result.map(item => {
          
            const {
                channelId,
                title,
                description,
                thumbnails: {medium},
                channelTitle
            } = item.snippet;

            if(!cid) {
                cid = channelId;
            }

            if(!ct) {
                ct = channelTitle;
            }
            return {
                title,
                description,
                thumbnail: medium,
                contentDetails: item.contentDetails
            }
         })

         setState((prev) => ({
            ...prev,
            playlists: {
                ...prev.playlists,
                [playlistId]: {
                    items: result,
                    playlistId: playlistId,
                    channelId: cid,
                    channelTitle: ct,
                }
            }
         }));
    };

    const addToFavorites = (playlistId) => {
        setState(prev => ({
            ...prev,
            favourites: [...prev, playlistId]
        }))   
    };

    const addToRecent = (playlistId) => {
        setState((prev) => ({
            ...prev,
            recentPlaylist: [...prev, playlistId]
        }))
    }

    const getPlaylistsByIds = (ids=[]) => {
        return ids.map(id => state.playlists[id]);
    }

    return {
        playlists: state.playlists,
        favorites: getPlaylistsByIds(state.favorites),
        recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
        getPlaylistById,
        addToRecent,
        addToFavorites,
    }
}

export default usePlaylist;