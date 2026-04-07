import type { JobCardData } from "../features/vod/components/JobCard";
import type { PipelineCardData } from "../features/vod/components/PipelineCard";
import { mockApi } from "./apiClient";

const mockPipelines: PipelineCardData[] = [
  {
    id: "Pipeline_720_FHD",
    name: "Pipeline_720_FHD",
    createdOn: "NA",
    metrics: [
      { label: "Total", value: "4", color: "text.primary" },
      { label: "COMPLETED", value: "4", color: "#59df68" },
      { label: "FAILED", value: "0", color: "#ff8b8b" },
      { label: "IN PROGRESS", value: "0", color: "#ffbf54" },
    ],
    details: [
      "FHD ,720P",
      "TEST_PACKAGING_GROUP_1",
      "pipeline_720_1080",
      "aakash@ollion.com",
    ],
  },
  {
    id: "Pipeline_720",
    name: "Pipeline_720",
    createdOn: "NA",
    metrics: [
      { label: "Total", value: "0", color: "text.primary" },
      { label: "COMPLETED", value: "0", color: "#59df68" },
      { label: "FAILED", value: "0", color: "#ff8b8b" },
      { label: "IN PROGRESS", value: "0", color: "#ffbf54" },
    ],
    details: [
      "720P",
      "TEST_PACKAGING_GROUP_1",
      "720p-test",
      "aakash@ollion.com",
    ],
  },
];

export const getPipelines = async () => {
  return mockApi([...mockPipelines]);
};

export const getPipelineJobs = async (pipelineId: string) => {
  return mockApi<JobCardData[]>([
    {
      id: "1",
      name: `s3://media-solution-application/${pipelineId}...`,
      createdAt: "April 1, 2026",
      status: "COMPLETED",
    },
    {
      id: "2",
      name: `s3://media-solution-application-2/${pipelineId}...`,
      createdAt: "April 2, 2026",
      status: "FAILED",
    },
    {
      id: "3",
      name: `s3://media-solution-application-3/${pipelineId}...`,
      createdAt: "April 3, 2026",
      status: "IN_PROGRESS",
    },
  ]);
};
