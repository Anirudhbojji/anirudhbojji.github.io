import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Bojji_Anirudh_Resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume" style={{ justifyContent: "center", paddingTop: "30px" }}>
        <iframe
          src={pdf}
          title="Anirudh Bojji Resume"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "1150px",
            border: "none",
          }}
        />
      </Row>

      <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
