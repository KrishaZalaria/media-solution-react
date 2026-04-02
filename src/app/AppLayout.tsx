import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 250;
const headerHeight = 72;

function AppLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Header headerHeight={headerHeight} />
      <Sidebar drawerWidth={drawerWidth} headerHeight={headerHeight} />

      <Box
        component="main"
        sx={{
          ml: `${drawerWidth}px`,
          pt: `calc(${headerHeight}px + 24px)`,
          px: { xs: 3, md: 5 },
          pb: 5,
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppLayout;
