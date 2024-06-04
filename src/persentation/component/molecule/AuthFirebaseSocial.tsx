// Next
import Image from "next/image";

// MUI
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Assets
import Google from '@/assets/images/icons/google.svg';

const AuthFirebaseSocial = () => {

  const onGoogleClick = () => { }

  return (
    <Stack direction={'row'} justifyContent={'space-between'} spacing={'14px'}>
      <SocialAuthCard
        iconSrc={Google}
        label="Google"
        onClick={onGoogleClick}
      />
    </Stack>
  );
}

const SocialAuthCard = (props: {
  iconSrc: string,
  label: string,
  onClick?: () => void,
}) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      color="secondary"
      startIcon={<Image priority src={props.iconSrc} alt={props.label} />}
      onClick={props.onClick}
      sx={{
        fontSize: '14px',
        fontWeight: '500',
        py: '9px',
        mb: '24px',
      }}
    >
      {props.label}
    </Button>
  );
}

export default AuthFirebaseSocial;