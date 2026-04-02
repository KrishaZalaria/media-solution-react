import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

const livePipelines = [
  {
    id: "ea96ab9c-1878-43ae-9b90-a6...",
    createdOn: "July, 6 2022",
    status: "IDLE",
  },
  {
    id: "a8719886-b25e-42f0-b94e-b2...",
    createdOn: "July, 6 2022",
    status: "IDLE",
  },
];

const tabs = [
  { label: "ALL (2)", active: true, color: "common.white" },
  { label: "ACTIVE (0)", active: false, color: "#59df68" },
  { label: "IN-ACTIVE (2)", active: false, color: "#6788b3" },
];

function LivePage() {
  return (
    <Stack spacing={4} sx={{ maxWidth: 1180 }}>
      <Typography variant="h4">Live Pipelines</Typography>

      <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
        <Button variant="contained" size="large" sx={{ px: 3.5, alignSelf: "flex-start" }}>
          + NEW PIPELINE
        </Button>

        <Paper
          elevation={0}
          sx={{
            flex: 1,
            maxWidth: 650,
            height: 46,
            px: 2.25,
            borderRadius: 999,
            backgroundColor: "#344459",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <SearchRoundedIcon sx={{ color: "text.primary" }} />
          <Typography color="text.secondary">Search Pipeline</Typography>
        </Paper>
      </Stack>

      <Box sx={{ pt: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 2,
            mb: 1.5,
          }}
        >
          {tabs.map((tab) => (
            <Typography
              key={tab.label}
              align="center"
              sx={{
                color: tab.color,
                fontWeight: tab.active ? 700 : 600,
                pb: 2,
                borderBottom: tab.active ? "3px solid #46a7ff" : "3px solid transparent",
              }}
            >
              {tab.label}
            </Typography>
          ))}
        </Box>
        <Divider />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "repeat(2, minmax(0, 1fr))" },
          gap: 3,
        }}
      >
        {livePipelines.map((pipeline) => (
          <Paper
            key={pipeline.id}
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 3,
              backgroundColor: "background.paper",
            }}
          >
            <Stack spacing={4}>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 1.5,
                      backgroundColor: "#40597c",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <TuneRoundedIcon sx={{ color: "#7ea9df" }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {pipeline.id}
                    </Typography>
                    <Typography color="text.secondary">
                      Created on {pipeline.createdOn}
                    </Typography>
                  </Box>
                </Stack>

                <IconButton color="inherit">
                  <SettingsRoundedIcon />
                </IconButton>
              </Stack>

              <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1.5}>
                <Typography sx={{ fontWeight: 700 }}>Status:</Typography>
                <Typography sx={{ color: "#59df68", fontWeight: 700 }}>
                  {pipeline.status}
                </Typography>
                <Switch defaultChecked={false} />
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
}

export default LivePage;
