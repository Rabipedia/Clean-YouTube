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

        setLoading(true);
        try{
            const playlist = await getPlaylist(playlistId);
            setError('');
            setState((prev) => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistId]: playlist
                },
            }))
        } catch (e) {
            setError(e.response?.data?.error?.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        };
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
        error,
        loading,
        getPlaylistById,
        addToRecent,
        addToFavorites,
    }
}

export default usePlaylist;