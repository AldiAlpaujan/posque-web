"use client"

// Next
import Link from "next/link";
import { useState } from "react";

// MUI
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert/Alert";

// Components
import AuthWrapper from "@/persentation/component/template/AuthWrapper";
import FormRegister, { FormRegisterModel } from "@/persentation/component/organism/Auth/FormRegister";
import axios, { AxiosError } from "axios";
import ENDPOINT from "@/infrastucture/api/endPoint";
import useAlert from "@/core/hooks/useAlert";
import { FormikState } from "formik";
import httpClient from "@/infrastucture/api/httpClient";

const RegisterView = () => {
  const { showAlert, alertType, alertMessage, showAlertComponent } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (
    value: FormRegisterModel,
    reset: () => void
  ) => {
    setIsLoading(true);
    const { data, error } = await httpClient({
      url: ENDPOINT.register,
      method: "POST",
      data: {
        firstName: value.firstname,
        lastName: value.lastname,
        company: value.company,
        email: value.email,
        password: value.password,
      },
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    });
    setIsLoading(false);

    showAlertComponent(
      true,
      data !== null ? "success" : "error",
      data !== null ? data.message : error.message,
    );

    if (data !== null) reset();
  }

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h3">
              Sign up
            </Typography>
            <Link href={'/login'} style={{ textDecoration: "none" }}>
              <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
                Already have an account?
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
          <FormRegister isLoading={isLoading} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default RegisterView;