import { useEffect, useState } from 'react'
import getPlaylist from './api'
import usePlaylist from './hooks/usePlaylist';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import Navbar from './components/Navbar';
import PlaylistCardItem from './components/playlist-card-item';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

const playlistID = 'PLKgLo6H-44PKWV8pXR5y4VFHRifZ7yv7f';
const HomePage = ({playlistArray}) => {

 const playlist = useStoreActions(actions => actions.playlist);
 
 useEffect(()=> {
  playlist.getPlaylist(playlistID);
 },[])


  return (
    <Container maxWidth={'lg'} sx={{my: 16}}>
        {
          playlistArray.length > 0 && (
            <Grid container alignItems={'stretch'}>
              {playlistArray.map((item) => (
                <Grid item  xs={12} md={6} lg={4} mb={2}>
                  <PlaylistCardItem
                    key={item.playlistId}
                    playlistId={item.playlistId}
                    playlistThumbnail={item.playlistThumbnail}
                    playlistTitle={item.playlistTitle}
                    channelTitle={item.channelTitle}
                  />
                </Grid>))}
            </Grid>
          )
        }
      </Container>
  )
};

const NotFound = () => (
  <Container  maxWidth={'lg'} sx={{my: 16}}>
    <Typography variant='h2' align='center'>404 Page Not Found!</Typography>
  </Container>
);

const PlayerPage = ({playLists}) => {
  const {playlistId} = useParams();
  const current = playLists[playlistId];
  return (
    <Container maxWidth={'lg'} sx={{my: 16}}>
      <Typography variant='h3'>{current.playlistTitle}</Typography>
      <Typography variant='body1'>{current.playlistDescription}</Typography>
    </Container>

  )
}


function App() {
  const {getPlaylistById, playlists, error, loading} = usePlaylist();
  
 
  const playlistArray = Object.values(playlists);
  

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
          element={<PlayerPage playLists={playlists}/>}
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
