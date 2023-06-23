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
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "works",
    element: <Works />,
  },
]);

function App() {
  return (
    <Main>
      <RouterProvider router={router}></RouterProvider>
    </Main>
  );
}

export default App;
