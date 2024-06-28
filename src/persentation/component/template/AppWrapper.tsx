"use client"
import { ReactNode } from "react";

import { Box } from "@mui/material";

import { SessionProvider } from "next-auth/react";

import Header from "../organism/Header";
import SideBar from "../organism/SideBar";
import SideBarOpenContextProvider from "@/core/states/SideBarOpenContext";

const AppWrapper = (props: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <SideBarOpenContextProvider>
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box width={1}>
            <Header />
            <Box sx={{ mt: "80px", mx: '50px', bgcolor: "#FAFAFB" }}>
              {props.children}
            </Box>
          </Box>
        </Box>
      </SideBarOpenContextProvider>
    </SessionProvider>
  );
}

export default AppWrapper;