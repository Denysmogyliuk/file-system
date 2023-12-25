import { NodeModel } from "@minoru/react-dnd-treeview";
import { ReactNode } from "react";

export interface DataType {
  isRemovable: boolean;
  isDroppable: boolean;
}

export type FlatTreeType = NodeModel<DataType>[];

export interface TreeNodeType {
  id: string | number;
  text: string;
  data?: {
    isRemovable: boolean;
    isDroppable: boolean;
  };
  children?: TreeNodeType[];
}

export interface FileTreeContextType {
  dropFile: (item: FlatTreeType) => void;
  getFiles: () => void;
  isLoading: boolean;
  removeFile: (id: string | number) => void;
  treeData: FlatTreeType;
}

export interface FileTreeContextProps {
  children: ReactNode;
}
