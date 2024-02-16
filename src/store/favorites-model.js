import { action, persist } from "easy-peasy";

const favoriteModel = persist({
  items: [],
  addToFavorites: action((state, playlistId) =>{
    state.items.push(playlistId);
  }),
  removeFromFavorites: action((state, playlistId) => {
    state.items = state.items.filter(pId => playlistId != pId);
  })
});

export default favoriteModel;