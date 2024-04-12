import React from "react";
import Folder from "../Folder";
import File from "../File";

const DirectoryItem = ({ item }) => {
  return (
    <div>
      {item.type === "folder" ? <Folder folder={item} /> : <File file={item} />}
    </div>
  );
};

export default DirectoryItem;
