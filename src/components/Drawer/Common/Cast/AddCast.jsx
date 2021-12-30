import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { Save } from '@mui/icons-material';
import axios from 'axios';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState(0);

   const save = () => {
      console.warn({id ,name});
      let data={id,name}
      setOpen(false);
       
      axios.post(`https://hrapplicationapi.azurewebsites.net/v1/Caste`,{data})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})

    };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Cast
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Cast</DialogTitle>
        <DialogContent>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          label="Type id number"
          defaultValue={id}
          onChange={(e)=>{setId(e.target.value)}}
        />
         <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          label="Type Cast Name"
          defaultValue={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
      </div>
     
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
