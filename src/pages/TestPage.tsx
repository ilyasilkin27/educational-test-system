import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { RootState } from '../state/store';
import { setAnswer, submitTest } from '../state/testSlice';
import Question from '../components/Question';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import { Question as QuestionType } from '../utils/questionTypes';
import { Container, Button, Row, Col } from 'react-bootstrap';

const TestPage: React.FC = () => {
  const questions = useSelector((state: RootState) => state.test.questions as QuestionType[]);
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Timer />
          <ProgressBar className="mb-4" />
          <Formik
            initialValues={questions.reduce((acc, question) => ({ ...acc, [question.id]: question.type === 'multiple-choice' && question.multiple ? [] : '' }), {})}
            onSubmit={values => {
              Object.entries(values).forEach(([questionId, answer]) => {
                dispatch(setAnswer({ questionId, answer }));
              });
              dispatch(submitTest());
            }}
          >
            {({ values }) => (
              <Form>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <Question question={question} />
                  </div>
                ))}
                <Button variant="primary" type="submit" className="d-block mx-auto">Submit</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default TestPage;
