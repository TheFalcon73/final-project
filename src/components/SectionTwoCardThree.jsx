import React from "react";
import picture from "../assets/pasta.jpg"; // Asegúrate de que la ruta es correcta

const SectionTwoCardThree = ({alt = "A photo of a salad"}) => {
  return (
   <>
          <img
            src={picture}
            alt={alt}
            className="foodpic3"
          />

            <div className="cardthreetext">
               <h1 className="cardthreetitle">Pasta</h1>
               <p className="cardthreedescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis blandit posuere. Nulla lobortis blandit posuere. Suspendisse potenti.. Suspendisse potenti. Etiam mollis sollicitudin ligula non venenatisNulla lobortis blandit posuere. Suspendisse potenti.</p>
               <p className="ordercardthree">Order delivery</p>
            </div>
    </>
  );
};

  export default SectionTwoCardThree