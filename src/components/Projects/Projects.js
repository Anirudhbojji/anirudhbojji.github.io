import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import noc from "../../Assets/Projects/noc.png";
import bgp from "../../Assets/Projects/bgp.png";
import pcap from "../../Assets/Projects/pcap.png";
import ctphish from "../../Assets/Projects/ctphish.png";
import footprint from "../../Assets/Projects/footprint.png";
import gcn from "../../Assets/Projects/gcn.png";
import sarcasm from "../../Assets/Projects/sarcasm.png";
import dr from "../../Assets/Projects/DR.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Tools that watch real systems, research code, and one router made of
          silicon.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noc}
              isBlog={false}
              title="NoC Deflection Router"
              description="A Network-on-Chip in SystemVerilog: 2D-mesh of deflection (hot-potato)
              routers with XY routing and credit-based flow control. Verified cycle-accurately with
              Verilator — 700k+ flits simulated, zero lost, with latency-vs-load characterization."
              ghLink="https://github.com/Anirudhbojji/noc-deflection-router"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgp}
              isBlog={false}
              title="BGP Hijack Detector"
              description="Real-time detection of BGP origin and sub-prefix hijacks: streams the global
              routing table via RIPE RIS Live, validates announcements against RPKI, and alerts the moment
              someone announces your address space who shouldn't."
              ghLink="https://github.com/Anirudhbojji/bgp-hijack-detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcap}
              isBlog={false}
              title="PCAP Threat Hunter"
              description="A mini-IDS for packet captures: detects port scans, C2 beaconing (interval
              variance analysis), DNS tunneling (entropy scoring), and cleartext credentials — validated
              end-to-end against generated attack traffic."
              ghLink="https://github.com/Anirudhbojji/pcap-threat-hunter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ctphish}
              isBlog={false}
              title="CT Phishing Hunter"
              description="Catches brand-impersonation infrastructure early: scores Certificate Transparency
              certs for homoglyph/typosquat lookalikes and DNS-resolves dnstwist-style permutations to find
              registered fakes before the phishing email goes out."
              ghLink="https://github.com/Anirudhbojji/ct-phishing-hunter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={footprint}
              isBlog={false}
              title="Digital Footprint Auditor"
              description="Audit your own online exposure: username presence across 9 platforms, email
              breach lookups via Have I Been Pwned, and k-anonymity password checks — compiled into a
              markdown report with remediation steps."
              ghLink="https://github.com/Anirudhbojji/digital-footprint-auditor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcn}
              isBlog={false}
              title="GitHub User Classification (GCN)"
              description="Graph Convolutional Networks classify GitHub users as ML vs web developers on a
              37k-node social graph. Published in the Indian Journal of Technical Education (ISTE),
              Vol. 47 No. 2, 2024."
              ghLink="https://github.com/Anirudhbojji/github-user-classification-gcn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sarcasm}
              isBlog={false}
              title="Telugu Sarcasm Classification"
              description="Sarcasm detection for a low-resource language: IndicNLP FastText embeddings with
              classical ML and RNN models under heavy class imbalance. Code for the FICTA 2024 (Springer)
              paper."
              ghLink="https://github.com/Anirudhbojji/telugu-sarcasm-classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dr}
              isBlog={false}
              title="Diabetic Retinopathy Detection"
              description="CNN-based classification of retinal images into five diabetic retinopathy severity
              grades, served through a Streamlit app — early detection support for a leading cause of
              preventable blindness."
              ghLink="https://github.com/Anirudhbojji/diabetic-retinopathy-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
