import React from "react";
import "./announcementCards.css";
import { IoMdShareAlt } from "react-icons/io";
import {HiSpeakerphone} from "react-icons/Hi"
export default function AnnouncementCard(props: any) {
  return (
    <div className="outerContainer">
      <div className="textContainer">
        <div className="HeadConatiner">
          <HiSpeakerphone />
        {props.type && <div className="blinking-div"></div>}
          <div className="title">{props.data.announcementTitle}</div>
        </div>
        <div className="description">{props.data.description}</div>
      </div>
      <div className="imageContainer">
        {props.data.viewmore && (
          <div
            className="viewmore"
            onClick={() => {
              window.open(props.data.viewmore, "_blank");
            }}
          >
            <IoMdShareAlt />
          </div>
        )}
      </div>
    </div>
  );
}


