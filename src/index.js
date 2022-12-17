import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

//CSS imports
import "./index.css";

//Pages imports
import App from "./routes/App";
import ErrorPage from "./routes/ErrorPage";
import AboutPage from "./routes/AboutPage";

//Context
import { FeedbackProvider } from "./context/FeedbackContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <RouterProvider router={router} />
    </FeedbackProvider>
  </React.StrictMode>
);
