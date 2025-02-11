import React from "react";
import picture from "../assets/mesero1.jpg"; // Asegúrate de que la ruta es correcta

const SectionOneRight = ({alt = "A photo of Food", width = "300px", height = "300px"}) => {
  return (
    <img
      src={picture}
      alt={alt}
      className="foodpic"
    />
  );
};

export default SectionOneRight;  