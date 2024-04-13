import Icons from "../../../assets/icons";
import { useFileExplorer } from "../../contexts";

const fileTypeIcons = {
  arrowDown: Icons.ArrowDownFileIcon,
  arrowRight: Icons.ArrowRightFileIcon,
  cssFile: Icons.CssFileIcon,
  defaultFile: Icons.DefaultFileIcon,
  gitFile: Icons.GitFileIcon,
  imageFile: Icons.ImageFileIcon,
  jsFile: Icons.JsFileIcon,
  jsonFile: Icons.JsonFileIcon,
  readmeFile: Icons.ReadMeFileIcon,
  x: Icons.XFileIcon,
  yarnFile: Icons.YarnFileIcon,
};

export const getFileExtension = (fileName) => {
  // Find the last occurrence of "." in the file name
  const lastDotIndex = fileName.lastIndexOf(".");

  // If "." is not found or it's the last character in the string, return an empty string
  if (lastDotIndex === -1 || lastDotIndex === fileName.length - 1) {
    return "";
  }

  // Get the substring after the last "."
  const extension = fileName.slice(lastDotIndex + 1);

  // Convert the extension to lowercase to handle cases like '.JPG' or '.HTML'
  return extension.toLowerCase();
};

const retrieveFileIcon = (type) => {
  switch (type) {
    case "gitignore": {
      return fileTypeIcons.gitFile;
    }
    case "arrowRight": {
      return fileTypeIcons.arrowRight;
    }
    case "arrowDown": {
      return fileTypeIcons.arrowDown;
    }
    case "md": {
      return fileTypeIcons.readmeFile;
    }
    case "css": {
      return fileTypeIcons.cssFile;
    }
    case "js": {
      return fileTypeIcons.jsFile;
    }
    case "json": {
      return fileTypeIcons.jsonFile;
    }
    case "png": {
      return fileTypeIcons.imageFile;
    }
    case "jpg": {
      return fileTypeIcons.imageFile;
    }
    case "ico": {
      return fileTypeIcons.imageFile;
    }
    case "jpeg": {
      return fileTypeIcons.imageFile;
    }
    case "svg": {
      return fileTypeIcons.imageFile;
    }
    case "lock": {
      return fileTypeIcons.yarnFile;
    }
    case "delete": {
      return fileTypeIcons.x;
    }
    default: {
      return fileTypeIcons.defaultFile;
    }
  }
};

const Icon = ({ type }) => {
  const { handleDelete } = useFileExplorer();
  const IconComponent = retrieveFileIcon(type);

  return (
    <div onClick={handleDelete}>
      <IconComponent />
    </div>
  );
};

export default Icon;
