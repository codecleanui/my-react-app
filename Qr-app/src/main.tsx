import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./app/(auth)/authProvider.tsx";
import AppLayout from "./app/layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppLayout/>
    </AuthProvider>
  </React.StrictMode>
);
