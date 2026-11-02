import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroTopology from "../../Assets/hero-topology.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="term-window">
                <div className="term-titlebar">
                  <span className="term-dot term-dot-red" />
                  <span className="term-dot term-dot-yellow" />
                  <span className="term-dot term-dot-green" />
                  <span className="term-title">visitor@anirudh — ssh — 80×24</span>
                </div>
                <div className="term-body">
                  <div>
                    <span className="term-prompt">$</span> ssh
                    visitor@anirudhbojji.github.io
                  </div>
                  <div className="term-dim">
                    Welcome to ANIRUDH-OS (network-engineer build)
                  </div>
                  <div>
                    &nbsp;* control-plane&nbsp;:{" "}
                    <span className="term-ok">CONVERGED</span>
                    &nbsp;&nbsp;dataplane&nbsp;:{" "}
                    <span className="term-ok">FORWARDING</span>
                  </div>
                  <div>
                    &nbsp;* packets dropped&nbsp;:{" "}
                    <span className="term-ok">0</span>
                    &nbsp;&nbsp;uptime&nbsp;:{" "}
                    <span className="term-warn">2+ yrs in prod</span>
                  </div>
                  <div className="term-dim">
                    Last login: just now, from your browser
                  </div>
                </div>
              </div>

              <h1 style={{ paddingBottom: 15, paddingTop: 30 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BOJJI ANIRUDH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="hero-art-col">
              <img
                src={heroTopology}
                alt="network topology"
                className="img-fluid hero-art"
                style={{ maxHeight: "480px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
