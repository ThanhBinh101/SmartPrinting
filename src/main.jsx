import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UploadPage from "./pages/UploadPage.jsx";
import RootLayout from "./components/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import PurchasePage from "./pages/PurchasePage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {path:'/',
        element: <Login/>,
      },
      {
        path: "/studentpage",
        element: <HomePage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/purchase",
        element: <PurchasePage/>
      }
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
