import React from "react";
import picture from "../assets/ralph.jpg"; // Asegúrate de que la ruta es correcta

const SectionThreeCardThree = ({alt = "A photo of a person"}) => {
  return (
   <>
    <div className="ratingtitle3">
        <h1 className="rating">"Awesome quality!"</h1>
    </div>
    <div className="stars3">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
    </div>
    <div className="imagecontainer3">
        <img
        src={picture}
        alt={alt}
        className="person3"
        />
    </div>

    <div className="person3text">
      <h1 className="person3name">Ralph Marino</h1>
      <p className="person3description">"I am happy to have enjoyed the best Mediterranean food in the city. The quality of the food and the attention to detail is great."</p>
    </div>
    </>
  );
};

export default SectionThreeCardThree