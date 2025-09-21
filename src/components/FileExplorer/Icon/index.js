import React, { useMemo, useCallback } from "react";
import { useFileExplorer } from "../../contexts";
import { getFileIcon } from "./getFileIcon";

const Icon = React.memo(({ type }) => {
  const { handleDelete } = useFileExplorer();

  const IconComponent = useMemo(() => getFileIcon(type), [type]);

  const handleClick = useCallback(() => {
    if (type === "delete") {
      handleDelete();
    }
  }, [type, handleDelete]);

  return (
    <div
      className={`icon-wrapper ${type === "delete" ? "delete-icon" : ""}`}
      onClick={handleClick}
    >
      <IconComponent />
    </div>
  );
});

Icon.displayName = "Icon";

export default Icon;
