import { configureStore } from "@reduxjs/toolkit";
import surveySlice from "./survey/surveySlice";

const store = configureStore({
  reducer: {
    Survey: surveySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
