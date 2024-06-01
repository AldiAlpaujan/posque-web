"use client"

// Next
import Link from "next/link";
import { useState } from "react";

// MUI
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import AuthWrapper from "@/persentation/component/template/AuthWrapper";
import FormLogin, { FormLoginModel } from "@/persentation/component/organism/Auth/FormLogin";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (value: FormLoginModel) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h3">
              Login
            </Typography>
            <Link href={'/register'} style={{ textDecoration: "none" }}>
              <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
                Don&apos;t have an account?
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormLogin isLoading={isLoading} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default LoginView;