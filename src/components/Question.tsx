import React from 'react';
import MultipleChoice from './MultipleChoice';
import ShortAnswer from './ShortAnswer';
import LongAnswer from './LongAnswer';
import { Question as QuestionType, MultipleChoiceQuestion, ShortAnswerQuestion, LongAnswerQuestion } from '../utils/questionTypes';

interface QuestionProps {
  question: QuestionType;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  switch (question.type) {
    case 'multiple-choice':
      return <MultipleChoice question={question as MultipleChoiceQuestion} />;
    case 'short-answer':
      return <ShortAnswer question={question as ShortAnswerQuestion} />;
    case 'long-answer':
      return <LongAnswer question={question as LongAnswerQuestion} />;
    default:
      return null;
  }
};

export default Question;
