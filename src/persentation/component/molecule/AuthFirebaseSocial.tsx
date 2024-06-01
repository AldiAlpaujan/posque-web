// Next
import Image from "next/image";

// MUI
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Assets
import Google from '@/assets/images/icons/google.svg';
import Facebook from '@/assets/images/icons/facebook.svg';
import Twitter from '@/assets/images/icons/twitter.svg';

const AuthFirebaseSocial = () => {

  const onGoogleClick = () => { }

  const onTwitterClick = () => { }

  const onFacebookClick = () => { }


  return (
    <Stack direction={'row'} justifyContent={'space-between'} spacing={'14px'}>
      <SocialAuthCard
        iconSrc={Google}
        label="Google"
        onClick={onGoogleClick}
      />
      <SocialAuthCard
        iconSrc={Twitter}
        label="Twitter"
        onClick={onTwitterClick}
      />
      <SocialAuthCard
        iconSrc={Facebook}
        label="Facebook"
        onClick={onFacebookClick}
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
    >
      {props.label}
    </Button>
  );
}

export default AuthFirebaseSocial;