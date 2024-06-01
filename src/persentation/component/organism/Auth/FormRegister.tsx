"use client"

// Next & React
import Link from "next/link";
import { ChangeEvent, useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// third party
import { useFormik } from "formik";
import * as yup from "yup";

// component
import AppButton from "../../atom/AppButton";
import AppTextField from "../../atom/AppTextField";

// Types / Function
import PasswordLevel from "@/core/types/password-level";
import { getStrengthPassword } from "@/core/utils/password-strength";

export interface FormRegisterModel {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  password: string;
}

interface FormRegisterProps {
  isLoading: boolean;
  onSubmit: (v: FormRegisterModel) => void;
}

const FormRegister = (props: FormRegisterProps) => {
  const [pwLevel, setPwLevel] = useState<PasswordLevel>(getStrengthPassword(''));

  const validationSchema = yup.object().shape({
    firstname: yup.string().required('First name is required').max(255),
    lastname: yup.string().required('Last name is required').max(255),
    email: yup.string().required('Email is required').max(255).email('Must be a valid email'),
    password: yup.string().required('Password is required'),
  })

  const formik = useFormik<FormRegisterModel>({
    initialValues: {
      firstname: '',
      lastname: '',
      company: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: props.onSubmit,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);

    if (target.name == 'password') {
      setPwLevel(getStrengthPassword(event.target.value));
    }
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
    >
      <Stack direction={'row'} spacing={'16px'} pb={'20px'}>
        <AppTextField
          required
          id='firstname-login'
          name="firstname"
          type="text"
          label="First Name*"
          placeholder="Enter your first name"
          value={formik.values.firstname}
          onChange={handleOnChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <AppTextField
          required
          id='lastname-login'
          name="lastname"
          type="text"
          label="Last Name*"
          placeholder="Enter your last name"
          value={formik.values.lastname}
          onChange={handleOnChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
      </Stack>

      <AppTextField
        id='company-login'
        name="company"
        type="text"
        label="Company"
        placeholder="Demo inc."
        value={formik.values.company}
        onChange={handleOnChange}
        sx={{ pb: '20px' }}
      />

      <AppTextField
        required
        id='email-login'
        name="email"
        type="email"
        label="Email Address*"
        placeholder="Enter email address"
        value={formik.values.email}
        onChange={handleOnChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ pb: '20px' }}

      />
      <AppTextField
        required
        id='pw-login'
        name="password"
        type="password"
        label="Password*"
        placeholder="Enter password"
        value={formik.values.password}
        onChange={handleOnChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.password && formik.errors.password}
        sx={{ pb: '18px' }}
      />

      <Stack direction={'row'} alignItems={'center'} pb={'24px'}>
        <Box
          width={'85px'}
          height={'8px'}
          borderRadius={'8px'}
          mr={'12px'}
          sx={{ backgroundColor: pwLevel?.color }}
        />
        <Typography variant="subtitle1" fontSize="0.75rem" >
          {pwLevel?.label}
        </Typography>
      </Stack>

      <Typography variant="body2" pb={'24px'}>
        By Signing up, you agree to our &nbsp;
        <Link href="#">
          Terms of Service
        </Link>
        &nbsp; and &nbsp;
        <Link href="#">
          Privacy Policy
        </Link>
      </Typography>

      <AppButton fullWidth loading={props.isLoading} type="submit">
        Create Account
      </AppButton>

    </Box>
  );
}

export default FormRegister;