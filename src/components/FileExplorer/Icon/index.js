import { useFileExplorer } from "../../contexts";
import { getFileIcon } from "./getFileIcon";

const Icon = ({ type }) => {
  const { handleDelete } = useFileExplorer();
  const IconComponent = getFileIcon(type);

  return (
    <div className="iconWrapper" onClick={handleDelete}>
      <IconComponent />
    </div>
  );
};

export default Icon;
