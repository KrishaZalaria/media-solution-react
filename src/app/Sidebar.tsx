import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

type SidebarProps = {
  drawerWidth: number;
  headerHeight: number;
};

const navigationItems = [
  {
    label: "VOD Pipeline",
    to: "/vod",
    matchPrefix: "/vod",
    icon: <VideoLibraryRoundedIcon />,
  },
  {
    label: "Live Pipeline",
    to: "/live",
    matchPrefix: "/live",
    icon: <LiveTvRoundedIcon />,
  },
  {
    label: "Settings",
    to: "/settings",
    matchPrefix: "/settings",
    icon: <SettingsRoundedIcon />,
  },
];

function Sidebar({ drawerWidth, headerHeight }: SidebarProps) {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          top: headerHeight,
          height: `calc(100vh - ${headerHeight}px)`,
          borderRight: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.default",
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ px: 0, py: 2 }}>
        <List disablePadding>
          {navigationItems.map((item) => {
            const isActive = location.pathname.startsWith(item.matchPrefix);

            return (
              <ListItem key={item.to} disablePadding sx={{ px: 0 }}>
                <ListItemButton
                  component={RouterLink}
                  to={item.to}
                  selected={isActive}
                  sx={{
                    minHeight: 72,
                    px: 3,
                    gap: 1.5,
                    borderLeft: "4px solid",
                    borderLeftColor: isActive ? "primary.main" : "transparent",
                    transition: "all 180ms ease",
                    "&.Mui-selected": {
                      backgroundColor: "rgba(67, 153, 255, 0.08)",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "rgba(67, 153, 255, 0.14)",
                    },
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: isActive ? "common.white" : "text.secondary",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: isActive ? 700 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
