import React, { useEffect, useState } from "react";
import "./REviews.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row } from "react-bootstrap";

const Reviews = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1>Reviews Our Customer</h1>
      <section className="reviews">
        <div className="container">
          <Row>
            <Carousel
              responsive={responsive}
              autoPlay
              infinite
              autoPlaySpeed={1000}
            >
              {properties.map((data) => (
                <div className="col-10">
                  <div className="card">
                    <div className="card-block">
                      <div className="card-yazı">
                        <p className="text-center text-white">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quidem, quae culpa nihil earum quam eos numquam,
                          quod omnis provident accusamus.
                        </p>
                        <div className="card-sahip">
                          <div className="favicon">
                            <img
                              height="40"
                              width="40"
                              src="https://i.hizliresim.com/yqQzON.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="puan d-flex justify-content-center">
                        <img src="https://i.hizliresim.com/GDVyr3.png" alt="" />
                        <img src="https://i.hizliresim.com/GDVyr3.png" alt="" />
                        <img src="https://i.hizliresim.com/GDVyr3.png" alt="" />
                        <img src="https://i.hizliresim.com/GDVyr3.png" alt="" />
                        <img src="https://i.hizliresim.com/GDVyr3.png" alt="" />
                      </div>
                      <div className="isim text-center">
                        <h1>Lorem Ipsum</h1>
                        <p>
                          <i>Developer</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
