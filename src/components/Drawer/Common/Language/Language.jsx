import * as React from 'react';
import { Box , Toolbar , AppBar , IconButton , Typography , Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import LanguageGrid from "./LanguageGrid";
import AddLanguage from "./AddLanguage";


export default function SearchAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
     
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Language
          </Typography>
          <Stack direction="row" spacing={1}  >
      <div aria-label="Add" color="primary" >
      {/* <Button variant="contained" color="secondary" startIcon={<AddCircleOutlineSharpIcon />}>
              New Religion 
              </Button> */}
              <AddLanguage />

      </div>        
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="PDF">
        <PictureAsPdfIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Excel">
        <SystemUpdateAltIcon />
      </IconButton>
    </Stack>
        </Toolbar>
     
    </Box>
    <div className=''>
              
    <Box sx={{ flexGrow: 1 }}>
<AppBar position="none" style={{ background: 'none'}}>
  

</AppBar>
</Box>

    </div>
    <LanguageGrid />
    </>
  );
}
