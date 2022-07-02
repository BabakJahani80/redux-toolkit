import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : 'Slicer',
    initialState :{
        number : 100,
        id: 1
    },
    reducers:{
        increment : (state)=>{
            state.number += 10
        },
        decrement : (state)=>{
            if (state.number > 10) {
                state.number -= 10
            }else{
                state.number = 0
            }
        },

        statePlus:(state , {payload})=>{
            state.number += payload
        }

    }
    
})
export const {increment , decrement , statePlus} = CounterSlice.actions
export default CounterSlice.reducer
