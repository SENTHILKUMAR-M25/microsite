import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import projectData from "../Components/AgentData";

const initialState = {
  projects:[],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        id: uuid(),
        ...action.payload,
      });
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
