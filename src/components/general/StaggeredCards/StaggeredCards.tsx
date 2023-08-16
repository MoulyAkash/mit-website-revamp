import React from "react";
import "./staggeredcards.css";

import { centersData } from "../../../pages/public/Home/data";

export default function StaggeredCards() {
  return (
    <div className="staggered-cards-container">
      <div className="description">
        <h1>Centers at MIT</h1>
        <p>
          Here are some of the centers at MIT that help students in their day to
          day life. These centers are managed by the students themselves and are
          open 24/7.
        </p>
      </div>
      <div className="staggered-cards-wrapper">
        {centersData.map((data, index: number) => (
          <div key={index} className="card">
            <img src={data.img} />
            <div className="content">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
