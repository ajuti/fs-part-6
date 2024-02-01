import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNoti(state, action) {
      return action.payload.text
    }
  }
})

export default notificationSlice.reducer
export const { setNoti } = notificationSlice.actions