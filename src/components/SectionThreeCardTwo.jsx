import React from "react";
import picture from "../assets/mary.jpg"; // Asegúrate de que la ruta es correcta

const SectionThreeCardTwo = ({alt = "A photo of a salad"}) => {
  return (
   <>
    <div className="ratingtitle2">
        <h1 className="rating">"Great place!"</h1>
    </div>
    <div className="stars2">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
    </div>
    <div className="imagecontainer2">
        <img
        src={picture}
        alt={alt}
        className="person2"
        />
    </div>

    <div className="person2text">
      <h1 className="person2name">Mary Sue</h1>
      <p className="person2description">"It was a surprise to find this place. My family and I had a great time. I really liked the taste of the food and how comfortable the place is."</p>
    </div>
    </>
  );
};

export default SectionThreeCardTwo