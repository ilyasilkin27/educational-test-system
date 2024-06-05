import React from 'react';
import { useField } from 'formik';
import { SingleChoiceQuestion } from '../utils/questionTypes';
import { Form } from 'react-bootstrap';

interface SingleChoiceProps {
  question: SingleChoiceQuestion;
}

const SingleChoice: React.FC<SingleChoiceProps> = ({ question }) => {
  const [field] = useField(question.id);

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      {question.options.map(option => (
        <Form.Check
          key={option}
          type="radio"
          label={option}
          {...field}
          value={option}
          checked={field.value === option}
          className="mb-2"
        />
      ))}
    </Form.Group>
  );
};

export default SingleChoice;
