import { FlatTreeType } from "../context/types";

const useSearch = (treeData: FlatTreeType[], text: string) => {
  if (!text) {
    return treeData;
  }

  const searchText = text.trim().toLowerCase();

  const searchableNode = treeData.find((node) =>
    node.text.trim().toLowerCase().includes(searchText)
  );

  if (!searchableNode) {
    return [];
  }

  const response: FlatTreeType[] = [];

  const search = (node: FlatTreeType) => {
    const dataToAdd = treeData.filter(({ parent }) => parent === node.id);

    if (dataToAdd.length) {
      response.push(...dataToAdd);

      dataToAdd.forEach(search);
    }
  };

  search(searchableNode);

  return [{ ...searchableNode, parent: 0 }, ...response];
};

export default useSearch;
