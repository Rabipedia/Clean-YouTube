import { useEffect, useState } from 'react'
import usePlaylist from './hooks/usePlaylist';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import Navbar from './components/Navbar';
import PlaylistCardItem from './components/playlist-card-item';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import HomePage from './components/Home';
import NotFound from './components/NotFound';
import PlayerPage from './components/PlayerPage';

function App() {
  const {getPlaylistById, playlists, error, loading, recentPlaylists, favorites} = usePlaylist();
  const playlistArray = Object.values(playlists);
  console.log(playlists);
  
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Navbar getPlaylistById={getPlaylistById}/>
      <Routes>
        <Route
          path='/'
          element={<HomePage
            playlistArray={playlistArray}
          />}
        />
        <Route
          path='/player/:playlistId'
          element={<PlayerPage playlists={playlists}/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
