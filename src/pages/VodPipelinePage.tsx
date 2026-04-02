import { Chip, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PagePlaceholder from "../shared/ui/PagePlaceholder";

function VodPipelinePage() {
  const { pipelineId } = useParams();

  return (
    <PagePlaceholder
      title="VOD Pipeline"
      description="This route now renders inside the shared application layout."
      links={[
        { label: "Back to VOD", to: "/vod" },
        {
          label: "Sample Job",
          to: `/vod/${pipelineId ?? "pipeline-001"}/job-001`,
        },
      ]}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography color="text.secondary">Pipeline ID</Typography>
        <Chip label={pipelineId ?? "unknown"} color="primary" variant="outlined" />
      </Stack>
    </PagePlaceholder>
  );
}

export default VodPipelinePage;
