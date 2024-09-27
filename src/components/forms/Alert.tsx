import { PropsWithChildren } from "react";

interface AlertProps extends PropsWithChildren {
  type: "danger" | "info" | "success";
  className?: string;
}

const classes = {
  danger: "border-red-600 bg-red-200 text-red-700",
  info: "border-blue-600 bg-blue-200 text-blue-700",
  success: "border-green-600 bg-green-200 text-green-700",
};

const Alert = ({ type, children, className }: AlertProps) => {
  return (
    <div
      className={`w-full max-w-80 border-[1px] rounded-md p-3 ${classes[type]} ${className}`}
    >
      <p className="text-xs font-medium">{children}</p>
    </div>
  );
};

export default Alert;
