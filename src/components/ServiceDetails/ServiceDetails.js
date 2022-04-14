import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div className="container py-5">
      <h2>Welcome to Service Details {serviceId}</h2>
    </div>
  );
};

export default ServiceDetails;
