import { memo, useState } from 'react'
import './WikiEntry.css'

const WikiEntry = memo(function WikiEntry({ title, image, description, url, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="wiki-entry">
      <div
        className="wiki-entry-header"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
      >
        <span className="wiki-entry-title">{title}</span>
        <span className={`wiki-entry-chevron ${expanded ? 'expanded' : ''}`}>▶</span>
      </div>
      <div className={`wiki-entry-body ${expanded ? 'open' : ''}`}>
        <div className="wiki-entry-body-inner">
          <a
            href={url}
            className="wiki-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt={title} className="wiki-card-image" />
            <div className="wiki-card-content">
              <p className="wiki-card-text">{description}</p>
              <span className="wiki-card-link">了解更多 ↗</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
})

export default WikiEntry
