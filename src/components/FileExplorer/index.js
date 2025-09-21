import React, { useMemo } from "react";
import { useFileExplorer } from "../contexts/";
import DirectoryItem from "./DirectoryItem";
import "./style.css";

const FileExplorer = () => {
  const { directoryTree } = useFileExplorer();

  const projectName = useMemo(
    () => directoryTree?.name?.toUpperCase() || "",
    [directoryTree?.name]
  );

  const sortedChildren = useMemo(
    () => directoryTree?.children || [],
    [directoryTree?.children]
  );

  return (
    <aside id="file-explorer">
      <h2>{projectName}</h2>
      {sortedChildren.map((child) => (
        <DirectoryItem key={child.id} item={child} />
      ))}
    </aside>
  );
};

export default FileExplorer;
