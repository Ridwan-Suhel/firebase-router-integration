import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  console.log(service);
  const { img, name, price, description } = service;

  return (
    <div className="col-md-4 mt-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description} </Card.Text>
          <Card.Text>Charges: ${price} </Card.Text>
          <Button variant="primary">Check Out Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
