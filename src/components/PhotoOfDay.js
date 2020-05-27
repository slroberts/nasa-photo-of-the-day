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
        <div
          style={{
            width: "100vw",
            height: 560,
            overflow: "hidden",
            backgroundImage: `url(${props.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img src={props.src} alt={props.alt} style={{width: "100%"}} /> */}
        </div>
        <p>{`Explanation: ${props.explanation}`}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "64vw",
            margin: "0 auto",
          }}
        >
          <p>{`Date: ${props.date}`}</p>
          <p>{`Copyright: ${props.copyright}`}</p>
        </div>
      </div>
    );
  }
};

export default PhotoOfDay;
