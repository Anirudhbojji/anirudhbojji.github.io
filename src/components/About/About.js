import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import meshImg from "../../Assets/about-mesh.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              className="cmd-heading"
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
            >
              whoami <strong className="purple">--verbose</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={meshImg} alt="mesh chip" className="img-fluid hero-art" />
          </Col>
        </Row>
        <h1 className="project-heading">
          show <strong className="purple">capabilities</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          show <strong className="purple">toolchain</strong>
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
