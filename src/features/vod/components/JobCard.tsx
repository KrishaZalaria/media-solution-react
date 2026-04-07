import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export type JobCardData = {
  id: string;
  name: string;
  createdAt: string;
  status: string;
};

type JobCardProps = {
  job: JobCardData;
};

// type JobCardProps = {
//   job: JobCardData;
// };

function JobCard({ job }: JobCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
        >
          <Box>
            <Typography variant="h6" sx={{ wordBreak: "break-word" }}>
              {job.name}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Created on: {job.createdAt}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Status: {job.status}
            </Typography>
          </Box>

          <IconButton color="inherit">
            <ExpandMoreRoundedIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default JobCard;
