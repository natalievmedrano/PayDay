import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      {" "}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
