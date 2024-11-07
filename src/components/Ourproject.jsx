import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import projectData from "../data/projectData";
import "../scss/Ourproject.scss";

const Ourproject = () => {
  return (
    <div className="ourprojectmain" id="projects">
      <div className="ourprojectsemimain">
        <Container className="ourprojectcon">
          <div className="ourprojectconsemimain">
            <div className="projectwrap">
              <h2 className="projectheadmain">OUR PROJECT</h2>
              <p className="projectparahead">
                Check out some of our awesome projects with creative ideas and
                great design.
              </p>
            </div>
            <Row className="grid-container">
              {projectData.map((project) => (
                <Col
                  key={project.id}
                  xs="12"
                  sm="6"
                  lg="4"
                  className="grid-item"
                >
                  <div className="ourprojectimageholder">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="ourprojectfinalimage"
                    />
                  </div>
                  <h3 className="projecthead">{project.title}</h3>
                  <p className="projectpara">{project.category}</p>
                </Col>
              ))}
            </Row>
            <div className="probuttonholder">
              <Button color="primary" className="projectbutton">
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Ourproject;
