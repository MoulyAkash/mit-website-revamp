// import React from "react";
import { useRef } from 'react';
import "./mission.css";

export default function Mission() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const MissionContent=[
    "Producing students who are intellectually and technically equipped with well defined knowledge, skills and ethics who are creative thinkers, inspiring leaders and contributing citizens",
    "Introducing high quality academic and research programmes and providing extension services in cutting edge technologies",
    "Ensuring a supportive campus climate with dynamic leadership and development opportunities to meet the needs of the students, faculty and staff",
    "Enhancing academic productivity through induction of quality faculty, accelerated graduation, credit banking, augmented continuing education opportunities and adoption of current technology",
    "Sharing the intellectual resources and the infrastructural facilities among the academia from other institutions and among the industrial society, funding agencies and government",
  ]
  return (
    <div className="mission-main-card noselect">
      <div className="heading">Mission</div>
      <div className="intro">
        Anna University shall contribute to the educational, economic and social
        development by:
      </div>
      <ul className="mi-content">
        {MissionContent.map((item:any, index:any) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="login-container">
        <button className="login-button">View More</button>
      </div>
    </div>
  );
}
