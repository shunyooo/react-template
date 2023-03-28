/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./pages/common/layout/AppLayout.js";
import { RootError } from "./pages/common/layout/RootError.js";
import HomePage from "./pages/home/HomePage.js";

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <HomePage /> },
    ],
  },
]);

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
