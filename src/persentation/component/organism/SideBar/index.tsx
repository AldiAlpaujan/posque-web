// next & react
import { useContext } from "react";

// MUI
import { useTheme } from "@mui/material/styles";

// states
import { SideBarOpenContext } from "@/core/states/SideBarOpenContext";

// component
import DrawerStyled from "./styled";

const SideBar = () => {
  const theme = useTheme();
  const { width } = useContext(SideBarOpenContext)!;

  return (
    <DrawerStyled open theme={theme} width={width} variant="persistent">
      This Side Bar
    </DrawerStyled>
  );
}

export default SideBar;