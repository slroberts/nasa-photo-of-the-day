import React from "react";

const PhotoOfDay = (props) => {
  if (!props.src) {
    return (
      <h3>
        <span role="img" aria-label="camera">
          📷
        </span>{" "}
        &nbsp; loading...
      </h3>
    );
  } else {
    return (
      <div>
        <h2>{props.title}</h2>
        <img src={props.src} alt={props.alt} />
        <p>{`Explanation: ${props.explanation}`}</p>
        <div>
          <p>{`Date: ${props.date}`}</p>
          <p>{`Copyright: ${props.copyright}`}</p>
        </div>
      </div>
    );
  }
};

export default PhotoOfDay;
