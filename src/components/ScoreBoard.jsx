import './ScoreBoard.css'

function ScoreBoard({ score, popup, onPopupDone }) {
  return (
    <div className="score-board">
      <span className="score-value">{score}</span>
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
