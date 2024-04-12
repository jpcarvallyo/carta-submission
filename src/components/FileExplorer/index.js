import React, { useState, useEffect } from "react";
import Folder from "./Folder";
import File from "./File";
import directoryUtils from "../../api";
import "./style.css";

const FileExplorer = () => {
  const [directoryTree, setDirectoryTree] = useState(null);
  useEffect(() => {
    const fetchDirectoryTree = async () => {
      const directoryTreeResults = await directoryUtils.getDirectoryTree();
      setDirectoryTree(directoryTreeResults);
      console.log("🚀 ~ useEffect ~ directoryTree:", directoryTreeResults);
    };
    fetchDirectoryTree();
  }, []);

  return (
    <div id="fileExplorer">
      <h2>{directoryTree.name}</h2>
      {directoryTree?.children.map((child) =>
        child.type === "folder" ? (
          <Folder key={child.id} folder={child} />
        ) : (
          <File key={child.id} file={child} />
        )
      )}
    </div>
  );
};

export default FileExplorer;
