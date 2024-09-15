import React from 'react';

import Game from './components/Game.tsx';

const App = () => {

  const questions = [
    {
      question: 'The most formal way to greet someone.',
      id: 0,
      options: [
        {
          label: 'Hi',
          isCorrect: false,
          id: '0a'
        },
        {
          label: 'Hello',
          isCorrect: false,
          id: '0b'
        },
        {
          label: 'Greetings',
          isCorrect: true,
          id: '0c'
        },
        {
          label: 'Good day',
          isCorrect: false,
          id: '0d'
        },
      ]
    },
    {
      question: 'Do they speak French in France?',
      id: 1,
      options: [
        {
          label: 'Yes',
          isCorrect: true,
          id: '1a'
        },
        {
          label: 'No',
          isCorrect: false,
          id: '1b'
        },
        {
          label: 'No',
          isCorrect: false,
          id: '1c'
        },
        {
          label: 'No',
          isCorrect: false,
          id: '1d'
        }
      ]
    },
    {
      question: 'Is a signalman more worthy than a jäger?',
      id: 2,
      options: [
        {
          label: 'Yes',
          isCorrect: true,
          id: '2a'
        },
        {
          label: 'No',
          isCorrect: false,
          id: '2b'
        },
        {
          label: 'They\'re equal',
          isCorrect: false,
          id: '2c'
        },
        {
          label: 'They\'re equal',
          isCorrect: false,
          id: '2d'
        }
      ]
    },
    {
      question: 'Helsinki is the capitol of which country?',
      id: 3,
      options: [
        {
          label: 'Estonia',
          isCorrect: false,
          id: '3a'
        },
        {
          label: 'Finland',
          isCorrect: true,
          id: '3b'
        },
        {
          label: 'Latvia',
          isCorrect: false,
          id: '3c'
        },
        {
          label: 'Sweden',
          isCorrect: false,
          id: '3d'
        }
      ]
    }
  ];

  return (
    <div className="App">
      <Game questions={questions} />
    </div>
  );
}

export default App;
