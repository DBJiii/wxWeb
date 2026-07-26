import { memo } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ image, title, to }) {
  return (
    <Link to={to} className="card-custom text-decoration-none">
      <img src={image} alt={title} className="card-custom-image" />
      <h3 className="card-custom-title">{title}</h3>
    </Link>
  )
}

export default memo(Card)
