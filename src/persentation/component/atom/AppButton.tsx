"use client"
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

interface AppBtnProps extends LoadingButtonProps {
}

const AppButton: React.FC<AppBtnProps> = ({ ...props }) => {
  return (
    <LoadingButton
      {...props}
      variant="contained"
      sx={{
        fontSize: '14px',
        fontWeight: '500',
        py: '9px',
        mb: '24px',
        '& .MuiCircularProgress-root': {
          color: 'white',
        },
        '&:disabled': {
          backgroundColor: props.loading ? 'primary.main' : null,
        },
      }}

    >
      {props.children}
    </LoadingButton>
  );
}

export default AppButton;