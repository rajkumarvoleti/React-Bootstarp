import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Example@gmail.com"
                  ></Form.Control>
                  <Form.Text className="text-muted">
                    We'll never share your information
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                  ></Form.Control>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://source.unsplash.com/random/200x200" />
            <Card.Body>
              <Card.Title>Card example</Card.Title>
              <Card.Text>This is an example of bootstrap card</Card.Text>
              <Button variant="primary">Button</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Item 1</Breadcrumb.Item>
            <Breadcrumb.Item>Item 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Item 3</Breadcrumb.Item>
            <Breadcrumb.Item>Item 4</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">this is a btn</Alert>
          <Button>Testing Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
