import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


const Home = () => {
  const drawerWidth = 240;

  
  

    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline style={{ backgroundColor: 'gray'}} />
  
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              color: 'text.disabled',
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'gray' },
            }}
          >
            
            <Box sx={{ overflow: 'auto' }}>
  
              <List>
  
                <BarcodeScanner />
  
              </List>
  
            </Box>
          </Drawer>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <img width="96" onclick="SelectADropdownItem('design-dropdown','T-shirt')"
                 height="96" src="https://img.icons8.com/fluency/96/polo-shirt.png" alt="polo-shirt"/>
              </Grid>
              <Grid item xs={4}>
                <img width="96" onclick="SelectADropdownItem('design-dropdown','Shirt')"
                 height="96" src="https://img.icons8.com/color/96/shirt.png" alt="shirt"/>
              </Grid>
              <Grid item xs={4}>
                <img width="100" onclick="SelectADropdownItem('design-dropdown','Jeans')"
                height="100" src="https://img.icons8.com/plasticine/100/jeans.png" alt="jeans"/>
              </Grid>
              <Grid item xs={4}>
                <img width="96" onclick="SelectADropdownItem('design-dropdown','Dress')"
                 height="96" src="https://img.icons8.com/emoji/96/dress.png" alt="dress"/>
              </Grid>
              <Grid item xs={4}>
                <img width="96" onclick="SelectADropdownItem('design-dropdown','Demin Shorts')"
                 height="96" src="https://img.icons8.com/color/96/denim-shorts.png" alt="denim-shorts"/>
              </Grid>
              <Grid item xs={4}>
                <img width="100" onclick="SelectADropdownItem('design-dropdown','Suit')"
                height="100" src="https://img.icons8.com/plasticine/100/suit.png" alt="suit"/>
              </Grid>
            </Grid>

  
            <br /><br /><br />
  
            <Link to="/color">
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />} size="large" disableElevation>
              Next
            </Button>
            </Link>
  
          </Box>
  
        </Box>

        
  
      </>
    );
  };
  
  export default Home;
  