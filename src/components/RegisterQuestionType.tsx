import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { registerQuestionComponent } from './questionFactory';
import { Question } from '../utils/questionTypes';

interface RegisterQuestionTypeProps {}

const RegisterQuestionType: React.FC<RegisterQuestionTypeProps> = () => {
  const [typeName, setTypeName] = useState('');
  const [typeComponent, setTypeComponent] = useState('');

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    const NewQuestionComponent: React.FC<{ question: Question }> = ({ question }) => {
      // Example component, customize it as needed
      return (
        <Form.Group>
          <Form.Label>{question.text}</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      );
    };

    registerQuestionComponent(typeName, NewQuestionComponent);
    alert(`Registered new question type: ${typeName}`);
    setTypeName('');
    setTypeComponent('');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h3>Register New Question Type</h3>
          <Form onSubmit={handleRegister}>
            <Form.Group>
              <Form.Label>Question Type Name</Form.Label>
              <Form.Control
                type="text"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Component Code (for demonstration)</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={typeComponent}
                onChange={(e) => setTypeComponent(e.target.value)}
                placeholder="Paste your component code here"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterQuestionType;
