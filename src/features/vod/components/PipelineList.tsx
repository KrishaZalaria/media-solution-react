import Grid from "@mui/material/Grid";
//import PipelineCard, { type PipelineCardData } from "../../features/vod/components/PipelineCard";
import PipelineCard from "./PipelineCard";
import type { PipelineCardData } from "./PipelineCard";
type PipelineListProps = {
  pipelines: PipelineCardData[];
  onPipelineClick: (pipelineId: string) => void;
};

function PipelineList({ pipelines, onPipelineClick }: PipelineListProps) {
  return (
    <Grid container spacing={4}>
      {pipelines.map((pipeline) => (
        <Grid key={pipeline.id} size={{ xs: 12, xl: 6 }}>
          <PipelineCard pipeline={pipeline} onClick={onPipelineClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PipelineList;
