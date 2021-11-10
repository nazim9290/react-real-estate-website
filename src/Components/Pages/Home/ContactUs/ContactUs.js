import React, { useEffect, useState } from "react";
import "./Contactus.css";

const ContactUs = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div>
      <section class="agents" id="agents">
        <h1 class="heading">
          {" "}
          professional <span>agents</span>{" "}
        </h1>

        <div class="box-container">
          {properties.map((agent) => (
            <div class="box" key={agent._id}>
              <i class="fas fa-envelope"></i>
              <i class="fas fa-phone"></i>
              <img src={agent.img} alt="" />
              <h3>{agent.title}</h3>
              <span>agent</span>
              <div class="share">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
