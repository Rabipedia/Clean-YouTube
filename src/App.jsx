import { useEffect, useState } from 'react'
import getPlaylist from './api'
import usePlaylist from './hooks/usePlaylist';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';


function App() {
  const {getPlaylistById, playlists, error, loading} = usePlaylist();

 
  
  useEffect(()=> {
    getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
  }, []);

  return (
    <>
      <CssBaseline/>
      <div>
        <Navbar/>
      </div>
    </>
  )
}

export default App
