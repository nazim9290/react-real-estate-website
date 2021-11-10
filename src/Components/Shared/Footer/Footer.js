import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-component">
      <section className="footer">
        <Row>
          <div className="footer-container container">
            <div className="box-container">
              <div className="box col-md-3">
                <h3>branch location</h3>
                <a href="#">india</a>
                <a href="#">USA</a>
                <a href="#">france</a>
                <a href="#">russia</a>
                <a href="#">japan</a>
              </div>

              <div className="box col-md-3">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">services</a>
                <a href="#">featured</a>
                <a href="#">agents</a>
                <a href="#">contact</a>
              </div>

              <div className="box col-md-3">
                <h3>extra links</h3>
                <a href="#">my account</a>
                <a href="#">my favorite</a>
                <a href="#">my list</a>
              </div>

              <div className="box col-md-3">
                <h3>follow us</h3>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
              </div>
            </div>
          </div>
        </Row>
      </section>
    </div>
  );
};

export default Footer;
