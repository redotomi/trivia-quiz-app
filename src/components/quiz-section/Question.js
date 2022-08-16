import { useEffect, useState } from 'react';
import '../../style.css'

export default function Question(props) {
  const [answers, setAnswers] = useState(sortAnswers(props.correctAnswer, props.incorrectAnswers))
  const [answer, setAnswer] = useState('')

  function sortAnswers(answer, array) {
    const newArray = []
    const randomIndex = Math.floor(Math.random() * 3)
    array.forEach((elem, i) => {
      if (i === randomIndex) {
        newArray.push({
          answer: decodeURIComponent(answer),
          isCorrect: true

        });
        newArray.push({
          answer: decodeURIComponent(elem),
          isCorrect: false
        })
      }
      else {
        newArray.push({
          answer: decodeURIComponent(elem),
          isCorrect: false
        })
      }
    })
    return newArray;
  }

  const answerElements = answers.map((element) => (
    <button
      style={props.checked ?
        {
          backgroundColor: answer === element.answer ?
            element.isCorrect ?
              '#94D7A2' : '#F8BCBC' :
            element.isCorrect ?
              '#94D7A2' : 'white',

          border: answer === element.answer ?
            element.isCorrect ?
              'none' : 'none' :
            element.isCorrect ?
              'none' : '1px solid #a8b2e0',

          color: answer === element.answer ?
            element.isCorrect ?
              '#293264' : '#a8b2e0' :
            element.isCorrect ?
              '#293264' : '#a8b2e0'

        } :
        {
          backgroundColor: answer === element.answer ? '#d0d7ff' : 'white',
          border: answer === element.answer ? 'none' : '1px solid #4D5B9E'
        }
      }

      onClick={props.checked ?
        () => { } :
        () => { setAnswer(element.answer) }
      }

      className='question--answers'>
      {element.answer}</button>
  ))

  return (
    <div>
      <h3 className="question-title">{props.title}</h3>
      <div className="question--options">
        {answerElements}
      </div>
      <div className='question--divider'></div>
    </div>
  );
}