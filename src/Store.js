import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./Slice/portfolioslice";
import projectReducer from "./Slice/ProjectSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    project: projectReducer, //✅ MUST be "portfolio"
  },
});
