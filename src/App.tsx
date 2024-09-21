import { AppLayout } from "./common/layouts/appLayout/AppLayout";
import { Gateway } from "./pages/gateway/Gateway";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./pages/error/Error";
import SolidPrinciplePage from "./pages/oop/solidPrinciple/solidPrinciplePage";

const LayoutWrapper = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWrapper />,
      children: [
        { path: "/", element: <Gateway /> },
        { path: "/solidPrinciple", element: <SolidPrinciplePage /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
