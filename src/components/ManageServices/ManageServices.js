import React from "react";
import { Button, Card } from "react-bootstrap";
import useServices from "../../CustomHooks/UseServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are sure you want to DELETE");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h3 className="my-4">Manage Services</h3>

      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mt-3" key={service._id}>
            <Card>
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description} </Card.Text>
                <Card.Text>Charges: ${service.price} </Card.Text>
                <Button
                  onClick={() => handleDelete(service._id)}
                  variant="danger"
                >
                  Delete Service
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
