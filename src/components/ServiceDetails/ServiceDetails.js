import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../CustomHooks/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate(`/checkout/${serviceId}`);
  };
  const [service, setService] = useServiceDetails();

  // const [service, setService] = useState({});

  // useEffect(() => {
  //   const url = `http://localhost:5000/service/${serviceId}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, []);

  return (
    <div className="container py-5 text-center">
      <h2>
        Welcome to <span className="text-success">{service.name}</span> Service{" "}
      </h2>
      <p className="lead">
        Please Check out now. You are always most welcome in our Engineer world
        for taking services. Thanks :)
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img src={service.img} alt="Service-pic" className="img-fluid" />
        </div>
      </div>
      <div className="py-4">
        <div className="btn btn-primary" onClick={handleCheckOut}>
          Check Out Now
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
