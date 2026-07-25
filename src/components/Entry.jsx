import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Entry.css'

function Entry({ label, to, children, parentEntry }) {
  const [open, setOpen] = useState(false)
  const hasChildren = children && children.length > 0
  const isChild = !!parentEntry

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault()
      setOpen(!open)
    }
  }

  return (
    <Link
      to={to || '#'}
      className={`entry${isChild ? ' entry--child' : ''}`}
      onClick={handleClick}
    >
      <div className="entry-label">{label}</div>

      {hasChildren && open && (
        <div className="entry-dropdown" onClick={(e) => e.stopPropagation()}>
          {children.map((child) => (
            <Entry
              key={child.label}
              {...child}
              parentEntry={label}
            />
          ))}
        </div>
      )}
    </Link>
  )
}

export default Entry
