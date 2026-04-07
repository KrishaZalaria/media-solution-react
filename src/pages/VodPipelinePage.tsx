import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import JobList from "../features/vod/components/JobList";
import PipelineHeader from "../features/vod/components/PipelineHeader";
import PipelineTabs from "../features/vod/components/PipelineTabs";
import PipelineToolbar from "../features/vod/components/PipelineToolbar";
import { getPipelineJobs } from "../services/vodService";

function VodPipelinePage() {
  const { pipelineId } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");

  const pipelineName = pipelineId ?? "unknown-pipeline";
  const { data, isLoading, error } = useQuery({
    queryKey: ["pipelineJobs", pipelineId],
    queryFn: () => getPipelineJobs(pipelineId!),
    enabled: !!pipelineId,
  });

  const jobs = data || [];
  const filteredJobs = jobs.filter((job) => {
    if (activeTab === "ALL") {
      return true;
    }

    return job.status === activeTab;
  });

  return (
    <Stack spacing={2} sx={{ maxWidth: 1240 }}>
      <PipelineHeader
        pipelineName={pipelineName}
        createdOn="Apr 2, 2026"
        status="Created"
      />

      <PipelineToolbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        actionLabel="+ New Job"
        searchPlaceholder="Search Job"
      />

      <PipelineTabs activeTab={activeTab} onChange={setActiveTab} />

      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>Error loading jobs</Typography>}

      {!isLoading && !error && (
        <JobList jobs={filteredJobs} />
      )}
    </Stack>
  );
}

export default VodPipelinePage;
