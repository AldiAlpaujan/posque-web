// next & react
import { useState } from "react";

// MUI
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// ant-design
import { EditOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

// third party
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "@mui/material/styles";

const HeaderProfileCard = () => {
  return (
    <Box pt={'24px'}>
      <Header />
      <Divider sx={{ mt: '16px' }} />
      <Menu />
    </Box>
  );
}

const Header = () => {
  const { data } = useSession();
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} pl={'20px'} pr={'12px'}>
      <Stack direction={"row"} alignContent={"center"}>
        <Avatar src={data?.user?.image!} sx={{ mr: '12px' }} />
        <Stack>
          <Typography variant="subtitle1">
            {data?.user?.firstName!}
          </Typography>
          <Typography variant="body1" color={"secondary"}>
            {data?.user?.email!}
          </Typography>
        </Stack>
      </Stack>
      <IconButton onClick={() => signOut()}>
        <LogoutOutlined style={{ fontSize: '18px' }} />
      </IconButton>
    </Stack>
  );
}

const Menu = () => {
  const theme = useTheme();
  const [activeMenu, setActiveMenu] = useState<number | undefined>();

  const menus = [
    {
      id: 1,
      icon: <EditOutlined style={{ fontSize: '18px' }} />,
      label: "Edit Profile",
      route: "/app/dashboard",
    },
    {
      id: 2,
      icon: <UserOutlined style={{ fontSize: '18px' }} />,
      label: "View Profile",
      route: "/app/dashboard",
    },
    {
      id: 3,
      icon: <LogoutOutlined style={{ fontSize: '18px' }} />,
      label: "Logout",
    },
  ];

  const handleOnClick = (id: number) => {
    setActiveMenu(id);
    if (id === 3) {
      signOut();
    }
  }

  return (
    <List disablePadding>
      {menus.map((item) => {
        const isActive = item.id === activeMenu;
        const color = isActive ? 'primary.main' : null;
        const bgColor = isActive ? 'primary.lighter' : null;
        return (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => handleOnClick(item.id)} sx={{ bgcolor: bgColor, py: '8px', display: 'flex', alignItems: "center" }}>
              <ListItemIcon sx={{ height: "18px", width: "18px", mr: '8px', color: color }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: color }} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default HeaderProfileCard;