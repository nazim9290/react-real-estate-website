import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Addservice.css";

const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/properties", data)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          alert("successfully added");
        }
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="add-service">
        <h1>Add a New Property</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <div className="form-input">
              <label>Title:</label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
              />
            </div>
            <div className="form-input">
              <label>location:</label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder=""
              />
            </div>
            <div className="form-input">
              <label>Rent Or Sell?</label>
              <textarea
                type="text"
                {...register("rentorsell", { required: true })}
                placeholder="rent"
              />
            </div>
            <div className="form-input">
              <label>Price:</label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="2000"
              />
            </div>
            <div className="form-input">
              <label>Beds:</label>
              <input
                type="number"
                {...register("beds", { required: true })}
                placeholder="3"
              />
            </div>
            <div className="form-input">
              <label>SQFT:</label>
              <input
                type="number"
                {...register("sqft", { required: true })}
                placeholder="2000"
              />
            </div>
            <div className="form-input">
              <label>Baths:</label>
              <input
                type="number"
                {...register("baths", { required: true })}
                placeholder="2"
              />
            </div>
            <div className="form-input">
              <label>Image Url:</label>
              <input
                type="text"
                {...register("img", { required: true })}
                placeholder="your image url"
              />
            </div>

            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
