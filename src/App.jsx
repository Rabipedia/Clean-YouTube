import { useEffect, useState } from 'react'
import getPlaylist from './api'


function App() {
  useEffect(()=> {
    getPlaylist('PLKgLo6H-44PKWV8pXR5y4VFHRifZ7yv7f').then((res => console.log(res)));
  }, [])
  return (
    <>
      <h3>Clean YouTube</h3>
    </>
  )
}

export default App
