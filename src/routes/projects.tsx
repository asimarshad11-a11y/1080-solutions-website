import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /projects — leaf content lives in projects.index.tsx.
export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return <Outlet />;
}
