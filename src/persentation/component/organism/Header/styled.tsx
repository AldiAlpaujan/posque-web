import { styled, Theme } from "@mui/material/styles";
import AppBar, { AppBarProps } from "@mui/material/AppBar/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";

interface AppBarStyledProps extends AppBarProps {
  theme: Theme;
}

interface ToolbarStyledProps extends ToolbarProps {
  theme: Theme;
  ml: number;
  open: boolean;
}

const AppBarStyled = styled(AppBar)<AppBarStyledProps>(({ theme }) => ({
  left: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'white',
}));

const ToolbarStyled = styled(Toolbar)<ToolbarStyledProps>(({ theme, ml }) => ({
  left: 0,
  color: 'black',
  display: 'flex',
  justifyContent: "space-between",
  alignItems: 'center',
  backgroundColor: 'white',
  marginLeft: `${ml}px`,
  paddingRight: '24px',
  paddingLeft: '24px',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export { AppBarStyled, ToolbarStyled }