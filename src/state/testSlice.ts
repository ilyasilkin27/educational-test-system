import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, MultipleChoiceQuestion, SingleChoiceQuestion, ShortAnswerQuestion, LongAnswerQuestion } from '../utils/questionTypes';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorageUtils';

interface TestState {
  questions: Question[];
  answers: Record<string, any>;
  progress: number;
  result: string;
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
      type: 'single-choice',
      text: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid']
    } as SingleChoiceQuestion,
    {
      id: 'q3',
      type: 'short-answer',
      text: 'What is your name?'
    } as ShortAnswerQuestion,
    {
      id: 'q4',
      type: 'long-answer',
      text: 'Describe your experience with React.'
    } as LongAnswerQuestion
  ],
  answers: {},
  progress: 0,
  result: ''
};

// Загрузка состояния из localStorage
const persistedState = loadFromLocalStorage('testState');
const testSlice = createSlice({
  name: 'test',
  initialState: persistedState ? persistedState : initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ questionId: string; answer: any }>) => {
      state.answers[action.payload.questionId] = action.payload.answer;
      state.progress = Math.round((Object.keys(state.answers).length / state.questions.length) * 100);
      saveToLocalStorage('testState', state);
    },
    submitTest: (state) => {
      let correctAnswers = 0;
      state.questions.forEach((question: Question) => {
        const userAnswer = state.answers[question.id];
        if (question.type === 'multiple-choice' && (question as MultipleChoiceQuestion).multiple) {
          if (JSON.stringify(userAnswer) === JSON.stringify(['HTML', 'CSS', 'JavaScript'])) {
            correctAnswers++;
          }
        } else if (question.type === 'single-choice' && userAnswer === 'Paris') {
          correctAnswers++;
        } else if (question.type === 'short-answer' && userAnswer === 'Your Name') {
          correctAnswers++;
        } else if (question.type === 'long-answer' && userAnswer.includes('React')) {
          correctAnswers++;
        }
      });
      state.result = `You got ${correctAnswers} out of ${state.questions.length} correct`;
      saveToLocalStorage('testState', state);
    },
    resetTest: (state) => {
      state.answers = {};
      state.progress = 0;
      state.result = '';
      saveToLocalStorage('testState', state);
    }
  },
});

export const { setAnswer, submitTest, resetTest } = testSlice.actions;
export default testSlice.reducer;
