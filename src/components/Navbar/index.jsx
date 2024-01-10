import * as React from 'react';
import { useState } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack } from '@mui/material';
import PlaylistForm from '../PlaylistForm';

const Navbar = ({getPlaylistById}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const getPlaylistId = (playlistId) => {
      getPlaylistById(playlistId);
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='default' sx={{py: 2}}>
        <Container maxWidth={'lg'}>
            <Toolbar> 
            <Stack sx={{flexGrow: 1}}>
                <Link component={RouterLink} sx={{textDecoration: 'none', color: 'grey'}}>
                  <Typography variant="h5">
                      Clean YouTube
                  </Typography>
                </Link>
                <Typography variant="body1">
                    By rabipedia
                </Typography>
            </Stack>
            <Button variant='contained' onClick={handleClickOpen}>Add Playlist</Button>
            <PlaylistForm open={open} handleClickOpen={handleClose} handleClose={handleClose} getPlaylistId={getPlaylistId}></PlaylistForm>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;