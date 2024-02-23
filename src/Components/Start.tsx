import { useState } from 'react'
import '../Style/Start.css'

interface Proc {
    StartHandler(): => void;
}

function Start(Proc: Interact) {

  return (
    <div>
        <div id="App-title">
            MATH ARITHMETIC QUIZ
        </div>
    </div>
  )
}

export default App
