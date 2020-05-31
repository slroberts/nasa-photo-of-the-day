import React from "react";
import {Navbar, NavbarBrand, Container, Col} from "reactstrap";
import styled from "styled-components";

const Header = () => {
  const Heading = styled.h1`
    font-size: 1.7rem;
  `;

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <Col sm="12" md={{size: 6, offset: 3}}>
          <NavbarBrand>
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
          </NavbarBrand>
        </Col>

        {/* <Col>
          <Button color="primary">primary</Button>
        </Col> */}
      </Container>
    </Navbar>
  );
};

export default Header;
