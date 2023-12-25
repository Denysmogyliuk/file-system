import { FlatTreeType } from "../context/types";

const useSearch = (treeData: FlatTreeType, text: string) => {
  if (!text) {
    return treeData;
  }

  const searchText = text.toLowerCase();

  const filteredData = treeData
    .filter((item) => {
      if (!item.droppable) {
        const parent = treeData.find((node) => node.id === item.parent);
        if (parent && parent.text.toLowerCase().includes(searchText)) {
          return true;
        }
      }

      return item.text.toLowerCase().includes(searchText);
    })
    .map((item, _, arr) => {
      if (item.parent !== 0 && !arr.find((node) => node.id === item.parent)) {
        return { ...item, parent: 0 };
      }

      return item;
    });

  console.log(filteredData, "filteredData");

  return filteredData;
};

export default useSearch;
