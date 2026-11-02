import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anirudh Bojji </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am a network engineer working on cloud networking — routing
            systems, IPsec dataplanes, and multi-cloud infrastructure.
            <br />
            I hold a B.Tech in Computer Science from MVSR Engineering College,
            where my research work led to four peer-reviewed publications.
            <br />
            <br />
            Apart from engineering, some activities I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading mythological novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
