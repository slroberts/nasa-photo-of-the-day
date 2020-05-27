import React from "react";

const Header = () => {
  return (
    <div>
      <h1>
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
      </h1>
    </div>
  );
};

export default Header;
