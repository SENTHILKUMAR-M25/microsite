import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./Slice/portfolioslice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer, // ✅ MUST be "portfolio"
  },
});
