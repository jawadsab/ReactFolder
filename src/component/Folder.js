import { useState } from "react";
import "../styles.css";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <div className="item" onClick={() => setExpand(!expand)}>
          <span className="icon" aria-label="folder" role="img">
            📁
          </span>
          <span className="filename">{explorer.name}</span>
          <div></div>
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: "8px" }}>
          {explorer.items.map((item) => (
            <Folder explorer={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="item">
        <div>
          <span className="icon" aria-label="folder" role="img">
            📄
          </span>
          <span className="filename">{explorer.name}</span>
        </div>
      </div>
    );
  }
};

export default Folder;
