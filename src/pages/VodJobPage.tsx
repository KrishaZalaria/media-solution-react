import { Chip, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PagePlaceholder from "../shared/ui/PagePlaceholder";

function VodJobPage() {
  const { pipelineId, jobId } = useParams();

  return (
    <PagePlaceholder
      title="VOD Job"
      description="Job-level details will render inside the same routed shell."
      links={[
        { label: "Pipeline View", to: `/vod/${pipelineId ?? "pipeline-001"}` },
        { label: "Back to VOD", to: "/vod" },
      ]}
    >
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Typography color="text.secondary">Pipeline</Typography>
        <Chip label={pipelineId ?? "unknown"} color="primary" variant="outlined" />
        <Typography color="text.secondary">Job</Typography>
        <Chip label={jobId ?? "unknown"} color="secondary" variant="outlined" />
      </Stack>
    </PagePlaceholder>
  );
}

export default VodJobPage;
