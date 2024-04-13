import React from "react";
import { FileExplorerProvider } from "./components/contexts";
import FileExplorer from "./components/FileExplorer";

export default function App() {
  return (
    <div className="App">
      <FileExplorerProvider>
        <FileExplorer />
      </FileExplorerProvider>
    </div>
  );
}
