import React from 'react';
import { Link } from 'react-router';


const SectionOneLeft = () => {
    return (
        <>
        <h1 className="maintitle">Little Lemon</h1>
        <h2 className="mainsubtitle">Chicago</h2>
        <div className="welcomemessage">
        Welcome to Little Lemon – a vibrant Mediterranean restaurant founded by the Andorra brothers. Located on 5th Avenue, we bring fresh, authentic flavors to the heart of the city. With a passion for quality ingredients and warm hospitality, Little Lemon is more than just a dining experience—it's a taste of tradition, community, and culinary excellence.
        </div>
        <Link to='/booking'>
        <button className="sectiononebutton" type="button">Reserve Table</button>
        </Link>
      </>
    )
  }

  export default SectionOneLeft