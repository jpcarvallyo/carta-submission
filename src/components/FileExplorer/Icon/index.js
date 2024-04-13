import { useFileExplorer } from "../../contexts";
import { getFileIcon } from "./getFileIcon";

const Icon = ({ type }) => {
  const { handleDelete } = useFileExplorer();
  const IconComponent = getFileIcon(type);

  return (
    <div
      className={`icon-wrapper ${type === "delete" ? "delete-icon" : ""}`}
      onClick={() => (type === "delete" ? handleDelete() : null)}
    >
      <IconComponent />
    </div>
  );
};

export default Icon;
