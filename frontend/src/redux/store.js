import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/countSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }   
});

