import '../style.css'

export default function WelcomeWindow(props) {
  return (
    <div className='welcome-card'>
      <h1 className='welcome--title'>Welcome to Trivia Quiz App</h1>
      <p className='welcome--paragraph'>Press the "Start Quiz" button to start playing</p>
      <button
        className='welcome--button'
        onClick={props.start}
      > Start Quiz</button>
    </div>
  );
}
