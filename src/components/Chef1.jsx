import React from "react";
import chef1 from "../assets/chef1.jpg";

const Chef1 = ({alt = "Chef 1"}) => {
  return (
    <img
      src={chef1}
      alt={alt}
      className="chef1"
    />
  );
};

export default Chef1;