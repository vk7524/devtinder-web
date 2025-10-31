import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
   addUser : (state, action) => {
    state.user = action.payload
   },
   removeUser : (state, action) => {
    return null;
   }
  },
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer