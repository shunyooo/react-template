import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
