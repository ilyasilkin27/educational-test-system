import React from 'react';
import { Question as QuestionType } from '../utils/questionTypes';

const questionComponents: Record<string, React.FC<any>> = {};

export const registerQuestionComponent = (type: string, component: React.FC<any>) => {
  questionComponents[type] = component;
};

export const createQuestionComponent = (question: QuestionType): React.ReactNode => {
  const Component = questionComponents[question.type];
  return Component ? React.createElement(Component, { question }) : null;
};
