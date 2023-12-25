import React from "react";
import ReactDOM from "react-dom/client";

// providers
import { FileTreeContextProvider } from "./context/file-tree-context.tsx";

// components
import App from "./App.tsx";

// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileTreeContextProvider>
      <App />
    </FileTreeContextProvider>
  </React.StrictMode>
);
