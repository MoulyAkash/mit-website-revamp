import React from "react";
import "./categoriescards.css";

import { facilitiesData } from "../../../pages/public/Home/data";

export default function CategoriesCards() {
  return (
    <div className="categories-cards-container">
      <div className="description">
        <h1>Facilities Available at MIT</h1>
        <p>
          Here are some of the facilities that we provide to our students to
          help them grow and learn. We have a lot of facilities that we provide.
        </p>
      </div>
      <div className="categories-wrapper">
        {facilitiesData.map((data, index: number) => (
          <div key={index} className="card">
            <img src={data.img} />
            <div className="content">
              <h1>{data.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
