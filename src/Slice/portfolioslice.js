

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* ---------------- HOME INFO ---------------- */
  name: "Senthil Kumar",
  tagline: "Trusted Real Estate Consultant",
  description: "Helping clients find the perfect property with transparency.",
  phone: "+91 98765 43210",
  email: "vspropertyvision@gmail.com",
  location: "Chennai, Tamil Nadu, India",

  /* ---------------- ABOUT PROFILE ---------------- */
  profile: {
    name: "Senthil Kumar",
    experience: "3+ Years",
    description:
      "Experienced real estate professional specializing in residential and commercial properties.",
    projectsCount: 25,
    clientsCount: 120,
    location: "Chennai",
  },

  /* ---------------- PROJECTS ---------------- */
  projects: [],

  /* which project should show on home */
  featuredProjectId: null,

  /* ---------------- FOOTER ---------------- */
  footer: {
    brandName: "VS Property Vision",
    description:
      "Helping you find the perfect home, commercial space, and investment opportunities with trust and transparency.",
    phone: "+91 98765 43210",
    email: "vspropertyvision@gmail.com",
    location: "Chennai, Tamil Nadu, India",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    /* ================= HOME ================= */
    updateHome: (state, action) => {
      return { ...state, ...action.payload };
    },

    /* ================= PROFILE ================= */
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },

    /* ================= FOOTER ================= */
    updateFooter: (state, action) => {
      state.footer = {
        ...state.footer,
        ...action.payload,
      };
    },

    /* ================= PROJECTS ================= */

    // ➕ Add new project
    addProject: (state, action) => {
      const newProject = {
        id: Date.now(), // unique id
        createdAt: new Date().toISOString(),
        ...action.payload,
      };

      state.projects.push(newProject);

      // if first project -> auto featured
      if (!state.featuredProjectId) {
        state.featuredProjectId = newProject.id;
      }
    },

    // ❌ Delete project
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );

      // if deleted project was featured -> set another
      if (state.featuredProjectId === action.payload) {
        state.featuredProjectId =
          state.projects.length > 0 ? state.projects[0].id : null;
      }
    },

    // ✏️ Update project
    updateProject: (state, action) => {
      const index = state.projects.findIndex(
        (p) => p.id === action.payload.id
      );
      if (index !== -1) {
        state.projects[index] = {
          ...state.projects[index],
          ...action.payload,
        };
      }
    },

    // ⭐ set featured project
    setFeaturedProject: (state, action) => {
      state.featuredProjectId = action.payload;
    },

    /* ================= RESET ================= */
    resetPortfolio: () => initialState,
  },
});

export const {
  updateHome,
  updateProfile,
  updateFooter,
  addProject,
  deleteProject,
  updateProject,
  setFeaturedProject,
  resetPortfolio,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
