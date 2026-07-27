import { memo, useState } from "react";
import "./Entry.css";

const Entry = memo(function Entry({ title, items, level = 1, url }) {
  const isBranch = Array.isArray(items) && items.length > 0;
  const isLeaf = !!url;
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (isBranch) {
      setExpanded(!expanded);
    }
  };

  const levelClass = `entry-level-${Math.min(level, 4)}`;

  if (isLeaf) {
    return (
      <div className={`entry entry-leaf ${levelClass}`}>
        <a
          href={url}
          className="entry-header entry-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="entry-title">{title}</span>
          <span className="entry-icon entry-external-icon">↗</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`entry entry-branch ${levelClass}`}>
      <div
        className="entry-header"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <span className="entry-title">{title}</span>
        {isBranch && (
          <span className={`entry-chevron ${expanded ? "expanded" : ""}`}>
            ▶
          </span>
        )}
      </div>
      <div className={`entry-children ${expanded ? "open" : ""}`}>
        <div className="entry-children-inner">
          {items.map((child) => (
            <Entry
              key={child.id}
              title={child.title}
              items={child.children}
              url={child.url}
              level={level + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Entry;
