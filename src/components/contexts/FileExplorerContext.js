import React, { createContext, useState, useEffect, useContext } from "react";
import directoryUtils from "../../api";

const FileExplorerContext = createContext();

export const FileExplorerProvider = ({ children }) => {
  const [directoryTree, setDirectoryTree] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const setHoveredItem = (itemId) => {
    setHoveredItemId(itemId);
  };

  useEffect(() => {
    const fetchDirectoryTree = async () => {
      const directoryTreeResults = await directoryUtils.getDirectoryTree();
      setDirectoryTree(directoryTreeResults);
    };
    fetchDirectoryTree();
  }, []);

  const handleDelete = async () => {
    const newDirectoryTree = await directoryUtils.deleteById(hoveredItemId);
    setDirectoryTree(newDirectoryTree);
  };

  const handleMouseHover = (itemId) => {
    setHoveredItemId(itemId);
  };

  return (
    <FileExplorerContext.Provider
      value={{
        directoryTree,
        setDirectoryTree,
        handleDelete,
        hoveredItemId,
        setHoveredItem,
        handleMouseHover,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
};

export const useFileExplorer = () => {
  return useContext(FileExplorerContext);
};
