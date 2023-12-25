import { useState } from "react";

// components
import SearchField from "./components/text-field/text-field";
import FileTree from "./components/tree/tree";

// styles
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <section>
      <h1>File System</h1>
      <SearchField onInput={setSearchText} label="Search file" />
      <FileTree searchText={searchText} />
    </section>
  );
}

export default App;
