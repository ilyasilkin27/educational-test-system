import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { registerQuestionComponent } from './components/questionFactory';
import MultipleChoice from './components/MultipleChoice';
import SingleChoice from './components/SingleChoice';
import ShortAnswer from './components/ShortAnswer';
import LongAnswer from './components/LongAnswer';
import NewQuestionType from './components/NewQuestionType';

const container = document.getElementById('root');
const root = createRoot(container!);

registerQuestionComponent('multiple-choice', MultipleChoice);
registerQuestionComponent('single-choice', SingleChoice);
registerQuestionComponent('short-answer', ShortAnswer);
registerQuestionComponent('long-answer', LongAnswer);
registerQuestionComponent('new-question-type', NewQuestionType);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
