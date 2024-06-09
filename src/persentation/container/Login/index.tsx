"use client"

// Next & React
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// MUI
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

// hrid party
import { signIn } from "next-auth/react";

// components
import AuthWrapper from "@/persentation/component/template/AuthWrapper";
import FormLogin, { FormLoginModel } from "@/persentation/component/organism/Auth/FormLogin";

// hooks
import useAlert from "@/core/hooks/useAlert";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert, alertType, alertMessage, showAlertComponent } = useAlert();
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = async (value: FormLoginModel, resetForm: () => void) => {
    try {
      const callBackUrl = searchParams.get('callbackUrl') || '/';

      setIsLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: value.email,
        password: value.password,
        callBackUrl
      });
      setIsLoading(false);

      if (result?.error) {
        showAlertComponent(true, "error", result.error);
      } else {
        resetForm();
        push(callBackUrl);
      }
    } catch (error) {
      setIsLoading(false);
      showAlertComponent(true, "error", error as string);
    }
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
          {
            showAlert &&
            <Alert severity={alertType} sx={{ mb: '20px' }} >
              {alertMessage}
            </Alert>
          }
          <FormLogin isLoading={isLoading} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default LoginView;