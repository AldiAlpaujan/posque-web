// next & react
import { useContext } from "react";

// MUI
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from '@mui/icons-material/Menu';


// states
import { SideBarOpenContext } from "@/core/states/SideBarOpenContext";

const Header = () => {
  const theme = useTheme();
  const { open, width, setOpen } = useContext(SideBarOpenContext)!;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'white',
      }}>
      <Toolbar
        sx={{
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          color: 'black',
          backgroundColor: 'white',
          marginLeft: `${width}px`,
        }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;