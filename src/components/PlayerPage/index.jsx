import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const PlayerPage = ({playlists}) => {
    const {playlistId} = useParams();
    const current = playlists[playlistId];
    console.log(current);
    return (
      <Container maxWidth={'lg'} sx={{my: 16}}>
        <Typography variant='h3'>{current.playlistTitle}</Typography>
        <Typography variant='body1'>{current.playlistDescription}</Typography>
      </Container>
  
    )
  }

  export default PlayerPage;