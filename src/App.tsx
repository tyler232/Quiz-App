import React, { useState } from 'react';
import Start from './Components/Start';
import Score from './Components/Score';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const usePageNavigation = () => {
    const navigate = useNavigate();
    return (pageName: string) => navigate(`/${pageName.toLowerCase()}`);
  }
  const setPage = usePageNavigation();

  const toStartPage = () => {
    setPage('');
  }

  const toScorePage = () => {
    setPage('score');
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start 
                                  StartHandler={toStartPage} 
                                  />} />
        <Route path="/score" element={<Score 
                                  ScoreHandler={toScorePage} 
                                  />} />

      </Routes>
    </div>
  );
}

export default App;