import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="cmd-heading" style={{ fontSize: "2.4em" }}>
              whoami <span className="purple">--introduce</span>
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">network engineer</b> working on
              cloud infrastructure — the routing, tunnels, and dataplane
              systems that move packets between clouds.
              <br />
              <br />
              I work mostly in
              <i>
                <b className="purple"> Python, Go, C, </b>
              </i>
              and shell, with occasional detours into
              <i>
                <b className="purple"> SystemVerilog </b>
              </i>
              when curiosity leads below the software stack.
              <br />
              <br />
              My field of interests are &nbsp;
              <i>
                <b className="purple">
                  Network Security, Routing Protocols (BGP, SRv6),
                </b>{" "}
                and{" "}
                <b className="purple">Dataplane Engineering,</b>
              </i>
              &nbsp;along with applied{" "}
              <b className="purple">Machine Learning</b> — I have co-authored
              four peer-reviewed publications on graph neural networks and
              low-resource NLP.
              <br />
              <br />
              I like building tools that watch real systems —{" "}
              <i>
                <b className="purple">
                  BGP hijack detection, packet-capture threat hunting,
                  phishing-infrastructure monitoring
                </b>
              </i>
              &nbsp;— and proving they work against live data.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="cmd-heading">show <span className="purple">peers</span></h1>
            <p>
              Feel free to <span className="purple">establish a session</span> on
              any of these interfaces
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Anirudhbojji"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?user=QZ075QoAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGooglescholar />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anirudh-bojji-900256229/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Anirudh1225"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anirudh_bojji"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
