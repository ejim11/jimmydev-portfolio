import { toast, Bounce } from "react-toastify";

export const toastError = (msg: string, icon: any) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    style: { color: "red" },
    progressStyle: { background: "red" },
    icon: icon,
  });
};

export const toastSuccess = (msg: string, icon: any) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    style: { color: "rgb(30, 129, 176)" },
    progressStyle: { background: "rgb(30, 129, 176)" },
    icon: icon,
  });
};
