import classNames from "classnames";
import FormInput from "../../forms/FormInput";

type BasicInfoProps = {
  validation: any;
  currentRange: number;
};

export const BasicInformation = ({
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
          hidden: currentRange !== 1,
        }
      )}
    >
      <FormInput
        type="text"
        name="name"
        label="Name"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your name"
        value={values.name || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        type="text"
        name="companyName"
        label="Company Name"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your company's name"
        value={values.companyName || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        type="text"
        name="emailAddress"
        label="Email Address"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your email address"
        value={values.emailAddress || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        type="phone-number"
        name="phoneNumber"
        label="Phone Number"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your phone number"
        value={values.phoneNumber || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
      <FormInput
        type="text"
        name="website"
        label="Website"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g https://example.com"
        value={values.website || ""}
        validation={validation}
        className="neue-regular text-gray-300"
      />
    </div>
  );
};
