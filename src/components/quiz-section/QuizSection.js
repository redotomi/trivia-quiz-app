import Question from "./Question";
import '../../style.css'
import { useEffect, useState } from "react";

export default function QuizSection() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [checked, setChecked] = useState(false);
  const [replay, setReplay] = useState(0)


  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple&encode=url3986')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [replay])

  function restartGame() {
    setChecked(false);
    setReplay((prev) => prev++)
  }

  return (
    <div className="quiz-section">
      {questions.map((res) => (
        <Question
          key={res.correct_answer}
          title={decodeURIComponent(res.question)}
          incorrectAnswers={res.incorrect_answers}
          correctAnswer={res.correct_answer}
          checked={checked}
        />
      ))}
      <div className="check-button-container">
        {checked ?
          <div>
            <span>{`You've got 5 answers right!`}</span>
            <button
              className="check-button"
              onClick={restartGame} >
              Restart Game
            </button>
          </div> :

          <button
            className="check-button"
            onClick={() => { setChecked(true) }}>
            Check answers</button>
        }
      </div>
    </div>
  );
}