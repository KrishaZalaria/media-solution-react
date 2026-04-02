import { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

type HeaderProps = {
  headerHeight: number;
  username?: string;
};

function Header({ headerHeight, username = "media.admin" }: HeaderProps) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: headerHeight,
        justifyContent: "center",
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ minHeight: `${headerHeight}px !important`, px: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <AutoAwesomeRoundedIcon sx={{ fontSize: 34, color: "common.white" }} />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.2 }}>
            MediaPipes
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton
          color="inherit"
          onClick={(event) => setMenuAnchor(event.currentTarget)}
          sx={{
            borderRadius: 2,
            color: "text.primary",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <AccountCircleRoundedIcon sx={{ fontSize: 34 }} />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => setMenuAnchor(null)}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: 1,
              minWidth: 220,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            },
          }}
        >
          <MenuItem disabled sx={{ opacity: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Logged in as: <Box component="span" sx={{ color: "text.primary" }}>{username}</Box>
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => setMenuAnchor(null)}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
