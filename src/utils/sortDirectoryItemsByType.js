export const sortDirectoryItemsByType = (children) => {
  return children?.sort((a, b) => {
    if (a.type === "folder" && b.type !== "folder") {
      return -1; // Place folders before non-folders
    } else if (a.type !== "folder" && b.type === "folder") {
      return 1; // Place non-folders after folders
    } else {
      return 0; // Maintain the existing order for items of the same type
    }
  });
};
