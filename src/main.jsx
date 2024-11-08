import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OfficerHomepage from "./pages/OfficerHomepage.jsx"
import AdminHomepage from "./pages/AdminHomepage.jsx"
import UploadPage from "./pages/UploadPage.jsx";
import AdminViewReport from "./pages/AdminViewReport.jsx";
import RootLayout from "./components/RootLayout.jsx";
import OfficerReport from "./pages/OfficerReport.jsx"
import HomePage from "./pages/HomePage.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <OfficerReport />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
