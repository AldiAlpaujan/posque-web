"use client"
/* eslint-disable react-hooks/exhaustive-deps */
// next & react
import { useContext, useEffect, useState } from "react";

// MUI
import { useTheme } from "@mui/material/styles";

// states
import { SideBarOpenContext } from "@/core/states/SideBarOpenContext";

// component
import DrawerStyled from "./styled";

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import AppLogo from "../../atom/AppLogo";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import drawerMenu from "./drawer-menu";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Theme } from "@mui/material/styles/createTheme";

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
      <Header />
      <DrawerMenu />
    </DrawerStyled>
  );
}

const Header = () => {
  return (
    <Box component={"div"} width={1} py="14px" px="20px">
      <AppLogo />
    </Box>
  );
}

const DrawerMenu = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const { setOpen } = useContext(SideBarOpenContext)!;
  const { push } = useRouter();
  const pathname = usePathname();
  const arrayGroup = drawerMenu.map((item) => item.group);
  const groups = arrayGroup.filter((item, index) => arrayGroup.indexOf(item) === index);

  const handleOnClick = async (id: number, route: string | null) => {
    setActiveMenu(id);
    if (route !== null) {
      push(route!);
    } else {
      await signOut();
    }
  }

  useEffect(() => {
    const menu = drawerMenu.find((value) => value.route == pathname);
    if (menu !== undefined && activeMenu !== menu!.id) {
      setActiveMenu(menu!.id);
    }
  }, [pathname]);

  return (
    <Box height={1} sx={{ bgcolor: "transparent" }}>
      <List disablePadding>
        {groups.map((group) => {
          const menu = drawerMenu.filter((item) => item.group === group);
          return (
            <Box key={group}>
              {menu[0].groupName && (
                <Typography variant="body2" px={'24px'} py={'12px'}>
                  {menu[0].groupName!}
                </Typography>
              )}
              {menu.map((value) => {
                const isActive = value.id === activeMenu;
                const isLogout = value.route === null;
                const color = !isLogout ? isActive ? 'primary.main' : 'secondary.dark' : "red";
                const bgColor = isActive ? !isLogout ? 'primary.lighter' : 'error.lighter' : null;
                return (
                  <ListItem key={value.id} disablePadding sx={{ bgcolor: bgColor }}>
                    <Stack direction={"row"} width={1} justifyContent={"space-between"} alignItems={"center"}>
                      <ListItemButton onClick={() => {
                        handleOnClick(value.id, value.route);
                        if (matchDownMD) setOpen(false, false);
                      }}
                        sx={{ pl: '24px' }}>
                        <ListItemIcon sx={{ width: 30, color: color }}>{value.icon}</ListItemIcon>
                        <ListItemText primary={value.name} sx={{ color: color }} />
                      </ListItemButton>
                      {isActive && (<Box height={'46px'} width={'2px'} bgcolor={color} />)}
                    </Stack>
                  </ListItem>
                );
              })}
            </Box>
          );
        })}
      </List>
    </Box>
  );
}

export default SideBar;