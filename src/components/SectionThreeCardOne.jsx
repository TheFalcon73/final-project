import React from "react";
import picture from "../assets/andre.jpg"; // Asegúrate de que la ruta es correcta

const SectionThreeCardOne = ({alt = "A photo of a salad"}) => {
  return (
   <>
    <div className="ratingtitle1">
        <h1 className="rating">"My family enjoyed!"</h1>
    </div>
    <div className="stars1">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
    </div>
    <div className="imagecontainer1">
        <img
        src={picture}
        alt={alt}
        className="person1"
        />
    </div>

    <div className="person1text">
      <h1 className="person1name">Andre Smith</h1>
      <p className="person1description">"Great place to enojoy with family and firends. I have never been so happy in my life!. This is one of the most impresive place on this city"</p>
    </div>
    </>
  );
};

export default SectionThreeCardOne