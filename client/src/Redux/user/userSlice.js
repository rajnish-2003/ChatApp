import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser:null,
  };

  const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

        signInSucesses:(state,action)=>{
          state.currentUser=action.payload;
        }
    }

  });

  export const {signInSucesses}=userSlice.actions;
  export default  userSlice.reducer;