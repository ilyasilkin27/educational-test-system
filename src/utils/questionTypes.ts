export type QuestionType = 'multiple-choice' | 'short-answer' | 'long-answer';

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

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
}

export interface LongAnswerQuestion extends BaseQuestion {
  type: 'long-answer';
}

export type Question = MultipleChoiceQuestion | ShortAnswerQuestion | LongAnswerQuestion;
