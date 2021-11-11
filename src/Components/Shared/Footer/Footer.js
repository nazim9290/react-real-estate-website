import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-component">
      <section className="footer">
        <div className="footer-container container">
          <Row>
            <div className="box-container">
              <div className="box col-md-3">
                <h3>branch location</h3>
                <Link to="#">india</Link>
                <Link to="#">USA</Link>
                <Link to="#">france</Link>
                <Link to="#">russia</Link>
                <Link to="#">japan</Link>
              </div>

              <div className="box col-md-3">
                <h3>quick links</h3>
                <Link to="#">home</Link>
                <Link to="#">services</Link>
                <Link to="#">featured</Link>
                <Link to="#">agents</Link>
                <Link to="#">contact</Link>
              </div>

              <div className="box col-md-3">
                <h3>extra links</h3>
                <Link to="#">my account</Link>
                <Link to="#">my favorite</Link>
                <Link to="#">my list</Link>
              </div>

              <div className="box col-md-3">
                <h3>follow us</h3>
                <Link to="#">facebook</Link>
                <Link to="#">twitter</Link>
                <Link to="#">instagram</Link>
                <Link to="#">linkedin</Link>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Footer;
