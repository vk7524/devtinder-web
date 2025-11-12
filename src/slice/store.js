import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from "./userSlice"
import feedSliceReducer from "./feedSlice"
import connectionsReducer from "./connectionSlice"
import requestReducer from "./requestSlice"
export const store = configureStore({
  reducer: {
    userSlice: userSliceReducer,
    feed : feedSliceReducer,
    connection : connectionsReducer,
    requestSlice : requestReducer,
  },
})