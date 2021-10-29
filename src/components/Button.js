import {Button, Grid, Typography } from '@mui/material';

<Grid container className='mt-5' rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Button sx={{backgroundColor:'#309aa6', color:'white', padding: '8px 25px'}}>option</Button>
                </Grid>                 
                <Grid item xs={6}>
                  <Button sx={{backgroundColor:'#309aa6', color:'white', padding: '8px 25px'}}>option</Button>
                </Grid>                 
                <Grid item xs={6}>
                  <Button sx={{backgroundColor:'#309aa6', color:'white', padding: '8px 25px'}}>option</Button>
                </Grid>                 
                <Grid item xs={6}>
                  <Button sx={{backgroundColor:'#309aa6', color:'white', padding: '8px 25px'}}>option</Button>
                </Grid>  
                <Grid item xs={12} className='mt-3'>
                  <Button sx={{color: '#00838F', border: '2px solid #00838F', padding: '8px 25px'}}>Next</Button>
                </Grid>               
              </Grid>