import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn:(state, action) => {
        state.userToken = action.payload
      },
      setUserInfo:(state,action)=>{
        state.userInfo = action.payload
 
      }
  },
})
export const { setLoggedIn,setUserInfo } = authSlice.actions

export default authSlice.reducer