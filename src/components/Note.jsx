//import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
//import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarcodeScanner from './BarcodeScanner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const idb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const createCollectionsIndexedDB = () => {
  //check for support
  if (!idb) {
      console.log("This browser doesn't support IndexedDB");
      return;
  }



  var request = indexedDB.open("laundry", 2);
  request.onupgradeneeded = () => {
      //var db = event.target.result;
      var db = request.result;
      db.createObjectStore("items",{keyPath:"id", autoIncrement:true});
      // document.write("Object store Created Successfully...");
  };

  request.onsuccess = function () {
    console.log("Database opened successfully");
  };
}


const drawerWidth = 240;

const Note = () => {

  const barcode = useSelector(
    (state) => state.barcodeScanner.barcode,
  );

  const type = useSelector(
    (state) => state.barcodeScanner.type,
  );

  const color = useSelector(
    (state) => state.barcodeScanner.color,
  );

  const brand = useSelector(
    (state) => state.barcodeScanner.brand,
  );

  const [note, setNote] = useState(''); 

  useEffect(()=>{
    createCollectionsIndexedDB();
  }, []);

   //Insert Data
   const handleSubmit = () => {
    const dbPromise = idb.open("laundry", 2);
    if(type){
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;

            var tx = db.transaction("items", "readwrite");
            var customerData = tx.objectStore("items");
            const items = customerData.put({id:barcode,type,color,brand,note});
            items.onsuccess = () => {
                tx.oncomplete = function () {
                    db.close();
                };
            }
            items.onerror = (event) => {
                console.log(event);
                alert("Error occur");
            }
        }
    }
  }


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

          <h2>Note</h2>
  
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

  
            <textarea name="" style={{backgroundColor: 'white', color: 'black', width: '500px'}} id="" cols="30" rows="10"
                onChange={(e) => setNote(e.target.value)}>{note}</textarea>

  
            <br /><br /><br />
            <Link to="/brand">
            <Button container spacing={8} variant="outlined" size="meduim" disableElevation startIcon={<ArrowBackIcon />} >
              BACk
            </Button>
            </Link>

            &nbsp;&nbsp;
  
            {/* <Link to="/brand"> */}
            <Button container spacing={8} variant="contained" endIcon={<ArrowForwardIcon />} size="meduim" disableElevation onClick={handleSubmit}>
              Submit
            </Button>
            {/* </Link> */}
  
          </Box>
  
        </Box>

  
      </>
    );
  };
  
  export default Note;