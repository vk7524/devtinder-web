import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connections : null,
}
const connectionSlice = createSlice({
    name: "connection",
    initialState,
    reducers:{
        addConnections: (state, action) => {
            state.connections = action.payload
        },
        removeConnections : (state, action) => {
            state.connections = null
        }
    }
}) 

export const {addConnections, removeConnections} = connectionSlice.actions;
export default connectionSlice.reducer;