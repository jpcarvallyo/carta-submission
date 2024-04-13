import React from "react";
import { useFileExplorer } from "../contexts/";
import DirectoryItem from "./DirectoryItem";
import "./style.css";

const FileExplorer = () => {
  const { directoryTree } = useFileExplorer();

  return (
    <aside id="file-explorer">
      <h2>{directoryTree?.name.toUpperCase()}</h2>
      {directoryTree?.children.map((child) => (
        <DirectoryItem key={child.id} item={child} />
      ))}
    </aside>
  );
};

export default FileExplorer;
