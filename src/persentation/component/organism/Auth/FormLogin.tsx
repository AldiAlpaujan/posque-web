"use client"

// Next & React
import Link from "next/link";
import { ChangeEvent } from "react";

// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

// third party
import { useFormik } from "formik";
import * as yup from "yup";

// component
import AppTextField from "../../atom/AppTextField";
import AppButton from "../../atom/AppButton";
import AuthFirebaseSocial from "../../molecule/AuthFirebaseSocial";

export interface FormLoginModel {
  email: string;
  password: string;
}

interface FormLoginProps {
  isLoading: boolean;
  onSubmit: (v: FormLoginModel) => void;
}

const FormLogin = (props: FormLoginProps) => {
  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').max(255).email('Must be a valid email'),
    password: yup.string().required('Password is required').min(5, 'Password must be more than 5 letters'),
  });

  const formik = useFormik<FormLoginModel>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: props.onSubmit,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  }


  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
    >
      <AppTextField
        id='email-login'
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter email address"
        value={formik.values.email}
        onChange={handleOnChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ pb: '24px' }}
        required
      />
      <AppTextField
        id='pw-login'
        name="password"
        type="password"
        label="Password"
        placeholder="Enter password"
        value={formik.values.password}
        onChange={handleOnChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.password && formik.errors.password}
        sx={{ pb: '14px' }}
        required
      />
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ pb: '14px' }}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Keep me sign in" />
        <Link href={'/forgot-password'} style={{ color: '#262626', textDecoration: 'none' }}>
          <Typography sx={{ '&:hover': { textDecoration: 'underline' } }}>
            Forgot password?
          </Typography>
        </Link>
      </Stack>
      <AppButton fullWidth loading={props.isLoading} type="submit">
        Login
      </AppButton>
      <Divider sx={{ mb: "24px" }}>
        <Typography variant="caption">Login with</Typography>
      </Divider>
      <AuthFirebaseSocial />
    </Box>
  );
}


export default FormLogin;