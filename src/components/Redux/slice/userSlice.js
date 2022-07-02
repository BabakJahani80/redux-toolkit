import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserList = createAsyncThunk("fetchUsers" , async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response)
    return response
})

export const userSlice = createSlice({
    name : "users",
    initialState: {
        value : [],
        status : "idle"
    },
    extraReducers:{
        [fetchUserList.pending] : (state)=>{
            state.status = 'pending';
        },
        [fetchUserList.fulfilled] : (state , action)=>{
            state.status = 'success';
            console.log(action.payload.data)
        },
        [fetchUserList.rejected] : (state)=>{
            state.status = 'rejected';
        }
    }
})
export default userSlice.reducer