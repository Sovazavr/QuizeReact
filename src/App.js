
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreateQuize } from './components/CreateQuize/CreateQuize';

import { Quest } from './components/Game/Quest';

import { LeftNavBar } from './components/LeftNavBar';
import './index.scss';


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];





function App() {
  const [step, setStep] = useState(0);
  const question = questions[step]

  const [correct, setCorrect] = useState(0)

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (


    <div className="App">
      <div className='wrapbar'>
        <LeftNavBar />
      </div>
      <Routes>
        <Route path="/" element={<Quest step={step} question={question}
          questions={questions} onClickVariant={onClickVariant} correct={correct} />} />
        <Route path="/createquize" element={<CreateQuize />} />
      </Routes>
    </div>

  );
}

export default App;
