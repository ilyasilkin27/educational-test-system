import React from 'react';
import { useField } from 'formik';
import { Question } from '../utils/questionTypes';
import { Form } from 'react-bootstrap';

interface NewQuestionTypeProps {
  question: Question;
}

const NewQuestionType: React.FC<NewQuestionTypeProps> = ({ question }) => {
  const [field] = useField(question.id);

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      {/* Ваша реализация для нового типа вопроса */}
      <Form.Control {...field} />
    </Form.Group>
  );
};

export default NewQuestionType;
