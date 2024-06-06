"use client"
// Next
import { ChangeEvent, useEffect, useState } from "react";

// MUI
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material";

// MUI Icons
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

// Utils
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

interface AppTextFieldProps extends Omit<TextFieldProps, 'onChanged'> {
  labelStyle?: SxProps<Theme>,
  textFieldStyle?: SxProps<Theme>,
  onValueChanged?: (value: string) => void,
}


const AppTextField = (props: AppTextFieldProps) => {
  const [pwType, setPwType] = useState('password');
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const {
    id,
    name,
    label,
    placeholder,
    type,
    helperText,
    sx,
    value,
    onChange,
    onBlur,
  } = props;



  const HandleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    setPwType(showPassword ? 'text' : 'password');
  }, [showPassword]);

  useEffect(() => {
    setShowPassword(type !== 'password');
  }, [type]);

  return (
    <Stack direction={"column"} sx={sx}>
      {label && <InputLabel htmlFor={id} sx={props.labelStyle || { pb: "8px" }}>{label}</InputLabel>}
      <TextField
        fullWidth
        id={id}
        name={name}
        placeholder={placeholder}
        type={type === 'password' ? pwType : type}
        sx={{ ...props.textFieldStyle }}
        FormHelperTextProps={{ sx: { mx: '3px', mt: '6px' } }}
        value={value}
        error={helperText != null}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
        InputProps={type === "password" ? {
          endAdornment:
            <InputAdornment position='end' >
              <IconButton
                aria-label='toggle password visibility'
                onClick={HandleClickShowPassword}>
                {showPassword ? (<VisibilityOutlinedIcon />) : (<VisibilityOffOutlinedIcon />)}
              </IconButton>
            </InputAdornment>,
          sx: {
            "& .MuiInputAdornment-positionEnd": {
              marginRight: '-10px'
            }
          }
        } : {}}
      />
    </Stack>
  );
}

export default AppTextField;
