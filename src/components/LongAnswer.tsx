import React from 'react';
import { useField } from 'formik';
import { LongAnswerQuestion } from '../utils/questionTypes';
import { Form } from 'react-bootstrap';

interface LongAnswerProps {
  question: LongAnswerQuestion;
}

const LongAnswer: React.FC<LongAnswerProps> = ({ question }) => {
  const [field] = useField(question.id);

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      <Form.Control as="textarea" {...field} className="mb-2" />
    </Form.Group>
  );
};

export default LongAnswer;
