import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

// tmux-style window tabs
const TABS = [
  { index: 0, name: "home", path: "/" },
  { index: 1, name: "about", path: "/about" },
  { index: 2, name: "dataplane", path: "/project" },
  { index: 3, name: "ctrl-plane", path: "/publications" },
  { index: 4, name: "run-config", path: "/resume" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
          <span className="session-label d-none d-lg-inline">
            visitor@anirudh:~
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {TABS.map((tab) => {
              const active = location.pathname === tab.path;
              return (
                <Nav.Item key={tab.path}>
                  <Nav.Link
                    as={Link}
                    to={tab.path}
                    onClick={() => updateExpanded(false)}
                    className={active ? "tmux-tab tmux-tab-active" : "tmux-tab"}
                  >
                    {tab.index}:{tab.name}
                    {active ? "*" : ""}
                  </Nav.Link>
                </Nav.Item>
              );
            })}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Anirudhbojji"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
