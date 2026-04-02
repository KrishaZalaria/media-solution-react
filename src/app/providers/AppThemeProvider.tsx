import type { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#46a7ff",
    },
    secondary: {
      main: "#7dc5ff",
    },
    background: {
      default: "#212d3a",
      paper: "#2e3d4f",
    },
    text: {
      primary: "#f8fbff",
      secondary: "#9cb0c4",
    },
    divider: "#44596e",
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          textTransform: "none",
        },
      },
    },
  },
});

type AppThemeProviderProps = {
  children: ReactNode;
};

function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
