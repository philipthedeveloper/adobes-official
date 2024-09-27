import React, { PropsWithChildren } from "react";

interface FeedbackProps extends PropsWithChildren {
  type: string;
}

const FormFeedback = ({ children }: FeedbackProps) => {
  return (
    <div className="w-full mt-1 text-xs text-[var(--feedback-color)] font-medium">
      {children}
    </div>
  );
};
export default FormFeedback;
