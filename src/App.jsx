import { useEffect, useState } from 'react'
import getPlaylist from './api'
import usePlaylist from './hooks/usePlaylist';


function App() {
  const {getPlaylistById, playlists} = usePlaylist();
  
  useEffect(()=> {
    getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
  }, [])

  console.log('Playlists', playlists);
  return (
    <>
      <h3>Clean YouTube</h3>
    </>
  )
}

export default App
