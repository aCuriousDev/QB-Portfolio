import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Pages for routing
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Works from "./pages/Works";
// import Work from "./components/Work";
import { Pyralim, Natecia, KMGFrance, Asdd } from "./pages/works/worksIndex";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "works/Pyralim",
        element: <Pyralim />,
      },
      {
        path: "works/Natecia",
        element: <Natecia />,
      },
      {
        path: "works/KMGFrance",
        element: <KMGFrance />,
      },
      {
        path: "works/ASDD",
        element: <Asdd />,
      },
    ],
  },
]);

function App() {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
