import classNames from "classnames";
import FormInput from "../../forms/FormInput";
import { currentMarketingChannels, primaryGoals } from "@/constant";
import { v4 as uuidv4 } from "uuid";

type SectionProps = {
  validation: any;
  currentRange: number;
};

const generateYesOrNoOption = () => [
  {
    id: uuidv4(),
    value: true,
    label: "Yes",
  },
  {
    id: uuidv4(),
    value: false,
    label: "No",
  },
];

const monthlyMarketingBudget = [
  "Less than $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export const MarketingAndLeadGenerationNeeds = ({
  validation,
  currentRange,
}: SectionProps) => {
  // Useful methods from validation obj
  const { handleChange, handleBlur, values } = validation;

  return (
    <div
      className={classNames(
        "relative w-full flex flex-col gap-4 fade-in-no-delay",
        {
          hidden: currentRange !== 3,
        }
      )}
    >
      <FormInput
        name="primaryGoals"
        label="What is your primary goal for engaging with a marketing and lead generation agency?"
        onBlur={validation.handleBlur}
        onChange={validation.handleChange}
        validation={validation}
        type="checkbox"
        value={values.primaryGoals}
        checkboxItems={primaryGoals}
        className="neue-regular text-gray-500"
      />
      <FormInput
        name="satisfiedWithCurrentStrategy"
        label="Are you satisfied with your current marketing strategy?"
        onBlur={validation.handleBlur}
        onChange={validation.handleChange}
        type="radio-group"
        validation={validation}
        value={values.satisfiedWithCurrentStrategy}
        defaultValue={values.satisfiedWithCurrentStrategy}
        radioOptions={generateYesOrNoOption()}
        className="neue-regular text-gray-500"
      />
      {values.satisfiedWithCurrentStrategy || (
        <FormInput
          type="textarea"
          name="areaOfImprovement"
          label="What areas do you feel need improvement?"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Provide the areas that need improvement..."
          value={values.areaOfImprovement || ""}
          validation={validation}
          className="neue-regular text-gray-300"
          inputStyle={{
            minHeight: "70px",
          }}
        />
      )}
      <FormInput
        name="currentMarketingChannels"
        label="Which marketing channels are you currently using? (Select all that apply)"
        onBlur={validation.handleBlur}
        onChange={validation.handleChange}
        validation={validation}
        type="checkbox"
        value={values.currentMarketingChannels}
        checkboxItems={currentMarketingChannels}
        className="neue-regular text-gray-500"
      />
      <FormInput
        type="chad-select"
        label="What is your monthly budget for marketing and lead generation services?"
        name="monthlyMarketingBudget"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Select Budget"
        value={values.monthlyMarketingBudget || ""}
        validation={validation}
        className="neue-regular text-gray-300"
        options={monthlyMarketingBudget}
        defaultValue={""}
      />
      <FormInput
        name="haveInhouseMarketingTeam"
        label="Do you have an in-house marketing team?"
        onBlur={validation.handleBlur}
        onChange={validation.handleChange}
        type="radio-group"
        validation={validation}
        value={values.haveInhouseMarketingTeam}
        defaultValue={values.haveInhouseMarketingTeam}
        radioOptions={generateYesOrNoOption()}
        className="neue-regular text-gray-500"
      />
      {values.haveInhouseMarketingTeam && (
        <FormInput
          type="text"
          name="marketingTeamMembers"
          label="How many members are on your team?"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter team size..."
          value={values.marketingTeamMembers || ""}
          validation={validation}
          className="neue-regular text-gray-300"
        />
      )}
    </div>
  );
};
