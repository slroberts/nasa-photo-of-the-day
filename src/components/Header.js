import React from "react";
import {Navbar, NavbarBrand, Container, Row, Col} from "reactstrap";
import styled from "styled-components";

const Header = () => {
  const Heading = styled.h1`
    font-size: 1.7rem;
    text-align: center;
  `;

  return (
    <Navbar color="light" light expand="md">
      {/* <NavbarBrand>
        {" "}
        <Container>
          <Row>
            <Col sm="12" md={{size: 6, offset: 3}}> */}
      <Heading>
        <span role="img" aria-label="astronaut">
          👨‍🚀
        </span>{" "}
        <span role="img" aria-label="rocket ship">
          🚀
        </span>{" "}
        NASA's{" "}
        <span role="img" aria-label="camera">
          📷
        </span>{" "}
        of the day
      </Heading>
      {/* </Col>
          </Row>
        </Container>
      </NavbarBrand> */}
    </Navbar>
  );
};

export default Header;
