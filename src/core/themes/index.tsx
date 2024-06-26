"use client"
import { ReactNode, useMemo } from "react";
import { publicSans } from "../utils/font";

// material-ui
import { CssBaseline, StyledEngineProvider, ThemeOptions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadow";
import ComponentsOverrides from "./overrides";

declare module '@mui/material/styles' {
  interface Theme {
    customShadows?: any,
  }
  interface ThemeOptions {
    customShadows?: any,
  }
}

const ThemeCostumization = (props: { children: ReactNode }) => {
  const theme = Palette('light');

  const themeTypography = Typography(publicSans.style.fontFamily);
  const themeShadow = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          "2xl": 1536,
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeShadow,
      typography: themeTypography
    }),
    [theme, themeTypography, themeShadow]
  );

  const themes = createTheme(themeOptions);
  themes.components = ComponentsOverrides(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}


export default ThemeCostumization;