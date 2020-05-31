import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    position: fixed;
    bottom: 0;
  `;

  return (
    <Footer>
      Daily photos are courtsey of NASA{" "}
      <span role="img" aria-label="astronaut">
        👨‍🚀 🚀
      </span>
    </Footer>
  );
};

export default Footer;
