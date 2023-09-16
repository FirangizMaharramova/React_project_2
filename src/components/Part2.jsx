import React from "react";
import "../App.css";
import Man from "./m.jpg";

function Part2() {
  return (
    <div className="part2">
      <div className="img">
        <img src={Man} alt="" />
      </div>
      <div className="part2-text">
        <h3>FEATURED DESTINATION</h3>
        <h1>Our swiss adventure blog</h1>
        <p>
          Visiting the swiss alps? Want to know the requirements on travelling
          to Switzerland during the pandemic? Our blog might help!
        </p>
        <div className="buttons">
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
}

export default Part2;
