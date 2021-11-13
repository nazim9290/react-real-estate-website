import React, { useEffect, useState } from "react";
import "./Contactus.css";

const ContactUs = () => {
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/agent")
      .then((res) => res.json())
      .then((data) => setAgent(data));
  }, []);
  return (
    <div>
      <section className="agents" id="agents">
        <h1 className="heading">
          {" "}
          professional <span>agents</span>{" "}
        </h1>

        <div className="box-container">
          {agent.map((agent) => (
            <div className="box" key={agent._id}>
              <i className="fas fa-envelope"></i>
              <i className="fas fa-phone"></i>
              <img src={agent.img} alt="" />
              <h3>{agent.name}</h3>
              <span>agent</span>
              <div className="share">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
