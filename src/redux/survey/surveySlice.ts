import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitSurvey as submitSurveyApi } from "@/api";
import { SurveyState, SubmitSurveyApiResponse } from "./interface";

// initial contact state
const INIT_STATE: SurveyState = {
  submittingSurvey: false,
  surveySubmitted: false,
  surveySubmissionError: "",
};

// submit survey
export const submitSurvey = createAsyncThunk(
  "submitSurvey",
  async (data: any, thunkAPI) => {
    try {
      const surveyResponse: Awaited<Promise<SubmitSurveyApiResponse>> =
        (await submitSurveyApi(data)) as unknown as SubmitSurveyApiResponse;
      return surveyResponse.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const contactSlice = createSlice({
  name: "Contact",
  initialState: INIT_STATE,
  reducers: {
    resetSubmitSurvey: (state) => {
      state.submittingSurvey = false;
      state.surveySubmitted = false;
      state.surveySubmissionError = "";
    },
  },
  extraReducers(builder) {
    // Survey state
    builder
      .addCase(submitSurvey.pending, (state) => {
        state.submittingSurvey = true;
        state.surveySubmitted = false;
      })
      .addCase(submitSurvey.fulfilled, (state) => {
        state.submittingSurvey = false;
        state.surveySubmitted = true;
      })
      .addCase(submitSurvey.rejected, (state, action) => {
        state.submittingSurvey = false;
        state.surveySubmitted = false;
        state.surveySubmissionError = action.payload as string;
      });
  },
});

export default contactSlice.reducer;
export const { resetSubmitSurvey } = contactSlice.actions;
