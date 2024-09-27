import classNames from "classnames";
import FormInput from "../../forms/FormInput";

type BasicInfoProps = {
  validation: any;
  currentRange: number;
};

export const AdditionalInformation = ({
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
          hidden: currentRange !== 8,
        }
      )}
    >
      <FormInput
        type="textarea"
        name="additionalInformation"
        label="Is there anything else we should know about your marketing needs and goals?"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Provide additional information"
        value={values.additionalInformation || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
    </div>
  );
};
