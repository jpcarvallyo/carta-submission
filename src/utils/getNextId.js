export const getNextId = (node, targetId) => {
  let nextNodeId = null;
  let found = false;

  const traverse = (node, targetId) => {
    if (found) {
      return;
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.id === targetId) {
          if (i < node.children.length - 1) {
            // If the target node is not the last child, get the ID of the next sibling
            nextNodeId = node.children[i + 1].id;
          } else {
            // If the target node is the last child, traverse up to find a parent with a sibling
            let parent = node.parent;
            while (parent && !parent.sibling) {
              parent = parent.parent;
            }
            if (parent && parent.sibling) {
              nextNodeId = parent.sibling.id;
            }
          }
          found = true;
          return;
        }
        if (child.children) {
          traverse(child, targetId);
        }
      }
    }
  };

  traverse(node, targetId);

  return nextNodeId;
};
