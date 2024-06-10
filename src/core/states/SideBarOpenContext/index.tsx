import { useTheme } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ProviderValue {
  open: boolean,
  width: number,
  setOpen: (value: boolean) => void,
  setWidth: (value: number) => void,
}

const SideBarOpenContext = createContext<ProviderValue | null>(null);
const SideBarOpenContextProvider = (props: { children: ReactNode }) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(250);

  const getWidth = (): number => {
    const bp = theme.breakpoints.values;
    const screenWidth = window.screen.width;
    let width = 250;

    if (screenWidth >= bp.xs) {
      width = screenWidth;
    } else if (screenWidth >= bp.sm) {
      width = screenWidth;
    } else if (screenWidth >= bp.md) {
      width = 250;
    } else if (screenWidth >= bp.lg) {
      width = 250;
    } else if (screenWidth >= bp.xl) {
      width = 300;
    }

    return width;
  }

  useEffect(() => {
    if (open) {
      setWidth(250);
    } else {
      setWidth(0);
    }
  }, [open]);

  return (
    <SideBarOpenContext.Provider value={{ open, width, setOpen, setWidth }}>
      {props.children}
    </SideBarOpenContext.Provider>
  );
}

export { SideBarOpenContext }
export default SideBarOpenContextProvider;