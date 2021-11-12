import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import useAuth from "./../../../../Hooks/useAuth";

const MyOrder = () => {
  const { user, token } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h6>My Order</h6>
      <Row>
        <Table striped bordered hover responsive>
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
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={item.service.img} width="100" alt="" />
                </td>
                <td>{item.service.title}</td>
                <td>{item.service.price}</td>
                <td>{item?.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default MyOrder;
