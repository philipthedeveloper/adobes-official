import classNames from "classnames";
import FormInput from "../../forms/FormInput";
import { biggestLeadGenerationChallenge } from "@/constant";

type SectionProps = {
  validation: any;
  currentRange: number;
};

const averageMonthlyLeadGeneration = [
  "Less than 10",
  "10 - 50",
  "51 - 100",
  "101 - 500",
  "501+",
];

const currentConversionRate = ["Less than 1%", "1 - 5%", "5 - 10%", "10%+"];

export const CurrentMarketingPerformance = ({
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
          hidden: currentRange !== 4,
        }
      )}
    >
      <FormInput
        type="chad-select"
        label="How many leads do you generate on average per month?"
        name="averageMonthlyLeadGeneration"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="~~ Select ~~"
        value={values.averageMonthlyLeadGeneration || ""}
        validation={validation}
        className="neue-regular text-gray-300"
        options={averageMonthlyLeadGeneration}
        defaultValue={""}
      />

      <FormInput
        type="text"
        label="What is your current conversion rate from lead to customer?"
        name="currentConversionRate"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g 5% - 10%, 10%"
        value={values.currentConversionRate || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        name="biggestLeadGenerationChallenge"
        label="What is your primary goal for engaging with a marketing and lead generation agency?"
        onBlur={validation.handleBlur}
        onChange={validation.handleChange}
        validation={validation}
        type="checkbox"
        value={values.biggestLeadGenerationChallenge}
        checkboxItems={biggestLeadGenerationChallenge}
        className="neue-regular text-gray-500"
      />
    </div>
  );
};
