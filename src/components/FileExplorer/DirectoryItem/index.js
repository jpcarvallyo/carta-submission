import React from "react";
import Folder from "../Folder";
import File from "../File";

const DirectoryItem = React.memo(({ item }) => {
  return (
    <div>
      {item.type === "folder" ? <Folder folder={item} /> : <File file={item} />}
    </div>
  );
});

DirectoryItem.displayName = "DirectoryItem";

export default DirectoryItem;
