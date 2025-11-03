import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from "./userSlice"
import feedSliceReducer from "./feedSlice"
export const store = configureStore({
  reducer: {
    userSlice: userSliceReducer,
    feed : feedSliceReducer,
  },
})