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

// Object lookup for better performance than switch statement
const iconMap = {
  gitignore: "gitFile",
  arrowRight: "arrowRight",
  arrowDown: "arrowDown",
  md: "readmeFile",
  css: "cssFile",
  js: "jsFile",
  json: "jsonFile",
  png: "imageFile",
  jpg: "imageFile",
  ico: "imageFile",
  jpeg: "imageFile",
  svg: "imageFile",
  lock: "yarnFile",
  delete: "x",
};

export const getFileIcon = (type) => {
  const iconType = iconMap[type] || "defaultFile";
  return fileTypeIcons[iconType];
};
