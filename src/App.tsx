import React, { useEffect } from 'react';
import Game from './components/Game.tsx';
import questionStore from './store/questionStore.js';

const App = () => {
  const { questions, fetchQuestions } = questionStore();

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <div className="App">
      <Game questions={questions} />
    </div>
  );
}

export default App;
