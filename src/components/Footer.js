import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// tmux-style status bar
function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-status d-none d-md-block">
          <span className="status-chip">[anirudh-os]</span>{" "}
          <span className="term-dim">session: visitor@anirudh:~</span>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Anirudhbojji"
                style={{ color: "#39c2ff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Anirudh1225"
                style={{ color: "#39c2ff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anirudh-bojji-900256229/"
                style={{ color: "#39c2ff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/Anirudh_bojji"
                style={{ color: "#39c2ff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>

        <Col md="4" className="footer-status footer-status-right d-none d-md-block">
          <span className="status-dot" />{" "}
          <span className="term-ok">FORWARDING</span>{" "}
          <span className="term-dim">| drops: 0 | © {year}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
