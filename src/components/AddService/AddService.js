import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-md-8">
          <h3 className="my-4">Add Services</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control mb-3"
              placeholder="Enter service name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <p className="text-danger ">
              {errors.name?.type === "required" && "Service name is required"}
            </p>
            <textarea
              className="form-control mb-3"
              placeholder="Enter service decription"
              {...register("description", { required: true })}
            ></textarea>
            <p className="text-danger ">
              {errors.description?.type === "required" &&
                "Service description is required"}
            </p>
            <input
              className="form-control mb-3"
              placeholder="Enter service price"
              type="number"
              {...register("price", { required: true })}
            />
            <p className="text-danger ">
              {errors.price?.type === "required" && "Service price is required"}
            </p>
            <input
              className="form-control mb-3"
              placeholder="Enter service photo URL"
              type="text"
              {...register("img", { required: true })}
            />
            <p className="text-danger ">
              {errors.img?.type === "required" &&
                "Service Photo Url is required"}
            </p>
            <input
              type="submit"
              value="Add Service"
              className="btn btn-primary px-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
