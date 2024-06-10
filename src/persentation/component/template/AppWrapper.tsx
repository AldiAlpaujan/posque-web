import { ReactNode } from "react";

import { Box } from "@mui/material";

import Header from "../organism/Header";
import SideBar from "../organism/SideBar";
import SideBarOpenContextProvider from "@/core/states/SideBarOpenContext";

const AppWrapper = (props: { children: ReactNode }) => {
  return (
    <SideBarOpenContextProvider>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box>
          <Header />
          <Box sx={{ mt: "80px", ml: '50px' }}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </SideBarOpenContextProvider>
  );
}

export default AppWrapper;