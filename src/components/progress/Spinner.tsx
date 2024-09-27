import plainSpinner from "../../assets/images/spinner.gif";
import brandSpinner from "../../assets/images/brand-spinner.gif";

export type SpinnerType = "plain" | "brand";

interface SpinnerProps {
  classNames?: string;
  type: SpinnerType;
}

const spinnerMap: Record<SpinnerType, string> = {
  plain: plainSpinner,
  brand: brandSpinner,
};

export const Spinner = ({ classNames, type = "brand" }: SpinnerProps) => {
  return (
    <div
      className={`mx-2 max-h-[150px] inline-block my-auto ${
        classNames ? classNames : "h-6"
      }`}
    >
      <img src={spinnerMap[type]} className="h-full" />
    </div>
  );
};
