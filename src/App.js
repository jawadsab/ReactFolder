import { useState } from "react";
import Folder from "./component/Folder";
import "./styles.css";
import explorer from "./data/explorer";

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div className="appContainer">
      <div className="explorer-container">
        <p className="explorer-title">Explorer</p>
        <Folder explorer={explorerData} />
      </div>
    </div>
  );
};

export default App;
