import { createSlice } from "@reduxjs/toolkit";
import projects from "./projects.json";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: projects,
  reducers: {
    setProjects: (state,action) => {
      return action.payload;
    },
    getAll: (state) => {
        return state;
    },
    getById: (state,action) => {
        return state.find((project) => project.id === action.payload);
    },
  },
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;