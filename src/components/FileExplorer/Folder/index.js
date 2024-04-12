import React, { useState } from "react";
import DirectoryItem from "../DirectoryItem";
import Icon from "../Icon";

const Folder = ({ folder }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleFolder = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div
        onClick={toggleFolder}
        style={{ display: "flex", alignItems: "center" }}
      >
        {expanded ? <Icon type={"arrowDown"} /> : <Icon type={"arrowRight"} />}
        {folder.name}
      </div>
      {expanded && folder.children && (
        <div style={{ marginLeft: "20px" }}>
          {folder.children.map((child) => (
            <DirectoryItem key={child.id} item={child} />
          ))}
        </div>
      )}
      {/* <Icon type={"arrowDown"} /> */}
    </div>
  );
};

export default Folder;
