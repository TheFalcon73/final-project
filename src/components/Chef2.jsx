import React from "react";
import chef2 from "../assets/chef2.jpg";

const Chef2 = ({alt = "Chef 2"}) => {
  return (
    <img
      src={chef2}
      alt={alt}
      className="chef2"
    />
  );
};

export default Chef2;