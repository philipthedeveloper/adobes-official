import { SurveyState } from "./survey/interface";

export interface StoreInterface {
  Survey: SurveyState;
}

export type RootState = {
  Survey: StoreInterface["Survey"];
};
