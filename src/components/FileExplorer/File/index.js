import React from "react";
import { useFileExplorer } from "../../contexts";
import Icon from "../Icon";
import { getFileExtension } from "../../../utils";

const File = ({ file }) => {
  const { handleMouseHover, hoveredItemId } = useFileExplorer();

  return (
    <div
      className="file row-center"
      style={{
        justifyContent: `${hoveredItemId === file.id ? "space-between" : ""}`,
      }}
      onMouseEnter={() => handleMouseHover(file.id)}
      onMouseLeave={() => handleMouseHover(null)}
    >
      <div className="row-center">
        <Icon type={getFileExtension(file.name)} />
        <p className={hoveredItemId === file.id ? "highlighted-white" : ""}>
          {file.name}
        </p>
      </div>
      {hoveredItemId === file.id ? <Icon type={"delete"} /> : null}
    </div>
  );
};

export default File;
