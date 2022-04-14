import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);
  const { id, img, name, price, description } = service;
  const navigate = useNavigate();

  const serviceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col-md-4 mt-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description} </Card.Text>
          <Card.Text>Charges: ${price} </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              serviceDetails(id);
            }}
          >
            See Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
