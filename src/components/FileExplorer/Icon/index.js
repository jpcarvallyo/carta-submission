import { useFileExplorer } from "../../contexts";
import { getFileIcon } from "./getFileIcon";

const Icon = ({ type }) => {
  const { handleDelete } = useFileExplorer();
  const IconComponent = getFileIcon(type);

  return (
    <div onClick={handleDelete}>
      <IconComponent />
    </div>
  );
};

export default Icon;
