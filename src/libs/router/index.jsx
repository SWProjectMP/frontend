import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("src/pages/auth/login/LoginPage"));
const RegistrationPage = lazy(() =>
  import("src/pages/auth/registration/RegistrationPage")
);
const ProjectsListingPage = lazy(() =>
  import("src/pages/projects-listing/ProjectsListingPage")
);

const AsyncPage = ({ children }) => {
  return <Suspense fallback="">{children}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>index page here</div>,
  },
  {
    path: "/login",
    element: (
      <AsyncPage>
        <LoginPage />
      </AsyncPage>
    ),
  },
  {
    path: "/registration",
    element: (
      <AsyncPage>
        <RegistrationPage />
      </AsyncPage>
    ),
  },
  {
    path: "/projects/:page",
    element: (
      <AsyncPage>
        <ProjectsListingPage />
      </AsyncPage>
    ),
  },
]);

export default router;
