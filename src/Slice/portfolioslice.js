// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   /* ---------------- HOME ---------------- */
//   name: "",
//   tagline: "",
//   description: "",
//   phone: "",
//   email: "",
//   location: "",

//   /* ---------------- ABOUT ---------------- */
//   profile: {
//     name: "",
//     experience: "",
//     description: "",
//     projectsCount: "",
//     clientsCount: "",
//     location: "",
//   },

//   /* ---------------- PROJECTS ---------------- */
//   projects: [],

//   /* ---------------- FOOTER ---------------- */
//   footer: {
//     brandName: "",
//     description: "",
//     phone: "",
//     email: "",
//     location: "",
//     facebook: "",
//     instagram: "",
//     linkedin: "",
//   },
// };

// const portfolioSlice = createSlice({
//   name: "portfolio",
//   initialState,
//   reducers: {
//     /* -------- HOME + FOOTER -------- */
//     updatePortfolio: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },

//     /* -------- ABOUT -------- */
//     updateProfile: (state, action) => {
//       state.profile = action.payload;
//     },

//     /* -------- PROJECTS -------- */
//     addProject: (state, action) => {
//       state.projects.push(action.payload);
//     },

//     deleteProject: (state, action) => {
//       state.projects = state.projects.filter(
//         (project) => project.id !== action.payload
//       );
//     },

//     /* -------- RESET (OPTIONAL) -------- */
//     resetPortfolio: () => initialState,
//   },
// });

// export const {
//   updatePortfolio,
//   updateProfile,
//   addProject,
//   deleteProject,
//   resetPortfolio,
// } = portfolioSlice.actions;

// export default portfolioSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* ---------------- HOME ---------------- */
  name: "Senthil Kumar",
  tagline: "Trusted Real Estate Consultant",
  description: "Helping clients find the perfect property with transparency.",
  phone: "+91 98765 43210",
  email: "vspropertyvision@gmail.com",
  location: "Chennai, Tamil Nadu, India",

  /* ---------------- ABOUT ---------------- */
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
    /* -------- HOME -------- */
    updateHome: (state, action) => {
      return { ...state, ...action.payload };
    },

    /* -------- ABOUT -------- */
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },

    /* -------- FOOTER (NEW & CLEAN) -------- */
    updateFooter: (state, action) => {
      state.footer = {
        ...state.footer,
        ...action.payload,
      };
    },

    /* -------- PROJECTS -------- */
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },

    /* -------- RESET -------- */
    resetPortfolio: () => initialState,
  },
});

export const {
  updateHome,
  updateProfile,
  updateFooter,
  addProject,
  deleteProject,
  resetPortfolio,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
