import React from 'react';
import { useField } from 'formik';
import { MultipleChoiceQuestion } from '../utils/questionTypes';
import { Form, FormCheck } from 'react-bootstrap';

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ question }) => {
  const [field, , helpers] = useField(question.id);
  const handleChange = (option: string) => {
    if (question.multiple) {
      const newValue = field.value.includes(option)
        ? field.value.filter((v: string) => v !== option)
        : [...field.value, option];
      helpers.setValue(newValue);
    } else {
      helpers.setValue([option]);
    }
  };

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      {question.options.map(option => (
        <FormCheck
          key={option}
          type="checkbox"
          label={option}
          checked={field.value.includes(option)}
          onChange={() => handleChange(option)}
          className="mb-2"
        />
      ))}
    </Form.Group>
  );
};

export default MultipleChoice;
