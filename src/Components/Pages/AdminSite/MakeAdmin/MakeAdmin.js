import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleMakeAdmin = (e) => {
    const user = { email };
    fetch("https://gentle-hamlet-37789.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        // authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <h6>Make Admin</h6>
      <form onSubmit={handleMakeAdmin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            className="form-control"
            type="email"
            placeholder="email"
            onBlur={handleOnBlur}
          />
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
      {success && <Alert variant="success">Admin successfully Added</Alert>}
    </>
  );
};

export default MakeAdmin;
