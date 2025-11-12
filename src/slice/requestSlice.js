import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    request : [],
}
export const requestSlice = createSlice({
    name: 'requestSlice',
    initialState,
    reducers :{
        addRequest : (state, action) =>{
            state.request = action.payload
        },
        removeRequest :(state, action) => {
         state.request = state.request.filter(req => req._id !== action.payload);
        }
    }
})

export const {addRequest, removeRequest} = requestSlice.actions
export default requestSlice.reducer