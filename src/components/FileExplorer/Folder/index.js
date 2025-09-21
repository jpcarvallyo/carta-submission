import React, { useState, useMemo, useCallback } from "react";
import { useFileExplorer } from "../../contexts";
import DirectoryItem from "../DirectoryItem";
import Icon from "../Icon";
import { sortDirectoryItemsByType } from "../../../utils";

const Folder = React.memo(({ folder }) => {
  const [expanded, setExpanded] = useState(false);
  const { handleMouseHover, hoveredItemId } = useFileExplorer();

  const toggleFolder = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const sortedChildren = useMemo(
    () => sortDirectoryItemsByType(folder.children),
    [folder.children]
  );

  const handleMouseEnter = useCallback(() => {
    handleMouseHover(folder.id);
  }, [handleMouseHover, folder.id]);

  const handleMouseLeave = useCallback(() => {
    handleMouseHover(null);
  }, [handleMouseHover]);

  return (
    <div className="folder">
      <div
        onClick={toggleFolder}
        style={{
          justifyContent: `${
            hoveredItemId === folder.id ? "space-between" : ""
          }`,
        }}
        className="row-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row-center">
          {expanded ? (
            <Icon type={"arrowDown"} />
          ) : (
            <Icon type={"arrowRight"} />
          )}
          <p className={hoveredItemId === folder.id ? "highlighted-white" : ""}>
            {folder.name}
          </p>
        </div>

        {hoveredItemId === folder.id ? <Icon type={"delete"} /> : null}
      </div>
      {expanded && folder.children && (
        <div style={{ marginLeft: "20px" }}>
          {sortedChildren.map((child) => (
            <DirectoryItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
});

Folder.displayName = "Folder";

export default Folder;
