import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import "../Properties/Properties.css";

const Propertyes = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div>
      <div>
        <NavBar />
        <section className="featured" id="featured">
          <h1 className="heading">
            <span>featured</span> properties
          </h1>
          <div className="box-container">
            <Container>
              <Row className="g-4">
                {properties.map((pt) => (
                  <Col xs={12} md={4} key={pt._id}>
                    <div className="box">
                      <div className="image-container">
                        <img src={pt.img} alt="" />
                        <div className="info">
                          <h3>3 days ago</h3>
                          <h3>for {pt.rentOrSell}</h3>
                        </div>
                        <div className="icons">
                          <Link to="#" className="fas fa-camera" />
                        </div>
                      </div>
                      <div className="content">
                        <div className="price">
                          <h3>${pt.price}/mo</h3>
                          <Link to="#">
                            <i className="fas fa-heart" />
                          </Link>
                          <Link to="#">
                            <i className="fas fa-envelope" />
                          </Link>
                          <Link to="#">
                            <i className="fas fa-phone" />
                          </Link>
                        </div>
                        <div className="location">
                          <h3>{pt.title} </h3>
                          <p>{pt.location} </p>
                        </div>
                        <div className="details">
                          <h3>
                            {" "}
                            <i className="fas fa-expand"> {pt.sqft}</i>
                          </h3>
                          <h3>
                            {" "}
                            <i className="fas fa-bed"> {pt.beds} beds</i>
                          </h3>
                          <h3>
                            {" "}
                            <i className="fas fa-bath"> {pt.baths} Baths</i>
                          </h3>
                        </div>
                        <div className="buttons">
                          <Link to="#" className="btn">
                            request info
                          </Link>
                          <Link to="#" className="btn">
                            view details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Propertyes;
