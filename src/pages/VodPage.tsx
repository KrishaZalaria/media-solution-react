// import { useState } from "react";
// import { Stack, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import PipelineList from "../shared/components/PipelineList";
// import PipelineToolbar from "../features/vod/components/PipelineToolbar";
// import type { PipelineCardData } from "../features/vod/components/PipelineCard";

// const mockpipelines: PipelineCardData[] = [
//   {
//     id: "Pipeline_720_FHD",
//     name: "Pipeline_720_FHD",
//     createdOn: "NA",
//     metrics: [
//       { label: "Total", value: "4", color: "text.primary" },
//       { label: "COMPLETED", value: "4", color: "#59df68" },
//       { label: "FAILED", value: "0", color: "#ff8b8b" },
//       { label: "IN PROGRESS", value: "0", color: "#ffbf54" },
//     ],
//     details: ["FHD ,720P", "TEST_PACKAGING_GROUP_1", "pipeline_720_1080", "aakash@ollion.com"],
//   },
//   {
//     id: "Pipeline_720",
//     name: "Pipeline_720",
//     createdOn: "NA",
//     metrics: [
//       { label: "Total", value: "0", color: "text.primary" },
//       { label: "COMPLETED", value: "0", color: "#59df68" },
//       { label: "FAILED", value: "0", color: "#ff8b8b" },
//       { label: "IN PROGRESS", value: "0", color: "#ffbf54" },
//     ],
//     details: ["720P", "TEST_PACKAGING_GROUP_1", "720p-test", "aakash@ollion.com"],
//   },
// ];

// function VodPage() {
//   const navigate = useNavigate();
//   const [searchValue, setSearchValue] = useState("");

//   return (
//     <Stack spacing={4} sx={{ maxWidth: 1240 }}>
//       <Typography variant="h4">VOD Pipelines</Typography>

//       <PipelineToolbar
//         searchValue={searchValue}
//         onSearchChange={setSearchValue}
//       />

//       <PipelineList
//         pipelines={mockpipelines}
//         onPipelineClick={(pipelineId) => navigate(`/vod/${pipelineId}`)}
//       />
//     </Stack>
//   );
// }

// export default VodPage;

import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PipelineList from "../features/vod/components/PipelineList";
import PipelineToolbar from "../features/vod/components/PipelineToolbar";
import type { PipelineCardData } from "../features/vod/components/PipelineCard";

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
    details: ["FHD ,720P", "TEST_PACKAGING_GROUP_1", "pipeline_720_1080", "aakash@ollion.com"],
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
    details: ["720P", "TEST_PACKAGING_GROUP_1", "720p-test", "aakash@ollion.com"],
  },
];

function VodPage() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handlePipelineClick = (pipelineId: string) => {
    navigate(`/vod/${pipelineId}`);
  };

  return (
    <Stack spacing={4} sx={{ maxWidth: 1240 }}>
      <Typography variant="h4">VOD Pipelines</Typography>

      <PipelineToolbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <PipelineList
        pipelines={mockPipelines}
        onPipelineClick={handlePipelineClick}
      />
    </Stack>
  );
}

export default VodPage;