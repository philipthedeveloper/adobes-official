import { configureStore } from "@reduxjs/toolkit";
import surveySlice from "./survey/surveySlice";
import themeSlice from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    Survey: surveySlice,
    Theme: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
