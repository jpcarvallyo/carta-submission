import Icons from "../../../assets/icons";

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

export const getFileIcon = (type) => {
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
