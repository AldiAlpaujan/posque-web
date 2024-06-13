// MUI
import { Drawer, DrawerProps } from "@mui/material";

// component
import styled from "@mui/material/styles/styled";

interface StyledProps extends DrawerProps {
  width: number | string,
}

const DrawerStyled = styled(Drawer)<StyledProps>(({ theme, width }) => ({
  width: width,
  '& .MuiDrawer-paper': {
    width: width,
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxSizing: 'border-box',
  },
}));

export default DrawerStyled;