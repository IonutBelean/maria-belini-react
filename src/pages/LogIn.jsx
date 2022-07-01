import { Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";

const LogIn = () => {
  return (
    <div>
      <Layout>
        <Form>
          <Form.Group controlId="Username">
            <Form.Label>Nume utilizator:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Adresa email:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>Parola:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Layout>
    </div>
  );
};

export default LogIn;
