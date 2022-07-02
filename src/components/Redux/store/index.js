import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice";
import users  from "../slice/userSlice";

export const store = configureStore({
    reducer:{
        counter,
        users,
    }
})