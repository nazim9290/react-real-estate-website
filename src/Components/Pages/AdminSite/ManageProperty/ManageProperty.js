import React, { useEffect, useState } from "react";
import { Row, Table, Button } from "react-bootstrap";

const UpdateProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/properties";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  //delet api call
  const deleteProperty = (id) => {
    let result = window.confirm("Are you sure you want to delete?");
    if (result) {
      fetch(`http://localhost:5000/properties/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingproperties = properties.filter(
              (property) => property._id !== id
            );
            setProperties(remainingproperties);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <h6>Manage All Property</h6>
        <Row>
          <Table borderless hover responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>email</th>
                <th>image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.img} width="100" alt="" />
                  </td>
                  <td>{item.location}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button
                      onClick={() => {}}
                      variant="primary"
                      className="mx-3"
                    >
                      update
                    </Button>
                    <Button
                      onClick={() => {
                        deleteProperty(item._id);
                      }}
                      variant="primary"
                    >
                      Delete
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

export default UpdateProperty;
