import { createSlice } from "@reduxjs/toolkit";

export const terminalSlice = createSlice({
  name: "terminal",
  initialState: {
    open: false,
    top: "50%",
    left: "50%",
    commandHistory: [],
    maximize: false,
  },
  reducers: {
    openTerminal: (state) => {
      return { ...state, open: true };
    },
    closeTerminal: (state) => {
      return { ...state, open: false };
    },
    toggleTerminal: (state) => {
      return { ...state, open: !state.open };
    },
    moveTerminal: (state, action) => {
      return { ...state, top: action.payload.top, left: action.payload.left };
    },
    addCommand: (state,action) => {
        return {...state,commandHistory:[...state.commandHistory,action.payload]};
    },
    clearCommand: (state) => {
      return { ...state, commandHistory: [] };
    },
    toggleMaximize: (state) => {
      return { ...state, maximize: !state.maximize };
    },
  },
});

export const {
  openTerminal,
  closeTerminal,
  moveTerminal,
  toggleTerminal,
  addCommand,
  clearCommand,
  toggleMaximize,
} = terminalSlice.actions;
export default terminalSlice.reducer;
