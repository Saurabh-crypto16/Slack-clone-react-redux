import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  // enterRoom is dispatcher used to dispatch a state in the redux
  reducers: {
    enterRoom: (state, action) => {
      //change the current roomId to payload roomId
      //payload is the state dispatched
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

//these are selectors to access the values from store
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
