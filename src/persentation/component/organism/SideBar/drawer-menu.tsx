import { ReactNode } from "react";

import {
  CustomerServiceOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ProductOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Groups2Outlined } from "@mui/icons-material";

interface DrawerMenuType {
  id: number;
  group: number;
  groupName?: string;
  name: string;
  route: string | null;
  icon: ReactNode
}

const drawerMenu: DrawerMenuType[] = [
  {
    id: 1,
    group: 0,
    groupName: undefined,
    name: "Dashboard",
    icon: <DashboardOutlined style={{ fontSize: '16px', }} />,
    route: "/app/dashboard"
  },
  // Master Menu
  {
    id: 2,
    group: 1,
    groupName: 'Master',
    name: "Produk",
    icon: <ProductOutlined style={{ fontSize: '16px', }} />,
    route: "/app/products"
  },
  {
    id: 3,
    group: 1,
    groupName: 'Master',
    name: "Pelanggan",
    icon: <CustomerServiceOutlined style={{ fontSize: '16px', }} />,
    route: "/app/customers"
  },
  {
    id: 4,
    group: 1,
    groupName: 'Master',
    name: "Karyawan",
    icon: <UserOutlined style={{ fontSize: '16px', }} />,
    route: "/app/employees"
  },
  // Setting Menu
  {
    id: 5,
    group: 2,
    groupName: 'Pengaturan',
    name: "Profile",
    icon: <Groups2Outlined style={{ fontSize: '18px', }} />,
    route: "/app/profile"
  },
  {
    id: 6,
    group: 2,
    groupName: 'Pengaturan',
    name: "Profile",
    icon: <LogoutOutlined style={{ fontSize: '16px', }} />,
    route: null
  },
];

export default drawerMenu;