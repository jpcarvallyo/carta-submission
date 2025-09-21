export const getNextId = (node, targetId) => {
  // Flatten the tree structure for more efficient lookup
  const flattenTree = (node, parent = null, index = 0) => {
    const items = [];

    if (node.children) {
      node.children.forEach((child, childIndex) => {
        items.push({
          ...child,
          parent,
          parentIndex: index,
          siblingIndex: childIndex,
          hasNextSibling: childIndex < node.children.length - 1,
        });

        if (child.children) {
          items.push(...flattenTree(child, node, childIndex));
        }
      });
    }

    return items;
  };

  const flatItems = flattenTree(node);
  const targetIndex = flatItems.findIndex((item) => item.id === targetId);

  if (targetIndex === -1) {
    return null;
  }

  const targetItem = flatItems[targetIndex];

  // Check if there's a next sibling
  if (targetItem.hasNextSibling) {
    const parentChildren = targetItem.parent?.children || node.children;
    const targetSiblingIndex = targetItem.siblingIndex + 1;
    return parentChildren[targetSiblingIndex]?.id || null;
  }

  // If no next sibling, find the next item in the flattened array
  if (targetIndex < flatItems.length - 1) {
    return flatItems[targetIndex + 1].id;
  }

  return null;
};
