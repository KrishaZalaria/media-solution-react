import PagePlaceholder from "../shared/ui/PagePlaceholder";
import { Box, Paper, Stack, Typography } from "@mui/material";

function SettingsPage() {
  return (
    <PagePlaceholder
      title="Settings"
      description="Configuration screens will plug into this area while keeping the shared application shell intact."
      links={[
        { label: "Open VOD", to: "/vod" },
        { label: "Open Live", to: "/live" },
      ]}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: 2,
        }}
      >
        {["Profile", "Preferences"].map((section) => (
          <Paper
            key={section}
            elevation={0}
            sx={{ p: 3, borderRadius: 3, backgroundColor: "#243244" }}
          >
            <Stack spacing={1}>
              <Typography variant="h6">{section}</Typography>
              <Typography color="text.secondary">
                Placeholder content for the {section.toLowerCase()} section.
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Box>
    </PagePlaceholder>
  );
}

export default SettingsPage;
