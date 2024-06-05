import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { RootState } from '../state/store';
import { setAnswer, submitTest, resetTest } from '../state/testSlice';
import Question from '../components/Question';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import { Question as QuestionType } from '../utils/questionTypes';
import { Container, Button, Row, Col, Alert } from 'react-bootstrap';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorageUtils';

const TestPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.test.questions as QuestionType[]);
  const result = useSelector((state: RootState) => state.test.result);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
    const savedIndex = loadFromLocalStorage('currentQuestionIndex');
    return savedIndex !== null ? savedIndex : 0;
  });
  const dispatch = useDispatch();

  const handleNextQuestion = (values: any) => {
    const questionId = questions[currentQuestionIndex].id;
    dispatch(setAnswer({ questionId, answer: values[questionId] }));
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      saveToLocalStorage('currentQuestionIndex', nextIndex);
    } else {
      dispatch(submitTest());
    }
  };

  const handleRestart = () => {
    dispatch(resetTest());
    setCurrentQuestionIndex(0);
    saveToLocalStorage('currentQuestionIndex', 0);
  };

  useEffect(() => {
    saveToLocalStorage('currentQuestionIndex', currentQuestionIndex);
  }, [currentQuestionIndex]);

  if (result) {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Alert variant="success" className="text-center">
              {result}
            </Alert>
            <Button variant="primary" onClick={handleRestart} className="d-block mx-auto mt-4">
              Начать тест сначала
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Timer />
          <ProgressBar className="mb-4" />
          <Formik
            initialValues={questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})}
            onSubmit={handleNextQuestion}
          >
            {({ values, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Question question={questions[currentQuestionIndex]} />
                </div>
                <Button variant="primary" type="submit" className="d-block mx-auto">
                  {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default TestPage;
