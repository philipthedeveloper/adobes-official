import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

// Submit survey
export const submitSurvey = (data: any) => {
  return api.create(url.SUBMIT_SURVEY, data);
};
