import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./DataSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
