import PagePlaceholder from "../shared/ui/PagePlaceholder";

function NotFoundPage() {
  return (
    <PagePlaceholder
      title="Page Not Found"
      description="The route you requested does not exist in this application shell."
      links={[
        { label: "Go to Login", to: "/login" },
        { label: "Go to VOD", to: "/vod" },
      ]}
    />
  );
}

export default NotFoundPage;
