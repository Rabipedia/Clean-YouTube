import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PlaylistForm = ({open, handleClickOpen, handleClose, getPlaylistId })  => {
    const [state, setState] = useState();

    const handleSubmit = () => {
      //Todo: handle url later.
      if(!state) {
        alert('Invalid State');
      } else {
        getPlaylistId(state);
        setState('');
        handleClose();
      }
    };
  
  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new Playlist please insert the playlist id or playlist link.
            Please make sure the link is correct. Otherwise we won't be able to
            fetch the playlist information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
  );
}

export default PlaylistForm;