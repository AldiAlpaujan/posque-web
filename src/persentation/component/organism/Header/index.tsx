"use client"

// next & react
import { useContext } from "react";

// MUI
import { Box, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';

// states
import HeaderProfile from "./profile/HeaderProfile";
import { SideBarOpenContext } from "@/core/states/SideBarOpenContext";
import { AppBarStyled, ToolbarStyled } from "./styled";

const Header = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const { open, width, setOpen } = useContext(SideBarOpenContext)!;

  return (
    <AppBarStyled theme={theme} position="fixed" elevation={0} >
      <ToolbarStyled theme={theme} ml={matchDownMD ? 0 : width} open={open}>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{ mr: 2, bgcolor: 'secondary.200' }}
          >
            {open ? (<MenuFoldOutlined />) : (<MenuUnfoldOutlined />)}
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