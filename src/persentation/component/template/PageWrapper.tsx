"use client"
import { ReactNode } from "react";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PageWrapper = (props: { title: string, children: ReactNode }) => {
  const theme = useTheme();
  return (
    <Box component={"main"}>
      <Typography variant="h2" >
        {props.title}
      </Typography>
      <Box sx={{
        mt: "30px",
        borderRadius: "12px",
        overflow: "hidden",
        bgcolor: "white",
        height: 300,
        width: '100%',
        boxShadow: theme.customShadows.card
      }}>
        {props.children}
      </Box>
    </Box>
  );
}

export default PageWrapper;