import { useState, useMemo, useCallback } from 'react'
import QuestionCard from '../components/QuestionCard'
import ScoreBoard from '../components/ScoreBoard'
import questionsData from '../assets/questions/questions.json'
import './KnowledgeQA.css'

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function KnowledgeQA() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [popup, setPopup] = useState(null)

  const questions = useMemo(() => shuffleArray(questionsData), [])

  const handleAnswer = useCallback((isCorrect) => {
    let points
    if (isCorrect) {
      const bonus = Math.min(streak, 9)
      points = 1 + bonus
      setScore((s) => s + points)
      setStreak((s) => s + 1)
    } else {
      points = -1
      setScore((s) => Math.max(0, s - 1))
      setStreak(0)
    }
    const angle = Math.random() * 2 * Math.PI
    const distance = 30 + Math.random() * 40
    const pos = {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    }
    setPopup({ id: Date.now(), value: points, pos })
  }, [streak])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length)
  }

  const currentQuestion = questions[currentIndex]

  return (
    <div className="knowledge-qa">
      <h1 className="qa-title">知识问答</h1>
      <ScoreBoard
        score={score}
        popup={popup}
        onPopupDone={() => setPopup(null)}
      />
      <div className="qa-card-wrapper">
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onNext={handleNext}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  )
}

export default KnowledgeQA
