import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Login from "./Pages/Login.tsx";
import Movies from "./Pages/Movies.tsx";
import GuestOnly from "./Components/GuestOnly.tsx";
import AuthOnly from "./Components/AuthOnly.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <GuestOnly>
        <Login />
      </GuestOnly>
    ),
  },
  {
    path: "/movies",
    element: (
      <AuthOnly>
        <Movies />
      </AuthOnly>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
