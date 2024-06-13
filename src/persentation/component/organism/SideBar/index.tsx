/* eslint-disable react-hooks/exhaustive-deps */
// next & react
import { use, useContext, useEffect } from "react";

// MUI
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// states
import { SideBarOpenContext } from "@/core/states/SideBarOpenContext";

// component
import DrawerStyled from "./styled";

const SideBar = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const { open, width, setOpen, setWidth } = useContext(SideBarOpenContext)!;

  useEffect(() => {
    if (!matchDownMD) {
      setWidth(250);
    }
  }, []);

  return (
    <DrawerStyled
      open={matchDownMD ? open : true}
      theme={theme}
      width={matchDownMD ? matchDownSM ? "70%" : 250 : width}
      onClose={() => setOpen(false, false)}
      variant={matchDownMD ? "temporary" : "persistent"}>
      Hello
    </DrawerStyled>
  );
}

export default SideBar;