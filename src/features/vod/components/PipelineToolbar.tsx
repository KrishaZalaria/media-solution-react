import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button, Stack, TextField } from "@mui/material";

type PipelineToolbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  actionLabel?: string;
  searchPlaceholder?: string;
};

function PipelineToolbar({
  searchValue,
  onSearchChange,
  actionLabel = "+ New Pipeline",
  searchPlaceholder = "Search Pipeline",
}: PipelineToolbarProps) {
  return (
    <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
      <Button
        variant="contained"
        size="large"
        sx={{ px: 3.5, alignSelf: "flex-start" }}
      >
        {actionLabel}
      </Button>

      <TextField
        fullWidth
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder={searchPlaceholder}
        InputProps={{
          startAdornment: <SearchRoundedIcon sx={{ mr: 1, color: "text.secondary" }} />,
        }}
        sx={{
          maxWidth: 860,
          "& .MuiOutlinedInput-root": {
            borderRadius: 999,
            backgroundColor: "#344459",
          },
        }}
      />
    </Stack>
  );
}

export default PipelineToolbar;
