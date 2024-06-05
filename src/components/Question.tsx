import React from 'react';
import { Question as QuestionType } from '../utils/questionTypes';
import { createQuestionComponent } from './questionFactory';

interface QuestionProps {
  question: QuestionType;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div>
      {createQuestionComponent(question)}
    </div>
  );
};

export default Question;
