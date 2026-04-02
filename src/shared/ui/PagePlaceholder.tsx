import type { ReactNode } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type NavigationLink = {
  label: string;
  to: string;
};

type PagePlaceholderProps = {
  title: string;
  description: string;
  children?: ReactNode;
  links?: NavigationLink[];
  standalone?: boolean;
};

function PagePlaceholder({
  title,
  description,
  children,
  links = [],
  standalone = false,
}: PagePlaceholderProps) {
  const content = (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        p: { xs: 3, md: 4 },
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="overline" color="primary.main">
            MediaPipes
          </Typography>
          <Typography variant={standalone ? "h3" : "h4"} component="h1">
            {title}
          </Typography>
          <Typography color="text.secondary">{description}</Typography>
        </Stack>

        {children}

        {links.length > 0 ? (
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {links.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                variant={standalone ? "contained" : "outlined"}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Paper>
  );

  if (standalone) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at top left, rgba(70,167,255,0.18), transparent 32%), #212d3a",
          px: 3,
          py: 6,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 560 }}>{content}</Box>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1120 }}>{content}</Box>
  );
}

export default PagePlaceholder;
