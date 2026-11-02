import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineFilePdf } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

const papers = [
  {
    title:
      "Utilizing Graph Convolutional Networks for GitHub User Classification",
    venue:
      "Indian Journal of Technical Education (ISTE), Vol. 47, No. 2, pp. 133–140",
    year: "2024",
    authors:
      "V. Battula, A. Bojji, B.S. Reddy, P. Chacham",
    pdf: "https://isteonline.in/Datafiles/cms/ISTE%20Journal/Qtrly%20issue%20Apr%20to%20Jun%202024%20for%20web%20uploading%20(1).pdf",
    code: "https://github.com/Anirudhbojji/github-user-classification-gcn",
  },
  {
    title:
      "Enhancing Telugu Sarcasm Classification Models with Word Embeddings in Imbalanced Datasets",
    venue:
      "Int'l Conference on Frontiers of Intelligent Computing: Theory and Applications (FICTA), Springer",
    year: "2024",
    authors:
      "V. Battula, N.T. Nune, A. Bojji, B.S. Reddy, C. Namani, S. Polisetty, P. Chacham et al.",
    code: "https://github.com/Anirudhbojji/telugu-sarcasm-classification",
  },
  {
    title:
      "Enhancing Telugu Abusive Language Detection Using Word Embeddings and BERT Models",
    venue:
      "2nd Int'l Conference on Recent Trends in Microelectronics",
    year: "2024",
    authors:
      "V. Battula, N.T. Nune, V. Guptha, S.S. Rampuri, P. Chacham, K. Pyarasani et al.",
  },
  {
    title: "Automated Detection of Offensive Content in Social Media",
    venue: "IRSD 2024",
    year: "2024",
    authors:
      "V. Battula, P. Chacham, K. Pyarasani, A. Bojji, N.T. Nune, C. Namani",
  },
];

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          show <strong className="purple">control-plane</strong>
        </h1>
        <p className="cmd-sub">
          # publications — peer-reviewed state, distributed via journals and
          conferences instead of BGP
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {papers.map((p, i) => (
            <Col md={6} className="project-card" key={i}>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.2em" }}>
                    {p.title}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    <span className="purple">{p.venue}</span> · {p.year}
                    <br />
                    <small>{p.authors}</small>
                  </Card.Text>
                  {p.pdf && (
                    <Button
                      variant="primary"
                      href={p.pdf}
                      target="_blank"
                      style={{ marginRight: "10px" }}
                    >
                      <AiOutlineFilePdf /> &nbsp;Paper
                    </Button>
                  )}
                  {p.code && (
                    <Button variant="primary" href={p.code} target="_blank">
                      <AiFillGithub /> &nbsp;Code
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", zIndex: 2 }}>
          <Col md={12} style={{ textAlign: "center", paddingTop: "10px" }}>
            <Button
              variant="primary"
              href="https://scholar.google.com/citations?user=QZ075QoAAAAJ"
              target="_blank"
            >
              <SiGooglescholar /> &nbsp;Google Scholar Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
