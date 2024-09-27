import { Id, toast } from "react-toastify";

const showSuccessNotification = (message: string, autoClose?: number) => {
  toast.success(message, { autoClose: autoClose });
};

const showErrorNotification = (error: string, autoClose?: number) => {
  toast.error(error, { autoClose: autoClose });
};

const showInfoNotification = (error: string, autoClose?: number) => {
  toast.info(error, { autoClose: autoClose });
};

const updateToast = (
  toastId: Id,
  render: string,
  type: "success" | "error",
  isLoading: boolean,
  autoClose: false | number
) => toast.update(toastId, { render, type, isLoading, autoClose });

const updateSuccessToast = (
  toastId: Id,
  render: string,
  autoClose: number = 2000
) => updateToast(toastId, render, "success", false, autoClose);

const updateErrorToast = (
  toastId: Id,
  render: string,
  autoClose: number = 2000
) => updateToast(toastId, render, "error", false, autoClose);

export {
  showSuccessNotification,
  showErrorNotification,
  showInfoNotification,
  updateToast,
  updateSuccessToast,
  updateErrorToast,
};
