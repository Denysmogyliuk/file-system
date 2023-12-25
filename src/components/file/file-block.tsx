import classNames from "classnames";

// icons
import iconFile from "./assets/icon-file.svg";
import iconFolder from "./assets/icon-folder.svg";
import iconDelete from "./assets/icon-delete.svg";

// styles
import styles from "./file-block.module.css";

interface PropsType {
  fileName: string;
  hasChild: boolean;
  id: string | number;
  isDroppable: boolean;
  isFolder: boolean;
  isOpen: boolean;
  isRemovable: boolean;
  onDelete: (id: string | number) => void;
  onToggle: () => void;
}

const FileBlock = (props: PropsType) => {
  const {
    fileName,
    hasChild,
    id,
    isDroppable,
    isFolder,
    isOpen,
    isRemovable,
    onDelete,
    onToggle,
  } = props;

  const handleDeleteItem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    onDelete(id);
  };

  return (
    <div
      className={classNames(
        styles.fileWrapper,
        !isDroppable && styles.fileDeniedDrop
      )}
      onClick={onToggle}
    >
      {hasChild && (
        <div
          className={classNames(
            styles.triangle,
            isOpen && styles.triangleToBottom
          )}
        ></div>
      )}

      <img className={styles.itemLogo} src={isFolder ? iconFolder : iconFile} />

      <span className={styles.fileName}>{fileName}</span>

      {isRemovable && (
        <button onClick={handleDeleteItem} className={styles.deleteButton}>
          <img
            className={styles.deleteIcon}
            src={iconDelete}
            alt="Delete file."
          />
        </button>
      )}
    </div>
  );
};

export default FileBlock;
