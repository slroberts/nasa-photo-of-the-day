import React from "react";
import {Container, Row, Col, Spinner} from "reactstrap";
import styled from "styled-components";

const PhotoOfDay = (props) => {
  const PhotoContainer = styled.div`
    // padding: 2vw;
  `;

  if (!props.src) {
    return (
      // <h3>
      //   <span role="img" aria-label="camera">
      //     📷
      //   </span>{" "}
      //   &nbsp; loading...
      // </h3>

      <Spinner color="primary" />
    );
  } else {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{size: 10, offset: 1}}>
            <PhotoContainer>
              <h3>{props.title}</h3>
              <div>
                <img src={props.src} alt={props.alt} style={{width: "100%"}} />
              </div>
              <p>{`Explanation: ${props.explanation}`}</p>
              <div>
                <p>{`Date: ${props.date}`}</p>
                <p>{`Copyright: ${props.copyright}`}</p>
              </div>
            </PhotoContainer>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default PhotoOfDay;
