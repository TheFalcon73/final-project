import React from "react";
import picture from "../assets/salad.jpg"; // Asegúrate de que la ruta es correcta

const SectionTwoCardOne = ({alt = "A photo of a salad"}) => {
  return (
   <>
    <img
      src={picture}
      alt={alt}
      className="saladpic"
    />
    <div className="cardonetext">
      <h1 className="cardonetitle">Greek Salad</h1>
      <p className="cardonedescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis blandit posuere. Nulla lobortis blandit posuere. Suspendisse potenti.. Suspendisse potenti. Etiam mollis sollicitudin ligula non venenatisNulla lobortis blandit posuere. Suspendisse potenti.</p>
      <p className="ordercardone">Order delivery</p>
    </div>
    </>
  );
};

export default SectionTwoCardOne