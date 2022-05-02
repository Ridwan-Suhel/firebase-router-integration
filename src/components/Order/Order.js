import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/orders?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setOrders(data);
    };
    getOrders();
  }, [user]);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="display-6 my-4 lead">HI! {orders.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
