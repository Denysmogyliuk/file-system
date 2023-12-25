import { useEffect } from "react";

import { DndProvider } from "react-dnd";
import {
  getBackendOptions,
  MultiBackend,
  Tree,
} from "@minoru/react-dnd-treeview";

// context
import { useFileTreeContext } from "../../context/file-tree-context";

// helpers
import useSearch from "../../hooks/use-search";

// components
import FileViewBlock from "../file/file";

// styles
import styles from "./tree.module.css";

interface PropsType {
  searchText: string;
}

export default function FileTree(props: PropsType): JSX.Element {
  const { searchText } = props;

  const { dropFile, getFiles, isLoading, removeFile, treeData } =
    useFileTreeContext();

  const resultData = useSearch(treeData, searchText);

  useEffect(() => {
    getFiles();
  }, [getFiles]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!resultData.length && searchText) {
    return <h3>No result</h3>;
  }

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        canDrag={(item) => item?.data?.isDroppable ?? false}
        onDrop={dropFile}
        rootId={0}
        tree={resultData}
        classes={{
          container: styles.fileContainer,
          listItem: styles.listItem,
          root: styles.fileTree,
        }}
        render={(node, { isOpen, onToggle, hasChild }) => (
          <FileViewBlock
            fileName={node.text}
            hasChild={hasChild}
            id={node.id}
            isDroppable={node.data?.isDroppable ?? false}
            isFolder={Boolean(node.droppable)}
            isOpen={isOpen}
            isRemovable={node.data?.isRemovable ?? false}
            onDelete={removeFile}
            onToggle={onToggle}
          />
        )}
      />
    </DndProvider>
  );
}
