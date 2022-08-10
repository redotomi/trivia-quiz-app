import '../../style.css'

export default function Question() {
  return (
    <div>
      <h3 className="question-title">Question title</h3>
      <div className="question--options">
        <button>Question A</button>
        <button>Question B</button>
        <button>Question C</button>
        <button>Question D</button>
      </div>
      <hr />
    </div>
  );
}