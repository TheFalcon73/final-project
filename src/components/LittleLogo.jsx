import React from "react";
import logo from "../assets/littlelemonlogo.svg"; // Asegúrate de que la ruta es correcta

const Logo = ({alt = "Logo"}) => {
  return (
    <img
      src={logo}
      alt={alt}
    />
  );
};

export default Logo;