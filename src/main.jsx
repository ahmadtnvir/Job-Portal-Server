import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import Loader from "./pages/shared/Loader.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Suspense
        fallback={
          <span className="h-screen w-full flex justify-center items-center">
            <Loader></Loader>
          </span>
        }
      >
        <RouterProvider router={router} />
        <Toaster />
      </Suspense>
    </AuthProvider>
  </StrictMode>
);
