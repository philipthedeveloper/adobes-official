import classNames from "classnames";
import FormInput from "../../forms/FormInput";

type BasicInfoProps = {
  validation: any;
  currentRange: number;
};

const operatingYears = [
  "Less than 1 years",
  "1-3 years",
  "3-5 years",
  "5+ years",
];

const companySize = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "200+ employees",
];

export const BusinessInformation = ({
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
          hidden: currentRange !== 2,
        }
      )}
    >
      <FormInput
        type="text"
        name="businessIndustry"
        label="What industry does your business operate in?"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your business's industry"
        value={values.businessIndustry || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        type="chad-select"
        label="How long has your business been operating?"
        name="operatingYears"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Select Year"
        value={values.operatingYears || ""}
        validation={validation}
        className="neue-regular text-gray-300"
        options={operatingYears}
        defaultValue={""}
      />
      <FormInput
        type="chad-select"
        label="What is the size of your company?"
        name="companySize"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Select Company Size"
        value={values.companySize || ""}
        validation={validation}
        className="neue-regular text-gray-300"
        options={companySize}
        defaultValue={""}
      />
    </div>
  );
};
