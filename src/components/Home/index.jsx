import { Container, Grid } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import PlaylistCardItem from "../playlist-card-item";

const playlistID = 'PLKgLo6H-44PKWV8pXR5y4VFHRifZ7yv7f';
const HomePage = ({playlistArray}) => {

 const playlist = useStoreActions(actions => actions.playlist);
 
 useEffect(()=> {
  playlist.getPlaylist(playlistID);
 },[]);

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

export default HomePage;