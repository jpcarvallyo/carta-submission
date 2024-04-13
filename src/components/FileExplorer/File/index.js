import React from "react";
import { useFileExplorer } from "../../contexts";
import Icon from "../Icon";
import { getFileExtension } from "../Icon";

const File = ({ file }) => {
  const { handleMouseHover, hoveredItemId } = useFileExplorer();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: `${hoveredItemId === file.id ? "space-between" : ""}`,
      }}
      onMouseEnter={() => handleMouseHover(file.id)}
      onMouseLeave={() => handleMouseHover(null)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon type={getFileExtension(file.name)} />
        {file.name}
      </div>
      {hoveredItemId === file.id ? <Icon type={"delete"} /> : null}
    </div>
  );
};

export default File;
