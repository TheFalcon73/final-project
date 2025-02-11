import React from "react";
import picture from "../assets/comida.jpg"; // Asegúrate de que la ruta es correcta

const SectionTwoCardTwo = ({alt = "A photo of a salad"}) => {
  return (
   <>
    <img
      src={picture}
      alt={alt}
      className="foodpic2"
    />
    <div className="cardtwotext">
      <h1 className="cardtwotitle">Iksander</h1>
      <p className="cardtwodescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis blandit posuere. Nulla lobortis blandit posuere. Suspendisse potenti.. Suspendisse potenti. Etiam mollis sollicitudin ligula non venenatisNulla lobortis blandit posuere. Suspendisse potenti.</p>
      <p className="ordercardtwo">Order delivery</p>
    </div>
    </>
  );
};

export default SectionTwoCardTwo