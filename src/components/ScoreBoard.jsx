import { useState, useEffect, useRef } from 'react'
import './ScoreBoard.css'

function ScoreBoard({ score, popup, onPopupDone }) {
  const [displayScore, setDisplayScore] = useState(score)
  const [prevScore, setPrevScore] = useState(null)
  const [animating, setAnimating] = useState(false)
  const scoreRef = useRef(score)

  useEffect(() => {
    if (score !== scoreRef.current) {
      setPrevScore(scoreRef.current)
      setAnimating(true)
      scoreRef.current = score
    }
  }, [score])

  const handleAnimationEnd = () => {
    setDisplayScore(score)
    setAnimating(false)
    setPrevScore(null)
  }

  return (
    <div className="score-board">
      <span className="score-value">
        <span className="score-roll">
          {animating && prevScore !== null && (
            <span key="old" className="score-roll-out">{prevScore}</span>
          )}
          <span
            key={animating ? 'new' : 'static'}
            className={animating ? 'score-roll-in' : ''}
            onAnimationEnd={animating ? handleAnimationEnd : undefined}
          >
            {animating ? score : displayScore}
          </span>
        </span>
      </span>
      <span className="score-label">分</span>
      {popup && (
        <span
          key={popup.id}
          className={`score-popup ${popup.value > 0 ? 'popup-plus' : 'popup-minus'}`}
          style={{
            left: `calc(50% + ${popup.pos.x}px)`,
            top: `calc(50% + ${popup.pos.y}px)`,
          }}
          onAnimationEnd={onPopupDone}
        >
          {popup.value > 0 ? `+${popup.value}` : popup.value}
        </span>
      )}
    </div>
  )
}

export default ScoreBoard
