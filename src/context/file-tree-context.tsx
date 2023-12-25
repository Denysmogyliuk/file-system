import { createContext, useCallback, useContext, useState } from "react";

import { convertToFlatList, delay } from "../helpers/helpers";
import {
  FileTreeContextProps,
  FileTreeContextType,
  FlatTreeType,
} from "./types";

import { treeMock } from "./tree-mock";

const FETCH_DELAY = 500;

const fileTreeInitialContext: FileTreeContextType = {
  dropFile: () => {},
  getFiles: () => {},
  isLoading: false,
  removeFile: () => {},
  treeData: [],
};

export const FileTreeContext = createContext<FileTreeContextType>(
  fileTreeInitialContext
);

export const FileTreeContextProvider = (props: FileTreeContextProps) => {
  const { children } = props;
  const [treeData, setTreeData] = useState<FlatTreeType>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFiles = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      const treeData = convertToFlatList(treeMock);
      await delay(FETCH_DELAY);
      setTreeData(treeData);
    } catch (error) {
      console.error("Error in fetch -", error);
    } finally {
      setIsLoading(false);
    }
  }, [setTreeData]);

  const removeFile = useCallback((id: string | number) => {
    setTreeData((prev) =>
      prev.filter((item) => item.id !== id && item.parent !== id)
    );
  }, []);

  const dropFile = useCallback((updatedTree: FlatTreeType) => {
    setTreeData(updatedTree);
  }, []);

  return (
    <FileTreeContext.Provider
      value={{
        dropFile,
        getFiles,
        isLoading,
        removeFile,
        treeData,
      }}
    >
      {children}
    </FileTreeContext.Provider>
  );
};

export const useFileTreeContext = () => useContext(FileTreeContext);
