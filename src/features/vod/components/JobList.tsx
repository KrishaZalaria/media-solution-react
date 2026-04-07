import { Stack } from "@mui/material";
import JobCard, { type JobCardData } from "./JobCard";

type JobListProps = {
  jobs: JobCardData[];
};

function JobList({ jobs }: JobListProps) {
  return (
    <Stack spacing={2.5}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Stack>
  );
}

export default JobList;
