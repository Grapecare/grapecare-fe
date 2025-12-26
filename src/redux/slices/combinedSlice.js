import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const combinedSlices = combineReducers({
    auth: authSlice,
})

export default combinedSlices;