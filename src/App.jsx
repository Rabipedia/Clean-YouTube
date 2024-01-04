import { useEffect, useState } from 'react'
import getPlaylist from './api'
import usePlaylist from './hooks/usePlaylist';
import { Container, CssBaseline, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import PlaylistCardItem from './components/playlist-card-item';


function App() {
  const {getPlaylistById, playlists, error, loading} = usePlaylist();
  console.log(playlists);
 
  const playlistArray = Object.values(playlists);
  console.log(playlistArray);

  return (
    <>
      <CssBaseline/>
      <Container maxWidth={'lg'} sx={{my: 16}}>
        <Navbar getPlaylistById={getPlaylistById}/>
        {
          playlistArray.length > 0 && (
            <Grid container alignItems={'stretch'}>
              {playlistArray.map((item) => (
                <Grid item  xs={12} md={6} lg={4} mb={2}>
                  <PlaylistCardItem
                  key={item.id}
                  playlistThumnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                  />
                </Grid>))}
            </Grid>
          )
        }
      </Container>
    </>
  )
}

export default App
