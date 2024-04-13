import React, { useState } from "react";
import Icon from "../Icon";
import { getFileExtension } from "../Icon";

const File = ({ file }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: `${hovered ? "space-between" : ""}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
      {hovered ? <Icon type={"delete"} /> : null}
    </div>
  );
};

export default File;
