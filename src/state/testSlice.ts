import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, MultipleChoiceQuestion, ShortAnswerQuestion, LongAnswerQuestion } from '../utils/questionTypes';

interface TestState {
  questions: Question[];
  answers: Record<string, any>;
  progress: number;
}

const initialState: TestState = {
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      text: 'What should a frontend developer know?',
      options: ['HTML', 'CSS', 'JavaScript'],
      multiple: true
    } as MultipleChoiceQuestion,
    {
      id: 'q2',
      type: 'short-answer',
      text: 'What is your name?'
    } as ShortAnswerQuestion,
    {
      id: 'q3',
      type: 'long-answer',
      text: 'Describe your experience with React.'
    } as LongAnswerQuestion
  ],
  answers: {},
  progress: 0,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ questionId: string; answer: any }>) => {
      state.answers[action.payload.questionId] = action.payload.answer;
      state.progress = Math.round((Object.keys(state.answers).length / state.questions.length) * 100);
    },
    submitTest: (state) => {
      // Handle test submission logic
      console.log('Test submitted', state.answers);
    },
  },
});

export const { setAnswer, submitTest } = testSlice.actions;
export default testSlice.reducer;
