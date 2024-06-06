import { useState } from "react";
import { AlertColor } from "@mui/material";

const useAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor | undefined>();
  const [alertMessage, setAlertMessage] = useState<string | undefined>();

  const showAlertComponent = (show: boolean, type?: AlertColor, message?: string) => {
    setShowAlert(show);
    setAlertType(type);
    setAlertMessage(message);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return { showAlert, alertType, alertMessage, showAlertComponent };
}

export default useAlert;