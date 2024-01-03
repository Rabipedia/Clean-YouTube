import { useEffect, useState } from 'react'
import getPlaylist from './api'
import usePlaylist from './hooks/usePlaylist';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';


function App() {
  const {getPlaylistById, playlists, error, loading} = usePlaylist();
  
  console.log(playlists);
  console.log('error', error)

  return (
    <>
      <CssBaseline/>
      <div>
        <Navbar getPlaylistById={getPlaylistById}/>
      </div>
    </>
  )
}

export default App
