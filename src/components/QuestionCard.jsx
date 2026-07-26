import { useState, useEffect, useRef } from 'react'
import './QuestionCard.css'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

function QuestionCard({ question, onNext, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [status, setStatus] = useState('unanswered')
  const [animationState, setAnimationState] = useState('entering')
  const exitingRef = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationState('visible'), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleOptionClick = (index) => {
    if (status !== 'unanswered') return
    const isCorrect = index === question.answer
    setSelectedOption(index)
    setStatus(isCorrect ? 'correct' : 'wrong')
    if (onAnswer) onAnswer(isCorrect)
  }

  const handleNext = () => {
    if (exitingRef.current) return
    exitingRef.current = true
    setAnimationState('exiting')
    setTimeout(() => {
      onNext()
    }, 300)
  }

  const getOptionClass = (index) => {
    let cls = 'question-card-option'
    if (status !== 'unanswered') {
      if (index === question.answer) {
        cls += ' option-correct'
      } else if (index === selectedOption && status === 'wrong') {
        cls += ' option-wrong'
      }
    }
    return cls
  }

  return (
    <div className={`question-card ${animationState}`}>
      <h2 className="question-card-text">{question.question}</h2>

      <div className="question-card-options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleOptionClick(index)}
            disabled={status !== 'unanswered'}
          >
            <span className="option-label">{OPTION_LABELS[index]}</span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      {status !== 'unanswered' && (
        <div className="question-card-footer">
          {status === 'correct' && (
            <p className="feedback-correct">✓ 回答正确！</p>
          )}
          {status === 'wrong' && (
            <p className="feedback-wrong">
              ✗ 回答错误，正确答案是 {OPTION_LABELS[question.answer]}
            </p>
          )}
          <button className="next-button" onClick={handleNext}>
            下一题
          </button>
        </div>
      )}
    </div>
  )
}

export default QuestionCard
