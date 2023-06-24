import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main";

// Pages for routing
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Works from "./pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "works",
            element: <Works />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
