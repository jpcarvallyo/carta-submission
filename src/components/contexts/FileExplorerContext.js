import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import directoryUtils from "../../api";
import { getNextId } from "../../utils";

const FileExplorerContext = createContext();

export const FileExplorerProvider = ({ children }) => {
  const [directoryTree, setDirectoryTree] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const setHoveredItem = useCallback((itemId) => {
    setHoveredItemId(itemId);
  }, []);

  useEffect(() => {
    const fetchDirectoryTree = async () => {
      const directoryTreeResults = await directoryUtils.getDirectoryTree();
      setDirectoryTree(directoryTreeResults);
    };
    fetchDirectoryTree();
  }, []);

  const handleDelete = useCallback(async () => {
    const nextId = getNextId(directoryTree, hoveredItemId);
    const newDirectoryTree = await directoryUtils.deleteById(hoveredItemId);
    setHoveredItem(nextId);
    setDirectoryTree(newDirectoryTree);
  }, [directoryTree, hoveredItemId, setHoveredItem]);

  const handleMouseHover = useCallback((itemId) => {
    setHoveredItemId(itemId);
  }, []);

  const contextValue = useMemo(
    () => ({
      directoryTree,
      setDirectoryTree,
      handleDelete,
      hoveredItemId,
      setHoveredItem,
      handleMouseHover,
    }),
    [
      directoryTree,
      hoveredItemId,
      handleDelete,
      setHoveredItem,
      handleMouseHover,
    ]
  );

  return (
    <FileExplorerContext.Provider value={contextValue}>
      {children}
    </FileExplorerContext.Provider>
  );
};

export const useFileExplorer = () => {
  return useContext(FileExplorerContext);
};
