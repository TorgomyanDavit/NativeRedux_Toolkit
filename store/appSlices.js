import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getHome } from "../Request/appRequest/getRequest";

const appSlices = createSlice({
  name: "message",
  initialState: {
    message: "Initial message"
  },
  reducers: {
    setMessage(state, action) {
      state.message = "action.payload"
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(getHome.pending, (state, action) => {
      console.log("gethome pending",action.payload);
    })
    .addCase(getHome.fulfilled, (state, action) => {
      console.log("gethome fulfild",action.payload);
      state.message = JSON.stringify(action.payload) 
    })
  }
})

export const { setMessage } = appSlices.actions
export default appSlices.reducer