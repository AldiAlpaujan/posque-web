// next & react
import { useContext } from "react";

// MUI
import { Box, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

// states
import HeaderProfile from "./profile/HeaderProfile";
import { SideBarOpenContext } from "@/core/states/SideBarOpenContext";
import { AppBarStyled, ToolbarStyled } from "./styled";

const Header = () => {
  const theme = useTheme();
  const { open, width, setOpen } = useContext(SideBarOpenContext)!;

  return (
    <AppBarStyled theme={theme} position="fixed" elevation={0} >
      <ToolbarStyled theme={theme} ml={width}>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box display={"flex"}>
          <HeaderProfile />
        </Box>
      </ToolbarStyled>
    </AppBarStyled>
  );
}

export default Header;