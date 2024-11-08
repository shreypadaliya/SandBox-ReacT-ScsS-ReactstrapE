import React from "react";
import "../scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import services from "../data/servicesData";

function whatwedo() {
  return (
    <div className="whatwedomain" id="pages">
      <div className="whatwedosemimain">
        <div className="container whatwedocontwrap">
          <div className="whatwetextwrap">
            <div className="whatdohead">WHAT WE DO?</div>
            <div className="whatdosub">
              The service we offer is specifically designed to meet your needs.
            </div>
          </div>

          {services.map((service, index) => (
            <div className="webdesignmain" key={index}>
              <div className="webdesignimg">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="webdesigncontent">
                <div className="webheading">{service.title}</div>
                <div className="webpara">{service.description}</div>
                {service.checklist.map((item, idx) => (
                  <div className="webcheckwrap" key={idx}>
                    <div className="checkwraper">
                      <img src={item.icon} alt="checkmark" />
                    </div>
                    <div className="webcheckinfo">{item.text}</div>
                  </div>
                ))}
                <div>
                  <button className="morebutton">More Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default whatwedo;
