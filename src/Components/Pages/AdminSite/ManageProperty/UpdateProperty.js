import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "../AddProperty/Addservice.css";
import axios from "axios";

const UpdateProperty = () => {
  const { id } = useParams();
  const [updateProperty, setUpdateProperty] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetch(`https://gentle-hamlet-37789.herokuapp.com/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateProperty(data));
  }, []);

  const handlerChange = (e) => {
    const newUpdate = { ...updateProperty, [e.target.name]: e.target.value };
    setUpdateProperty(newUpdate);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://gentle-hamlet-37789.herokuapp.com/properties/${id}`,
        updateProperty
      )
      .then((response) => {
        console.log(response);
        if (response.data.modifiedCount) {
          alert("data update success");
          history.push("/dashboard");
        }
      });
  };
  return (
    <div className="add-service">
      <h1>UPDATE SERVICE</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-container">
          <div className="form-input">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="hil view apartment"
              value={updateProperty?.title || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>location:</label>
            <input
              type="text"
              name="location"
              placeholder="dhaka"
              value={updateProperty.location || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Rent Or Sell</label>
            <input
              type="text"
              name="rentorsell"
              placeholder="rent"
              value={updateProperty.rentorsell || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              placeholder="2000"
              value={updateProperty.price || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Price:</label>
            <input
              type="number"
              name="beds"
              placeholder="2"
              value={updateProperty.beds || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>SQFT:</label>
            <input
              type="number"
              name="sqft"
              placeholder="2"
              value={updateProperty.sqft || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Baths:</label>
            <input
              type="number"
              name="baths"
              placeholder="2"
              value={updateProperty.baths || ""}
              onChange={handlerChange}
            />
          </div>
          <div className="form-input">
            <label>Image Url:</label>
            <input
              type="text"
              name="img"
              placeholder="property image url"
              value={updateProperty.img || ""}
              onChange={handlerChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProperty;
