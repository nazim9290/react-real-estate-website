import React, { useEffect, useState } from "react";
import { Row, Table, Button } from "react-bootstrap";

const ManageOrders = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/bookings";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <div>
        <h6>Manage All Orders</h6>
        <Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>email</th>
                <th>image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>
                    <img src={item.service.img} width="100" alt="" />
                  </td>
                  <td>{item.service.title}</td>
                  <td>{item.service.price}</td>
                  <td>
                    <Button
                      onClick={() => {}}
                      variant={
                        item.status === "pending" ? "primary" : "success"
                      }
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
    </div>
  );
};

export default ManageOrders;
