// React / Next
import { ReactNode } from "react";

// MUI
import { Box, Grid } from "@mui/material";

// Components
import AuthBackground from "@/assets/images/auth/AuthBackground";
import AppLogo from "@/persentation/component/atom/AppLogo";
import AuthFooter from "@/persentation/component/organism/Auth/AuthFooter";
import AuthCard from "@/persentation/component/molecule/AuthCard";

interface AuthWrapperProps {
  children: ReactNode,
}

const AuthWrapper = (props: AuthWrapperProps) => {
  return (
    <Box
      component="main"
      minHeight={'100vh'}
    >
      <AuthBackground />
      <Grid
        container
        direction={"column"}
        justifyContent={'space-between'}
        sx={{ minHeight: '100vh' }}
      >
        <Header />
        <Body>{props.children}</Body>
        <Footer />
      </Grid>
    </Box>
  );
}

const Header = () => {
  return (
    <>
      <Grid item xs={12} p="24px">
        <AppLogo />
      </Grid>
    </>
  );
}

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <>

      <Grid
        item
        xs={12}
        container
        direction={'column'}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <AuthCard>{children}</AuthCard>
        </Grid>
      </Grid>
    </>
  );
}

const Footer = () => {
  return (
    <>
      <Grid item xs={12} p={{ xs: "16px", sm: "24px" }}>
        <AuthFooter />
      </Grid>
    </>
  );
}

export default AuthWrapper;