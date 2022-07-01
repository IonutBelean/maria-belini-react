import { Card, Button } from "react-bootstrap";

const Dress = (props) => {
  const { picture, title, price } = props;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} lei</Card.Text>
          <Button variant="primary">Adauga in cos</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dress;
