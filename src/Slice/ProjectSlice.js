

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  loading: false,
  error: null
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: {
      reducer: (state, action) => {
        state.projects.unshift(action.payload); // unshift adds to start of list
      },
      prepare: (data) => {
        return {
          payload: {
            id: nanoid(),
            ...data,
            // Ensure arrays exist even if user didn't upload anything
            bg_img: data.bg_img || [],
            images: data.images || [],
            amenities: data.amenities || [],
          }
        };
      }
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    }
  }
});

export const { addProject, removeProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;