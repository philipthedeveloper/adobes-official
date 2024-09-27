import { ApiResponse } from "@/interfaces";

export interface SurveyState {
  submittingSurvey: boolean;
  surveySubmitted: boolean;
  surveySubmissionError: string;
}

export type SurveyOrgApiResponse = ApiResponse;

export type SubmitSurveyApiResponse = ApiResponse;
