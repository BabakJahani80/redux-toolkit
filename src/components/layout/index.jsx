import React from 'react';
import Header from '../header';
import {
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Main from '../main';
import { useStyles } from '../header/style.header';
import { Box } from '@mui/material';
import Sidebar from '../sidebar';
import MusicDetails from '../Musicdetails';

const Layout = ({audio}) => {
    const style = useStyles();
    return ( 
        <>
            <Header audio={audio}/>

            <Box className={style.navbar}>
                <Link className={style.btn} to='/'>Back To Home</Link>

                <Link className={style.btn}
                to='/Music'>Music Lists</Link>

                <Link className={style.btn}
                to='/signin'>SignIN</Link>

            </Box>

            
            <Routes>
            <Route path='/Music' element={<Main />}></Route>
            
            <Route path='/signin' element={<Sidebar/>}></Route>

            <Route path='/MusicDetails/:NormalName' element={<MusicDetails/>}></Route>
            </Routes>
            
        </>
    );
}
 
export default Layout;