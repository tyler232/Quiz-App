import '../Style/Start.css'
interface Props{
  StartHandler: () => void;
}

function Start({StartHandler} : Props) {

  return (
    <div>
        <h1 id="App-title"> MATH ARITHMETIC QUIZ </h1>
        <button id="start-button">
          <span className="button-text">Click Here to Start</span>
        </button>
    </div>
  )
}

export default Start;
