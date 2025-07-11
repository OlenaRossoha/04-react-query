import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "modern-normalize/modern-normalize.css";
import "./index.css";

// Створення екземпляру QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Обгортання App в QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* Підключення React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
