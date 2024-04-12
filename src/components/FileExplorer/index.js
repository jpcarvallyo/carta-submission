import React, { useState, useEffect } from "react";
import directoryUtils from "../../api";
import DirectoryItem from "./DirectoryItem";
import "./style.css";

const FileExplorer = () => {
  const [directoryTree, setDirectoryTree] = useState(null);

  useEffect(() => {
    const fetchDirectoryTree = async () => {
      const directoryTreeResults = await directoryUtils.getDirectoryTree();
      setDirectoryTree(directoryTreeResults);
    };
    fetchDirectoryTree();
  }, []);

  return (
    <div id="fileExplorer">
      <h2>{directoryTree?.name}</h2>
      {directoryTree?.children.map((child) => (
        <DirectoryItem key={child.id} item={child} />
      ))}
    </div>
  );
};

export default FileExplorer;
