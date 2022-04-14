import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="container py-5 text-center">
      <h2>Welcome to Service Details {serviceId}</h2>
      <p className="lead">
        Please Check ou now for taking our services you are always most welcome
        in our Engineer world. Thanks :)
      </p>
      <div className="py-4">
        <div className="btn btn-primary" onClick={handleCheckOut}>
          Check Out Now
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
