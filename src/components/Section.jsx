import React from "react";
import "../App.css";

function Section() {
  return (
    <div className="section">
      <div className="section-left">
        <div className="section-text">
          <h1>
            <span>Let's talk</span> about your next trip!
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
            nesciunt.
          </p>
        </div>
        <div className="buttons">
          <button>Share your story</button>
          <button>Watch highlights</button>
        </div>
      </div>
      <div className="section-right"></div>
    </div>
  );
}

export default Section;
