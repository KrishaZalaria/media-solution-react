import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export type PipelineMetric = {
  label: string;
  value: string;
  color: string;
};

export type PipelineCardData = {
  id: string;
  name: string;
  createdOn: string;
  metrics: PipelineMetric[];
  details: string[];
};

type PipelineCardProps = {
  pipeline: PipelineCardData;
  onClick: (pipelineId: string) => void;
};

function PipelineCard({ pipeline, onClick }: PipelineCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <CardActionArea
        onClick={() => onClick(pipeline.id)}
        sx={{
          height: "100%",
          alignItems: "stretch",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={3}>
            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              spacing={2}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1.5,
                    backgroundColor: "#40597c",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <TuneRoundedIcon sx={{ color: "#7ea9df" }} />
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {pipeline.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Created on: {pipeline.createdOn}
                  </Typography>
                </Box>
              </Stack>

              <IconButton
                color="inherit"
                onClick={(event) => event.stopPropagation()}
              >
                <SettingsRoundedIcon />
              </IconButton>
            </Stack>

            <Box
              sx={{
                px: 2,
                py: 2.25,
                borderRadius: 2,
                backgroundColor: "#243244",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: 2,
                }}
              >
                {pipeline.metrics.map((metric) => (
                  <Box key={metric.label}>
                    <Typography
                      variant="caption"
                      color="secondary.main"
                      sx={{ fontSize: 12 }}
                    >
                      {metric.label}
                    </Typography>
                    <Typography sx={{ mt: 1, color: metric.color, fontSize: 22 }}>
                      {metric.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Stack spacing={1.25}>
              {pipeline.details.map((detail) => (
                <Typography key={detail} color="text.secondary">
                  {detail}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PipelineCard;
