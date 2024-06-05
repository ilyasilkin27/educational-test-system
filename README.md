[![Ru Version](https://img.shields.io/badge/Ru-README-red)](README.ru.md)

# Educational Test System

This is an educational test system built with React and TypeScript. It allows users to take tests, save progress, and register new question types dynamically.

## Features

- Multiple choice questions
- Single choice questions
- Short answer questions
- Long answer questions
- Timer for test completion
- Progress saving and restoring
- Dynamic registration of new question types

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- Formik
- Bootstrap

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:ilyasilkin27/educational-test-system.git
    cd educational-test-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

### Taking a Test

1. Open the application in your browser.
2. Navigate to the home page.
3. Follow the on-screen instructions to answer the questions one by one.
4. The timer will keep track of the time remaining for the test.
5. Progress will be saved automatically, so you can refresh the page without losing your current progress.

### Registering New Question Types

1. Navigate to the "Register Question Type" page using the navigation bar.
2. Fill in the "Question Type Name" field with the name of the new question type.
3. Enter the component code in the "Component Code" field. The component should accept a `question` prop and render the appropriate input fields.
4. Click "Register" to register the new question type.
5. You can now add questions of this new type to the test.

### Example Component Code

Here is an example of a simple date input question type:

```jsx
import React from 'react';
import { useField } from 'formik';
import { Question } from '../utils/questionTypes';
import { Form } from 'react-bootstrap';

interface NewDateQuestionTypeProps {
  question: Question;
}

const NewDateQuestionType: React.FC<NewDateQuestionTypeProps> = ({ question }) => {
  const [field] = useField(question.id);

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      <Form.Control type="date" {...field} />
    </Form.Group>
  );
};

export default NewDateQuestionType;
```