import { Tab, Tabs } from "@mui/material";

type PipelineTabsProps = {
  activeTab: string;
  onChange: (tab: string) => void;
};

const tabs = [
  { label: "ALL", value: "ALL" },
  { label: "COMPLETED", value: "COMPLETED" },
  { label: "FAILED", value: "FAILED" },
  { label: "IN PROGRESS", value: "IN_PROGRESS" },
];

function PipelineTabs({ activeTab, onChange }: PipelineTabsProps) {
  return (
    <Tabs
      value={activeTab}
      onChange={(_, newValue) => onChange(newValue)}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        "& .MuiTabs-indicator": {
          height: 3,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          sx={{
            minHeight: 48,
            fontWeight: 700,
            alignItems: "flex-start",
          }}
        />
      ))}
    </Tabs>
  );
}

export default PipelineTabs;