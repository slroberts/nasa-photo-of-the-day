import React from "react";
import {Container, Row, Col, Spinner} from "reactstrap";
import styled from "styled-components";

const PhotoOfDay = (props) => {
  const ImgContainer = styled.div`
    border-radius: 0.25rem;
    overflow: hidden;
  `;

  const ImgTitle = styled.h3`
    margin: 2rem 0;
  `;

  const Explanation = styled(ImgTitle)`
    font-size: 1rem;
    line-height: 2rem;
    text-align: justify;
  `;

  if (!props.src) {
    return <Spinner color="primary" />;
  } else {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{size: 10, offset: 1}}>
            <ImgTitle>{props.title}</ImgTitle>
            <ImgContainer>
              <img src={props.src} alt={props.alt} style={{width: "100%"}} />
            </ImgContainer>
            <Explanation>{`${props.explanation}`}</Explanation>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 6}}>
            <p>{`Date: ${props.date}`}</p>
          </Col>
          <Col md={{size: 6}}>
            <p>{`Copyright: ${props.copyright}`}</p>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default PhotoOfDay;
