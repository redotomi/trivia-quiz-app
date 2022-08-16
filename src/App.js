import React, { useState } from 'react';
import './style.css'
import WelcomeWindow from './components/WelcomeWindow';
import QuizSection from './components/quiz-section/QuizSection';

function App() {
  const [start, setStart] = useState(false);

  function startGame() {
    setStart(true)
  }

  return (
    <main>
      {
        start ?
          <QuizSection /> :
          <WelcomeWindow
            start={startGame}
          />
      }
    </main>
  );
}

export default App;
