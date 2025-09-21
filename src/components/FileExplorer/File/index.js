import React, { useMemo, useCallback } from "react";
import { useFileExplorer } from "../../contexts";
import Icon from "../Icon";
import { getFileExtension } from "../../../utils";

const File = React.memo(({ file }) => {
  const { handleMouseHover, hoveredItemId } = useFileExplorer();

  const fileExtension = useMemo(() => getFileExtension(file.name), [file.name]);

  const handleMouseEnter = useCallback(() => {
    handleMouseHover(file.id);
  }, [handleMouseHover, file.id]);

  const handleMouseLeave = useCallback(() => {
    handleMouseHover(null);
  }, [handleMouseHover]);

  return (
    <div
      className="file row-center"
      style={{
        justifyContent: `${hoveredItemId === file.id ? "space-between" : ""}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="row-center">
        <Icon type={fileExtension} />
        <p className={hoveredItemId === file.id ? "highlighted-white" : ""}>
          {file.name}
        </p>
      </div>
      {hoveredItemId === file.id ? <Icon type={"delete"} /> : null}
    </div>
  );
});

File.displayName = "File";

export default File;
