import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import useAuth from "./../../../../Hooks/useAuth";

const MyOrder = () => {
  const { user, token } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const url = `https://gentle-hamlet-37789.herokuapp.com/bookings/user?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h6>My Order</h6>
      <Row>
        <Table striped bordered hover responsive className="text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.service.img} width="100" alt="" />
                </td>
                <td>{item.service.title}</td>
                <td>{item.service.price}</td>
                <td>
                  <Button
                    variant={item.status === "pending" ? "primary" : "success"}
                  >
                    {item.status}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default MyOrder;
