import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../CustomHooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetails();
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    event.target.value = "";

    const order = {
      userName: event.target.name.value,
      email: event.target.email.value,
      service: event.target.service.value,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
      price: event.target.price.value,
    };
    axios.post("http://localhost:5000/orders", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Order completed succesfully!");
        event.target.reset();
      }
    });
  };

  return (
    <section>
      <div className="container text-center my-5 py-5">
        <h2>Welcome To Check Out Page</h2>
        <p className="lead">
          Please Order - <span className="text-primary">{service.name}</span>{" "}
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handlePlaceOrder}>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={user?.email}
                  required
                  readOnly
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="service"
                  placeholder="Service"
                  className="form-control"
                  value={service?.name}
                  required
                  readOnly
                  disabled
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="form-control"
                  value={service?.price}
                  required
                  readOnly
                  disabled
                />
              </div>
              <div className="mb-2">
                <input
                  type="submit"
                  placeholder="Place Order"
                  className="btn btn-primary px-5 text-left"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
