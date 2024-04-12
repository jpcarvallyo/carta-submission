import Icon from "../Icon";
import { getFileExtension } from "../Icon";

const File = ({ file }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon type={getFileExtension(file.name)} />
      {file.name}
    </div>
  );
};

export default File;
