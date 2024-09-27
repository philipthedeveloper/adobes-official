import classNames from "classnames";
import FormInput from "../../forms/FormInput";

type BasicInfoProps = {
  validation: any;
  currentRange: number;
};

export const ChallengesAndGoals = ({
  validation,
  currentRange,
}: BasicInfoProps) => {
  // Useful methods from validation obj
  const { handleChange, handleBlur, values } = validation;

  return (
    <div
      className={classNames(
        "relative w-full flex flex-col gap-4 fade-in-no-delay",
        {
          hidden: currentRange !== 5,
        }
      )}
    >
      <FormInput
        type="textarea"
        name="biggestChallengeInMarketing"
        label="What are the biggest challenges you face in your marketing efforts?"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter marketing challenges"
        value={values.biggestChallengeInMarketing || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        type="textarea"
        label="What specific goals are you aiming to achieve in the next 6-12 months?"
        name="specificGoals"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your marketing goals"
        value={values.specificGoals || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
    </div>
  );
};
