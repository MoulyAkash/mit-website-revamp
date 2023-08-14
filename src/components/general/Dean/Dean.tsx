import React from "react";
import "./dean.css";
import DeanImage from "./professor1.png";

function Dean() {
  return (
    <div className="deanMain">
      <div
        className="deanMask"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(82, 95, 225, 0.85)",
          justifyContent: "space-between",
        }}
      >
        <div className="deanContent">
          <div className="deanTitle">
            <span>Limitless Learning, </span>
            <span>Limitless Possibilities !</span>
          </div>
          <div className="deanQuote">
            <span>
              <blockquote>
                It's impossible to accuse someone of being judgemental without
                being judgemental
              </blockquote>
            </span>
            <span>Until we meet again</span>
          </div>
          <div className="flex-row">
            <button className="more-button">Know More</button>
          </div>
        </div>
        <div className="deanImage">
          <img
            src={DeanImage}
            // style={{ marginRight: 20, height: "100%", marginBottom: -40 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dean;
