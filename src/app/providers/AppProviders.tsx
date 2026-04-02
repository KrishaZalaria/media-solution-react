import type { ReactNode } from "react";
import AppThemeProvider from "./AppThemeProvider";
import QueryProvider from "./QueryProvider";

type AppProvidersProps = {
  children: ReactNode;
};

function AppProviders({ children }: AppProvidersProps) {
  return (
    <AppThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </AppThemeProvider>
  );
}

export default AppProviders;
