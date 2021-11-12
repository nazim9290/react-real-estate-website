import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import NavBar from "../../Shared/NavBar/NavBar";
import PropertyModal from "./PropertyModal";

const PropertyDetails = () => {
  const [show, setShow] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [properties, setProperties] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://gentle-hamlet-37789.herokuapp.com/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
        <Row xs={10} md={10} className="my-3">
          <Col md={6}>
            <Card.Img variant="top" src={properties.img} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="secondary" onClick={handleShow}>
                Book Now
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <PropertyModal
        handleClose={handleClose}
        show={show}
        properties={properties}
        id={id}
        setBookingSuccess={setBookingSuccess}
      />
      {bookingSuccess && (
        <Alert variant="success">Your booking successfully Added</Alert>
      )}
    </div>
  );
};

export default PropertyDetails;
