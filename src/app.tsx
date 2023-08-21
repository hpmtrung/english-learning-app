import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary";
import MainPage from "./components/MainPage";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <CssBaseline />
    {/* Suspense to load localized json data */}
    <MainPage />
  </ErrorBoundary>
);