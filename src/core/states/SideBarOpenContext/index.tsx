import { createContext, ReactNode, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

interface ProviderValue {
  open: boolean,
  width: number,
  setOpen: (value: boolean, withSetWidth?: boolean) => void,
  setWidth: (value: number) => void,
}

const SideBarOpenContext = createContext<ProviderValue | null>(null);
const SideBarOpenContextProvider = (props: { children: ReactNode }) => {
  const theme = useTheme();
  const [open, _setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(250);

  const setOpen = (value: boolean, withSetWidth: boolean = true) => {
    if (withSetWidth) {
      if (!value) {
        setWidth(0);
        setTimeout(() => {
          _setOpen(false);
        }, theme.transitions.duration.leavingScreen);
      } else {
        _setOpen(true);
        setTimeout(() => {
          setWidth(250);
        }, 10);
      }
    } else {
      _setOpen(value);
    }
  }

  return (
    <SideBarOpenContext.Provider value={{ open, width, setOpen, setWidth }}>
      {props.children}
    </SideBarOpenContext.Provider>
  );
}

export { SideBarOpenContext }
export default SideBarOpenContextProvider;