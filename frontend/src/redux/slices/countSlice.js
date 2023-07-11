import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",
    initialState: 0,
    reducers: {
        alterVal: (state, action) => {
            const act = action.payload.type;
            switch (act) {
                case "INCREMENT": return state+1;
                case "DECREMENT": return state-1;
                default: return state;
            }
        }
    }
})

export const { alterVal } = counterSlice.actions;

export default counterSlice.reducer;