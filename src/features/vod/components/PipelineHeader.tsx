import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";

type PipelineHeaderProps = {
  pipelineName: string;
  createdOn: string;
  status: string;
};

function PipelineHeader({
  pipelineName,
  createdOn,
  status,
}: PipelineHeaderProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", md: "center" }}
      spacing={2}
    >
      <Box>
        <Typography variant="h4">{pipelineName}</Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          sx={{ mt: 1 }}
        >
          <Typography color="text.secondary">
            Created on: {createdOn}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography color="text.secondary">Status:</Typography>
            <Chip label={status} color="primary" variant="outlined" size="small" />
          </Stack>
        </Stack>
      </Box>

      <IconButton color="inherit">
        <SettingsRoundedIcon />
      </IconButton>
    </Stack>
  );
}

export default PipelineHeader;
