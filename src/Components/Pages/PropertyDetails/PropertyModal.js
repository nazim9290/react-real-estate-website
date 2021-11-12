import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useAuth from "./../../../Hooks/useAuth";

const PropertyModal = ({
  handleClose,
  show,
  properties,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    name: user.displayName,
    email: user.email,
    phone: "",
    address: "",
    status: "pending",
  };
  const [bookingData, setBookingData] = useState(initialInfo);

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...bookingData };
    newLoginData[field] = value;
    setBookingData(newLoginData);
  };
  const handleBookingSubmit = (e) => {
    // collect data
    const booking = {
      ...bookingData,
      service: properties,
    };
    console.log(booking);
    // send to the server
    fetch("https://gentle-hamlet-37789.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleClose();
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{properties.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleBookingSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                value={user.displayName}
                id="name"
                className="form-control"
                type="name"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={user.email}
                id="email"
                className="form-control"
                type="email"
                onChange={handleOnChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contact NUmber</label>
              <input
                name="phone"
                className="form-control"
                type="text"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                className="form-control"
                type="text"
                onChange={handleOnChange}
              />
            </div>

            <div className="form-group my-3">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PropertyModal;
