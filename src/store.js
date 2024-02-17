import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./state/theme";
import projectsReducer from "./state/projects";
import terminalReducer from "./state/terminal";

export default configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    terminal:terminalReducer,
  },
});