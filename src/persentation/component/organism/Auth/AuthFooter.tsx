"use client"
import { Container, Stack, styled, Typography, useTheme } from "@mui/material";

const HoverTypography = styled(Typography)({
  '&: hover': {
    cursor: 'pointer',
    textDecoration: "underline",
  }
});

const AuthFooter = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
    >
      <Stack
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={"center"}
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Typography
          variant="subtitle2"
          component="span"
          textAlign={"center"}
          color={theme.palette.text.secondary}
          mb={{ xs: "8px", sm: '0' }}
        >
          This site is protected by{" "}
          <HoverTypography
            display={"inline"}
            variant="subtitle2"
            fontWeight={600}
            color="primary"
          >
            Privacy Policy
          </HoverTypography>
        </Typography>

        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ sm: '20px' }}
          direction={{ xs: 'column', sm: 'row' }}
        >
          <HoverTypography
            variant="subtitle2"
            color={"secondary"}
            mb={{ xs: "8px", sm: '0' }}
          >
            Terms and Conditions
          </HoverTypography>
          <HoverTypography
            variant="subtitle2"
            color={"secondary"}
            mb={{ xs: "8px", sm: '0' }}
          >
            Privacy Policy
          </HoverTypography>
          <HoverTypography
            variant="subtitle2"
            color={"secondary"}
            mb={{ xs: "8px", sm: '0' }}
          >
            CA Privacy Notice
          </HoverTypography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default AuthFooter;