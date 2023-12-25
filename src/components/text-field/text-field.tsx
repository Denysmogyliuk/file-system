import { useState, ChangeEvent, useCallback } from "react";
import debounce from "lodash/debounce";

// styles
import styles from "./text-field.module.css";

const DEBOUNCE_DELAY = 500;

interface PropsType {
  onInput: (text: string) => void;
  label: string;
}

export default function TextField(props: PropsType): JSX.Element {
  const { onInput, label } = props;

  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearch = useCallback(debounce(onInput, DEBOUNCE_DELAY), []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchQuery(value);
    debouncedSearch(value);
  };

  const handleClearSearchField = () => {
    onInput("");
    setSearchQuery("");
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        {label}
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            onChange={handleSearch}
            type="text"
            value={searchQuery}
            placeholder="Search"
          />
          {searchQuery && (
            <button
              className={styles.clearButton}
              onClick={handleClearSearchField}
            ></button>
          )}
        </div>
      </label>
    </form>
  );
}
