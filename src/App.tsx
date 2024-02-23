import React, { useState } from 'react';
import Start from './Components/Start';

function App() {
  const [currentPage, setCurrentPage] = useState('Start');

  const toStartPage = () => {
    setCurrentPage('Start');
  }

  return (
    <div>
      {currentPage === 'Start' ? <Start 
                                      StartHandler={toStartPage} 
                                    /> : null}
    </div>

  );
}

export default App;