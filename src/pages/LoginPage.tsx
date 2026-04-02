import PagePlaceholder from "../shared/ui/PagePlaceholder";

function LoginPage() {
  return (
    <PagePlaceholder
      title="Login"
      description="Authentication UI will live here. This page intentionally stays outside the main application layout."
      standalone
      links={[
        { label: "Open VOD", to: "/vod" },
        { label: "Open Live", to: "/live" },
      ]}
    />
  );
}

export default LoginPage;
