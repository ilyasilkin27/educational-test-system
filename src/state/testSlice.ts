import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, MultipleChoiceQuestion, ShortAnswerQuestion, LongAnswerQuestion } from '../utils/questionTypes';

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
      type: 'short-answer',
      text: 'What data type is this: []'
    } as ShortAnswerQuestion,
    {
      id: 'q3',
      type: 'long-answer',
      text: 'Describe your experience with React.'
    } as LongAnswerQuestion
  ],
  answers: {},
  progress: 0,
  result: ''
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
      // Проверка ответов и вывод результата
      let correctAnswers = 0;
      state.questions.forEach(question => {
        const userAnswer = state.answers[question.id];
        if (question.type === 'multiple-choice' && (question as MultipleChoiceQuestion).multiple) {
          if (JSON.stringify(userAnswer) === JSON.stringify(['HTML', 'CSS', 'JavaScript'])) {
            correctAnswers++;
          }
        } else if (question.type === 'short-answer' && userAnswer.toLowerCase() === 'array') {
          correctAnswers++;
        } else if (question.type === 'long-answer' && userAnswer !== '') {
          correctAnswers++;
        }
      });
      state.result = `You got ${correctAnswers} out of ${state.questions.length} correct`;
    },
  },
});

export const { setAnswer, submitTest } = testSlice.actions;
export default testSlice.reducer;
