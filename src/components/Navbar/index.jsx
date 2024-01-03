import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
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
                <Typography variant="h5">
                    Clean YouTube
                </Typography>
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