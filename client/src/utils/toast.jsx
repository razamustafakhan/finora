import { toast } from "react-toastify";
// import type { ToastOptions } from "react-toastify";
const defaultOptions = {
  position: "top-right",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export const showSuccessToast = (message) =>
  toast.success(message, defaultOptions);

export const showErrorToast = (message) => toast.error(message, defaultOptions);

export const showInfoToast = (message) => toast.info(message, defaultOptions);

export const showWarningToast = (message) =>
  toast.warning(message, defaultOptions);
