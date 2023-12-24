import { useEffect, useState } from 'react'
import getPlaylist from './api'


function App() {
  useEffect(()=> {
    getPlaylist('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl').then((res => console.log(res)));
  }, [])
  return (
    <>
      <h3>Clean YouTube</h3>
    </>
  )
}

export default App
