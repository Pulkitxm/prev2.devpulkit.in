import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./state/theme";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});