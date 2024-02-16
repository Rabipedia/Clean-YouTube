import { createStore } from "easy-peasy";
import playlistModel from "./playlist-model";
import favoriteModel from "./favorites-model";
import recentModel from "./recent-model";



const store = createStore({
    playlist: playlistModel,
    favorites: favoriteModel,
    recent: recentModel,
});

export default store;