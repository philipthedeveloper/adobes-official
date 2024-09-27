import classNames from "classnames";
import FormInput from "../../forms/FormInput";

type SectionProps = {
  validation: any;
  currentRange: number;
};

const timeline = [
  "Immediately",
  "Within the next month",
  "Within the next 3 months",
  "In 6 months or more",
];

export const Timeline = ({ validation, currentRange }: SectionProps) => {
  // Useful methods from validation obj
  const { handleChange, handleBlur, values } = validation;

  return (
    <div
      className={classNames(
        "relative w-full flex flex-col gap-4 fade-in-no-delay",
        {
          hidden: currentRange !== 7,
        }
      )}
    >
      <FormInput
        type="chad-select"
        label="When are you looking to start working with a marketing agency?"
        name="timeline"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="~~ Select ~~"
        value={values.timeline || ""}
        validation={validation}
        className="neue-regular text-gray-300"
        options={timeline}
        defaultValue={""}
      />
    </div>
  );
};
