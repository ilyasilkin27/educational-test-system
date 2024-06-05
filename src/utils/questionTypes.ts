export type QuestionType = 'multiple-choice' | 'single-choice' | 'short-answer' | 'long-answer';

interface BaseQuestion {
  id: string;
  type: QuestionType;
  text: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  multiple: boolean;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'single-choice';
  options: string[];
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
}

export interface LongAnswerQuestion extends BaseQuestion {
  type: 'long-answer';
}

export type Question = MultipleChoiceQuestion | SingleChoiceQuestion | ShortAnswerQuestion | LongAnswerQuestion;
