import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Pages for routing
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Works from "./pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // path: "home",
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
