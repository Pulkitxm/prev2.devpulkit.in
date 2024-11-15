import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "isDark",
  initialState: {
    isDark:window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
  reducers: {
    toggle: (state) => {
      return {...state,isDark:!state.isDark};
    },
    set: (state,action) => {
      return {...state,isDark:action.payload};
    }
  },
});

export const { toggle,set } = themeSlice.actions;
export default themeSlice.reducer;