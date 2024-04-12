import React, { useState } from "react";
import File from "../File";
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
          {folder.children.map((child) =>
            child.type === "folder" ? (
              <Folder key={child.id} folder={child} />
            ) : (
              <File key={child.id} file={child} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
