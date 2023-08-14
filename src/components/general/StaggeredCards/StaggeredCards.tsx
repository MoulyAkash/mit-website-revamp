import React from "react";
import "./staggeredcards.css";

import { facilitiesData } from "../../../pages/public/Home/data";

export default function StaggeredCards() {
  return (
    <div className="staggered-cards-container">
      <div className="description">
        <h1>Facilities at MIT</h1>
        <p>
          Here are some of the facilities that we provide to our students. We
          are constantly working to provide the best experience to our students.
        </p>
      </div>
      <div className="staggered-cards-wrapper">
        {facilitiesData.map((data, index: number) => (
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
