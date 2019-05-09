import React from "react";
import "./style.css";
import { Navbar } from 'reactstrap';





function example() {
  return (
<Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  );
}

export default Navbar; 