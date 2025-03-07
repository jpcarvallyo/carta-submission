import React, { useState } from "react";
import { useFileExplorer } from "../../contexts";
import DirectoryItem from "../DirectoryItem";
import Icon from "../Icon";
import { sortDirectoryItemsByType } from "../../../utils";

const Folder = ({ folder }) => {
  const [expanded, setExpanded] = useState(false);
  const { handleMouseHover, hoveredItemId } = useFileExplorer();

  const toggleFolder = () => {
    setExpanded(!expanded);
  };

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
        onMouseEnter={() => handleMouseHover(folder.id)}
        onMouseLeave={() => handleMouseHover(null)}
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
          {sortDirectoryItemsByType(folder.children).map((child) => (
            <DirectoryItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
