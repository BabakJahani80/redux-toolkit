import { Box, Button , ButtonBase, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment , statePlus} from '../components/Redux/slice';
import { fetchUserList } from '../components/Redux/slice/userSlice';
import useStyles from './app-style';

const App = () => {
  const {number} = useSelector(state => state.counter);
  const users = useSelector(store => store.users);
  const Dispatch = useDispatch();
  const styles = useStyles();

  const [Time, setTime] = useState(0);
    return ( 
      <>
        <Typography className={styles.type}>Count - {number}</Typography>
        
        <Box className={styles.type}>
        <Button
        style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        margin: "6px",
        fontSize: "26px"
    }} className={styles.btn} onClick={()=>Dispatch(increment())}>+</Button>
        <Button 
        style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        margin: "6px",
        fontSize: "26px"
    }} className={styles.btn} onClick={()=>Dispatch(decrement())}>-</Button>
        
        </Box>

        <Box className={styles.type}>
          <input type='number' onChange={(e)=>{setTime(Number(e.target.value))}}></input>
          <ButtonBase onClick={()=>Dispatch(statePlus(Time))}>plus : {Time}</ButtonBase>
        </Box>


        <Box>
          <Box>{users.status}</Box>
        </Box>
        <Button onClick={()=>Dispatch(fetchUserList())}>Fetch Data</Button>
      </>
     );
}
 
export default App;