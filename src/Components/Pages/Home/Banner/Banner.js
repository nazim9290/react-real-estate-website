import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://gentle-hamlet-37789.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div>
      <Carousel>
        {properties.map((item) => (
          <Carousel.Item className="item">
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
