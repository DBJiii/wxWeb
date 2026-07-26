import { useState, useMemo, useCallback, useRef } from "react";
import QuestionCard from "../components/QuestionCard";
import ScoreBoard from "../components/ScoreBoard";
import questionsData from "../assets/questions/questions.json";
import "./KnowledgeQA.css";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function KnowledgeQA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [popup, setPopup] = useState(null);
  const [finished, setFinished] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const specialRef = useRef(false);
  const specialDisabledRef = useRef(false);

  const normalQuestions = useMemo(
    () => shuffleArray(questionsData.filter((q) => q.id !== 265)),
    [],
  );

  const specialQuestion = useMemo(
    () => questionsData.find((q) => q.id === 265),
    [],
  );

  const handleAnswer = useCallback(
    (isCorrect, optionIndex) => {
      if (specialRef.current) {
        if (optionIndex === 0) {
          setFinished(true);
        } else {
          specialRef.current = false;
          specialDisabledRef.current = true;
          setShowSpecial(false);
          setCurrentIndex((prev) => prev);
        }
        return;
      }
      let points;
      if (isCorrect) {
        const bonus = Math.min(streak, 9);
        points = 1 + bonus;
        setScore((s) => s + points);
        setStreak((s) => s + 1);
      } else {
        points = -1;
        setScore((s) => Math.max(0, s - 1));
        setStreak(0);
      }
      const angle = Math.random() * 2 * Math.PI;
      const distance = 30 + Math.random() * 40;
      const pos = {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
      setPopup({ id: Date.now(), value: points, pos });
    },
    [streak],
  );

  const handleNext = () => {
    if (!specialDisabledRef.current && Math.random() < 0.01) {
      specialRef.current = true;
      setShowSpecial(true);
      return;
    }
    if (currentIndex + 1 >= normalQuestions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setPopup(null);
    setFinished(false);
    setShowSpecial(false);
    specialRef.current = false;
    specialDisabledRef.current = false;
  };

  if (finished) {
    const maxScore = normalQuestions.length * 10;
    const pct = Math.round((score / maxScore) * 100);

    return (
      <div className="knowledge-qa">
        <h1 className="qa-title">知识问答</h1>
        <div className="qa-completion">
          <div className="completion-icon">🎉</div>
          <h2 className="completion-title">
            没想到真的有人完成了所有题目!欣慰(*ˊᗜˋ*)
          </h2>
          <p className="completion-sub">
            你已完成全部 {normalQuestions.length} 道题目，强大(゜∀゜)ﾉ✧彡
          </p>
          <div className="completion-score">
            <span className="completion-score-value">{score}</span>
            <span className="completion-score-label">分</span>
          </div>
          <p className="completion-pct">
            满分 {maxScore} 分，正确率 {pct}%
          </p>
          <button className="restart-button" onClick={handleRestart}>
            再来一轮
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = showSpecial
    ? specialQuestion
    : normalQuestions[currentIndex];

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
          key={showSpecial ? "special" : currentQuestion.id}
          question={currentQuestion}
          correctAnswers={showSpecial ? [0, 1] : undefined}
          onNext={handleNext}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}

export default KnowledgeQA;
