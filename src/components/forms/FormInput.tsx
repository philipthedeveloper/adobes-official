import { CSSProperties, useEffect, useState } from "react";
import FormFeedback from "./FormFeedback";
import styled from "styled-components";
import classNames from "classnames";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Switch } from "@/components/ui/switch";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type CheckboxItem = {
  id: string;
  value: string;
};

type RadioItem = {
  id: string;
  value: any;
  label: string;
};

interface FormInputProps {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  onChange: any;
  onBlur: any;
  value: any;
  validation: any;
  options?: string[];
  disabled?: boolean;
  className?: string;
  min?: any;
  max?: any;
  defaultValue?: any;
  accept?: string;
  inputRef?: any;
  hidden?: boolean;
  handleFileChange?: any;
  lightMode?: boolean;
  description?: string;
  checkboxItems?: CheckboxItem[];
  noLabel?: boolean;
  inputStyle?: CSSProperties;
  radioOptions?: RadioItem[];
}

interface DetachableInputProps {
  id: string;
  onRemove: (id: string) => void;
  onChangeValue: (id: string, value: string) => void;
  value: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

const FormInput = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  placeholder,
  name,
  validation,
  options,
  disabled,
  className,
  min,
  max,
  defaultValue,
  accept,
  hidden,
  inputRef,
  handleFileChange,
  lightMode = false,
  description,
  checkboxItems,
  noLabel,
  inputStyle,
  radioOptions,
}: FormInputProps) => {
  if (type === "file" && !handleFileChange)
    throw Error("File Change Handler Required For File Input");

  if (type === "checkbox" && !checkboxItems)
    throw Error("Checkbox items required for checkbox input");

  if (type === "radio-group" && !radioOptions)
    throw Error("Radio options required for radio group");

  if (type === "text") {
    return (
      <div className="mb-4 w-full">
        <label
          htmlFor={name}
          className={classNames("block text-sm font-medium neue-regular", {
            "text-black": lightMode,
            "text-white": !lightMode,
          })}
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          className={classNames(
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none font-medium bg-[var(--input-bg)] cursor-pointer",
            className,
            {
              "text-gray-300": !lightMode,
              "text-gray-800": lightMode,
              "border-[lightgray]": lightMode,
              card: !lightMode,
              "border-[#1c1c1c]": !lightMode,
            }
          )}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "phone-number") {
    return (
      <div className="mb-4 w-full">
        <label
          htmlFor={name}
          className={classNames("block text-sm font-medium neue-regular", {
            "text-black": lightMode,
            "text-white": !lightMode,
          })}
        >
          {label}
        </label>

        <PhoneInput
          country={"us"}
          value={value}
          onChange={(value) => validation.setFieldValue(name, value)}
          disabled={disabled}
          inputClass={classNames(
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none font-medium bg-[var(--input-bg)] cursor-pointer",
            className,
            {
              "text-gray-300": !lightMode,
              "text-gray-800": lightMode,
              "border-[lightgray]": lightMode,
              card: !lightMode,
              "border-[#1c1c1c]": !lightMode,
            }
          )}
          dropdownStyle={{
            padding: "12px",
            height: "auto",
            borderColor: lightMode ? "lightgray" : "#1c1c1c",
          }}
          dropdownClass={classNames(
            "border rounded-md px-4 py-3 text-xs outline-none font-medium bg-[var(--input-bg)] custom-scrollbar",
            {
              "text-gray-300": !lightMode,
              "text-gray-800": lightMode,
              "border-[lightgray]": lightMode,
              card: !lightMode,
              "border-[#1c1c1c]": !lightMode,
            }
          )}
          inputStyle={{
            padding: "12px 16px 12px 48px",
            fontSize: "12px",
            lineHeight: "16px",
            width: "100%",
            height: "auto",
            borderColor: lightMode ? "lightgray" : "#1c1c1c",
          }}
          containerStyle={{
            marginTop: "8px",
          }}
          buttonClass={classNames({
            "text-gray-300": !lightMode,
            "text-gray-800": lightMode,
            "border-[lightgray]": lightMode,
            card: !lightMode,
            "border-[#1c1c1c]": !lightMode,
          })}
          buttonStyle={{
            borderColor: lightMode ? "lightgray" : "#1c1c1c",
          }}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="mb-4 w-full">
        {noLabel || (
          <label
            htmlFor={name}
            className={classNames("block text-sm font-medium neue-regular", {
              "text-black": lightMode,
              "text-white": !lightMode,
            })}
          >
            {label}
          </label>
        )}

        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          style={inputStyle}
          className={classNames(
            className,
            "block border rounded-md px-4 py-3 text-xs mt-2 w-full outline-none  font-medium bg-[var(--input-bg)] resize-y min-h-32 cursor-pointer",
            {
              "text-gray-300": !lightMode,
              "text-gray-800": lightMode,
              "border-[lightgray]": lightMode,
              card: !lightMode,
              "border-[#1c1c1c]": !lightMode,
            }
          )}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <CheckboxInput
        {...{
          type,
          label,
          onChange,
          onBlur,
          value,
          placeholder,
          name,
          validation,
          disabled,
          className,
          checkboxItems,
          description,
          inputStyle,
          noLabel,
          lightMode,
        }}
      />
    );
  }

  if (type === "select") {
    return (
      <div className="mb-4 w-full">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
        <div className="relative flex items-center w-full">
          <SelectInput
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            className={classNames(
              "block border rounded-md px-4 py-3 text-xs mt-2 w-full outline-none font-medium bg-[var(--input-bg)] cursor-pointer relative",
              className,
              {
                "text-gray-300": !lightMode,
                "text-gray-800": lightMode,
                "border-[lightgray]": lightMode,
                card: !lightMode,
                "border-[#1c1c1c]": !lightMode,
              }
            )}
          >
            <option value={""}>{placeholder}</option>
            {options &&
              options.map((opt) => (
                <option value={opt} className="px-4 py-2">
                  {opt.toUpperCase()}
                </option>
              ))}
          </SelectInput>

          <i className="fi fi-sr-caret-down absolute right-2 top-5 z-100"></i>
        </div>
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "chad-select") {
    return (
      <div className="mb-4 w-full">
        <label
          htmlFor={name}
          className={classNames("block text-sm font-medium neue-regular", {
            "text-black": lightMode,
            "text-white": !lightMode,
          })}
        >
          {label}
        </label>
        <div className="relative flex items-center w-full mt-2">
          <Select
            onValueChange={(newValue: string) =>
              validation.setFieldValue(name, newValue)
            }
            defaultValue={defaultValue}
          >
            <CustomSelectTrigger
              className={classNames("w-full border", {
                "text-gray-300": !lightMode,
                "text-gray-800": lightMode,
                "border-[lightgray]": lightMode,
                card: !lightMode,
                "border-[#1c1c1c]": !lightMode,
              })}
              style={{
                borderColor: lightMode ? "lightgray" : "#1c1c1c",
                outline: "none",
                boxShadow: "none",
              }}
            >
              <SelectValue placeholder={placeholder} />
            </CustomSelectTrigger>
            <SelectContent
              className={classNames("z-[100000010]", {
                "bg-white": lightMode,
                "text-gray-300": !lightMode,
                "text-gray-800": lightMode,
                "border-[lightgray]": lightMode,
                card: !lightMode,
                "border-[#1c1c1c]": !lightMode,
              })}
            >
              {options &&
                options.map((opt) => (
                  <SelectItem
                    value={opt}
                    className={classNames("px-4 py-2 cursor-pointer", {
                      "text-[lightgray]": !lightMode,
                      "text-gray-800": lightMode,
                    })}
                    aria-roledescription="button"
                    aria-role="button"
                  >
                    <span className="ml-3 text-xs">
                      {opt[0].toUpperCase()}
                      {opt.slice(1)}
                    </span>
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "password") {
    return (
      <PasswordInput
        {...{
          type,
          label,
          onChange,
          onBlur,
          value,
          placeholder,
          name,
          validation,
          disabled,
          className,
        }}
      />
    );
  }

  if (type === "date") {
    return (
      <div className="mb-4 w-full">
        <label
          htmlFor={name}
          className={classNames("block text-sm font-medium neue-regular", {
            "text-black": lightMode,
            "text-white": !lightMode,
          })}
        >
          {label}
        </label>
        <DatePicker
          value={dayjs(value)}
          onChange={(newValue: any) => {
            validation.setFieldValue(name, newValue.toISOString());
          }}
          onClose={onBlur}
          name={name}
          disabled={disabled}
          minDate={dayjs(min)}
          maxDate={dayjs(max)}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "switch") {
    return (
      <div className="mb-4 w-full flex items-center">
        <Switch
          checked={value}
          onCheckedChange={(value: boolean) =>
            validation.setFieldValue("isDeactivated", value)
          }
        />
        <label htmlFor={name} className="text-sm font-medium text-white ml-2">
          {label}
        </label>

        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "multiple-input") {
    return (
      <MultipleInput
        {...{
          type,
          label,
          onChange,
          onBlur,
          value,
          placeholder,
          name,
          validation,
          disabled,
          className,
          min,
          max,
          defaultValue,
        }}
      />
    );
  }

  if (type === "file") {
    return (
      <div className="mb-4 w-full">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={handleFileChange}
          disabled={disabled}
          className={classNames(
            "border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer",
            className,
            { block: !hidden }
          )}
          min={min}
          max={max}
          hidden={hidden}
          ref={inputRef}
          accept={accept}
        />
        <button
          type="button"
          className={classNames(
            "border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer flex items-center gap-2",
            className
          )}
          onClick={() =>
            inputRef && inputRef.current && inputRef.current.click()
          }
        >
          <i className="fi fi-rr-images flex text-white"></i>
          <span className="neue-regular">Choose File</span>
        </button>
        <p className="text-gray-400 neue-regular text-xs mt-2">
          {value ? `Chosen file: ${value}` : "No file chosen"}
        </p>
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "radio-group") {
    return (
      <RadioInput
        {...{
          type,
          label,
          onChange,
          onBlur,
          value,
          placeholder,
          name,
          validation,
          disabled,
          className,
          checkboxItems,
          description,
          inputStyle,
          noLabel,
          lightMode,
          radioOptions,
        }}
      />
    );
  }

  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        className={classNames(
          "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer",
          className
        )}
        min={min}
        max={max}
      />
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

type RadioProps = {
  item: RadioItem;
  lightMode?: boolean;
};

const CustomRadio = ({ item, lightMode = false }: RadioProps) => {
  return (
    <div className={classNames("flex items-center mt-2 gap-3")}>
      <RadioGroupItem
        id={item.id}
        value={item.value}
        className={classNames({
          "border-[lightgray]": lightMode,
          "border-[#1c1c1c]": !lightMode,
          "text-gray-300": !lightMode,
        })}
      />
      <label
        className={classNames("text-xs font-normal cursor-pointer", {
          "text-gray-300": !lightMode,
          "text-gray-800": lightMode,
        })}
        htmlFor={item.id}
      >
        {item.label}
      </label>
    </div>
  );
};

const RadioInput = ({
  label,
  value,
  radioOptions,
  name,
  validation,
  lightMode,
  defaultValue,
}: FormInputProps) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className={classNames("block text-[1rem] mb-2 font-medium", {
          "text-black": lightMode,
          "text-white": !lightMode,
        })}
      >
        {label}
      </label>
      <RadioGroup
        defaultValue={defaultValue}
        className="flex flex-col"
        onValueChange={(value) => validation.setFieldValue(name, value)}
      >
        {radioOptions?.map((item) => (
          <CustomRadio key={item.id} item={item} lightMode={lightMode} />
        ))}
      </RadioGroup>
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

type CheckboxProps = {
  item: CheckboxItem;
  name: string;
  values: string[];
  handleCheckedChange: (name: string, values: string[]) => void;
  hidden: boolean;
  lightMode: boolean;
};

const CustomCheckbox = ({
  item,
  name,
  values,
  handleCheckedChange,
  hidden,
  lightMode,
}: CheckboxProps) => {
  return (
    <div
      className={classNames("flex items-center mt-2 gap-3", { hidden: hidden })}
    >
      <Checkbox
        checked={values.includes(item.value)}
        name={item.id}
        id={item.id}
        onCheckedChange={(checked) => {
          return checked
            ? handleCheckedChange(name, [...values, item.value])
            : handleCheckedChange(
                name,
                values.filter((value: string) => value !== item.value)
              );
        }}
        className={classNames({
          "border-[lightgray]": lightMode,
          "border-[#1c1c1c]": !lightMode,
        })}
      />
      <label
        className={classNames("text-xs font-normal cursor-pointer", {
          "text-gray-300": !lightMode,
          "text-gray-800": lightMode,
        })}
        htmlFor={item.id}
      >
        {item.value}
      </label>
    </div>
  );
};

const CheckboxInput = ({
  label,
  description,
  value,
  checkboxItems,
  name,
  validation,
  lightMode = false,
}: FormInputProps) => {
  const shouldHide = value.includes("Others (please specify)");
  const validItemsList = checkboxItems?.map((goal) => goal.value) || [];
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className={classNames("block text-[1rem] mb-4 font-medium", {
          "text-black": lightMode,
          "text-white": !lightMode,
        })}
      >
        {label}
      </label>
      {description && (
        <p
          className={classNames("block text-xs font-normal", {
            "text-black": lightMode,
            "text-white": !lightMode,
          })}
        >
          {description}
        </p>
      )}
      {checkboxItems?.map((item) => (
        <CustomCheckbox
          key={item.id}
          item={item}
          values={value}
          name={name}
          lightMode={lightMode}
          handleCheckedChange={(name: string, value: string[]) => {
            if (value.includes("Others (please specify)")) {
              validation.setFieldValue(name, ["Others (please specify)"]);
            } else {
              const validValues = value.filter((val) =>
                validItemsList.includes(val)
              );
              validation.setFieldValue(name, validValues);
            }
          }}
          hidden={shouldHide && item.value !== "Others (please specify)"}
        />
      ))}
      {shouldHide && (
        <FormInput
          name={name}
          noLabel={true}
          onBlur={validation.handleBlur}
          onChange={(e: any) =>
            validation.setFieldValue(name, [
              "Others (please specify)",
              e.target.value,
            ])
          }
          type="textarea"
          validation={validation}
          value={value[1]}
          className="neue-regular text-gray-300 min-h-20"
          inputStyle={{ minHeight: "80px" }}
          lightMode={lightMode}
          placeholder={"Enter text here..."}
        />
      )}
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

const PasswordInput = ({
  label,
  name,
  onBlur,
  onChange,
  value,
  type,
  placeholder,
  validation,
  disabled,
  className,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative flex items-center w-full">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          className={classNames(
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer",
            className
          )}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="absolute right-2 top-5"
        >
          {showPassword ? (
            <i className="fi fi-sr-eye flex text-white"></i>
          ) : (
            <i className="fi fi-sr-eye-crossed flex text-white"></i>
          )}
        </button>
      </div>
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

type DetachableInputType = {
  id: string;
  value: string;
};

const MultipleInput = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  placeholder,
  name,
  validation,
  disabled,
  className,
  min,
  max,
  defaultValue,
}: FormInputProps) => {
  const [inputs, setInputs] = useState<DetachableInputType[]>([]);

  const onChangeValue = (id: string, value: string) => {
    const updatedInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value };
      }
      return input;
    });
    setInputs(updatedInputs);
  };

  const onRemove = (id: string) => {
    const updatedInputs = inputs.filter((input) => input.id !== id);
    setInputs(updatedInputs);
  };

  const addNewDetachableInput = () => {
    const newId = uuidv4();
    const newInput = { id: newId, value: "" };
    setInputs([...inputs, newInput]);
  };

  useEffect(() => {
    const values = inputs
      .map((inputData) => inputData.value)
      .filter((value) => value !== "");
    validation.setFieldValue(name, values);
  }, [inputs]);

  useEffect(() => {
    addNewDetachableInput();
  }, []);

  useEffect(() => {
    if (defaultValue && Array.isArray(defaultValue)) {
      const requirementsData = defaultValue.map((requirement: string) => ({
        id: uuidv4(),
        value: requirement,
      }));
      setInputs(requirementsData);
    }
  }, []);

  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between items-center">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
        <button
          className={`w-8 h-8 rounded-md transparent-white grid place-items-center cursor-pointer hover:bg-gray-700 transition-all`}
          type="button"
          onClick={addNewDetachableInput}
        >
          {/* <i className={`text-white flex fi fi-rr-layer-plus text-xl`}></i> */}
          <i className={`text-white flex fi fi-rr-plus-small text-[1rem]`}></i>
        </button>
      </div>
      {inputs && inputs.length > 0 && (
        <div className="mt-2">
          <div className="flex flex-col gap-2">
            {inputs.map((inputData, index) => (
              <DetachableInput
                id={inputData.id}
                onChangeValue={onChangeValue}
                onRemove={onRemove}
                disabled={disabled}
                value={inputData.value}
                placeholder={placeholder}
              />
            ))}
          </div>
        </div>
      )}
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

const DetachableInput = ({
  value,
  disabled,
  className,
  onChangeValue,
  onRemove,
  id,
  placeholder,
}: DetachableInputProps) => {
  return (
    <div className="flex gap-2 md:gap-3 items-center mt-2">
      <button
        className={`w-8 h-8 rounded-md transparent-white grid place-items-center cursor-pointer hover:bg-gray-700 transition-all`}
        type={"button"}
        onClick={() => onRemove(id)}
      >
        {/* <i className={`text-white flex fi fi-rr-layer-minus text-sm`}></i> */}
        <i className={`text-white flex fi fi-rr-minus-small text-sm`}></i>
      </button>
      <input
        type={"text"}
        value={value}
        onChange={(e) => onChangeValue(id, e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(
          "block border-[1px] rounded-md px-4 py-3 text-xs w-full outline-none border-[lightgray] text-gray-300 font-medium bg-[var(--input-bg)] cursor-pointer neue-regular",
          className
        )}
      />
    </div>
  );
};

const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const CustomSelectTrigger = styled(SelectTrigger)`
  &.focus {
    outline: none !important;
    border: 1px solid lightgray;
    box-shadow: none;
  }

  &::focus {
    outline: none !important;
    border: 1px solid lightgray;
    box-shadow: none;
  }

  span {
    margin-left: 0px;
  }
`;

export default FormInput;
