import React from "react";
import Services from "../../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* <div className="container py-5 my-1 ">
        <h1 className="border-start border-5 border-primary ps-2">
          Welcome Home
        </h1>
      </div> */}
      <section>
        <Banner></Banner>
      </section>
      <div className="container">
        <div className="my-5">
          <Services></Services>
        </div>
      </div>
    </div>
  );
};

export default Home;
