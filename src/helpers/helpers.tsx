// types
import { FlatTreeType, TreeNodeType } from "../context/types";

/**
 * Function converts tree structure to a flat list for using in @minoru/react-dnd-treeview.
 *
 * @param {TreeNodeType[]} treeData - Tree data type.
 * @returns {FlatTreeType[]} - Flat data type for minoru/react-dnd-treeview.
 */
export const convertToFlatList = (treeData: TreeNodeType[]): FlatTreeType[] => {
  const result: FlatTreeType[] = [];

  function getFlatNodeTree(
    node: TreeNodeType,
    parentId: string | number | null
  ) {
    const droppable = Boolean(node.children && node.children.length > 0);

    result.push({
      id: node.id,
      parent: parentId || 0,
      droppable: droppable,
      text: node.text,
      data: node.data,
    });

    if (droppable) {
      node.children!.forEach((child) => {
        getFlatNodeTree(child, node.id);
      });
    }
  }

  treeData.forEach((node) => {
    getFlatNodeTree(node, null);
  });

  return result;
};

/**
 * Function to get delay.
 *
 * @param {number} delayTime - Delay time in ms.
 * @returns {Promise<void>} Promise that resolves after delay.
 */
export const delay = (delayTime: number) =>
  new Promise((resolve) => setTimeout(resolve, delayTime));
