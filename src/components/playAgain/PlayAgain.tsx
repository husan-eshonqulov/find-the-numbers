import './PlayAgain.css';

function PlayAgain(props: any) {
  return (
    <div>
      <button className="btn btn-secondary playAgain" onClick={props.handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}

export default PlayAgain;
