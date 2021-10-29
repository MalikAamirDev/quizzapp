import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function MenuAppBar() {

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  sx={{backgroundColor:'#00838F'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}