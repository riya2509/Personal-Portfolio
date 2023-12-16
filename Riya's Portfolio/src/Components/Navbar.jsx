// import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">RG.</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          > */}
          {/* <Nav className="me-auto"/> */}
          <Nav.Link as={Link} to="/" style={{ color: "white", margin: "10px" }}>
            <AiOutlineHome
              style={{
                marginBottom: "2px",
                marginRight: "4px",
              }}
            />
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white", margin: "10px" }}>
            <AiOutlineUser
              style={{
                marginBottom: "2px",
                marginRight: "4px",
              }}
            />
            About
          </Nav.Link>
          <Nav.Link style={{ color: "white", margin: "10px" }}>
            <AiOutlineFundProjectionScreen
              style={{
                marginBottom: "2px",
                marginRight: "4px",
              }}
            />
            Projects
          </Nav.Link>
          <Nav.Link style={{ color: "white", margin: "10px" }}>
            <CgFileDocument
              style={{
                marginBottom: "2px",
                marginRight: "4px",
              }}
            />
            Resume
          </Nav.Link>
          <Button
            style={{
              backgroundColor: "#504c4c",
              borderColor: "grey",
              // width: "65px",
              // height: "30px",
              // marginTop: "5px",
            }}
            href="https://github.com/riya2509/Personal-Portfolio/tree/main/Riya's%20Portfolio"
            target="_blank"
            className="fork-btn-inner"
          >
            <CgGitFork style={{ fontSize: "1.2em" }} />
            <AiFillStar style={{ fontSize: "1.1em" }} />
          </Button>
          {/* </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
