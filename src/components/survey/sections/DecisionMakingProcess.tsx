import classNames from "classnames";
import FormInput from "../../forms/FormInput";
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

export const DecisionMakingProcess = ({
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
          hidden: currentRange !== 6,
        }
      )}
    >
      <FormInput
        name="isDecisionMaker"
        label="Are you the decision-maker for hiring a marketing agency?"
        onBlur={validation.handleBlur}
        onChange={validation.handleChange}
        type="radio-group"
        validation={validation}
        value={values.isDecisionMaker}
        defaultValue={values.isDecisionMaker}
        radioOptions={generateYesOrNoOption()}
        className="neue-regular text-gray-500"
      />
      {values.isDecisionMaker || (
        <FormInput
          type="textarea"
          name="otherEntitiesInvolved"
          label="Who else is involved in the decision-making process?"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter other entities involved..."
          value={values.otherEntitiesInvolved || ""}
          validation={validation}
          className="neue-regular text-gray-300"
          inputStyle={{
            minHeight: "70px",
          }}
        />
      )}
    </div>
  );
};
