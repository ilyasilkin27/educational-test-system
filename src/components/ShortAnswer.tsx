import React from 'react';
import { useField } from 'formik';
import { ShortAnswerQuestion } from '../utils/questionTypes';
import { Form } from 'react-bootstrap';

interface ShortAnswerProps {
  question: ShortAnswerQuestion;
}

const ShortAnswer: React.FC<ShortAnswerProps> = ({ question }) => {
  const [field] = useField(question.id);

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      <Form.Control type="text" {...field} className="mb-2" />
    </Form.Group>
  );
};

export default ShortAnswer;
