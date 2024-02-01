import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNoti(state, action) {
      return action.payload
    }
  }
})

export const setNotification = (text, seconds) => {
  return async (dispatch) => {
    dispatch(setNoti(text))
    setTimeout(() => {
      dispatch(setNoti(""))
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer
export const { setNoti } = notificationSlice.actions