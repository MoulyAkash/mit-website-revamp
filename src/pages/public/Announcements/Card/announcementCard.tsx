import React from "react";
import "./announcementCards.css";
export default function AnnouncementCard(props: any) {
  const ProcessDate = (timeStamp: string) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = timeStamp?.split("T")[0]?.split("-");
    return (
      date && (
        <div className="outerDateContainer">
          <div className="year">{date[0]}</div>
          <div className="month">{month[parseInt(date[1])]}</div>
          <div className="day">{date[2]}</div>
        </div>
      )
    );
  };

  return (
    <div className="outerContainer">
      {ProcessDate(props.data.date)}

      <div className="textContainer">
        <div className="title">{props.data.title}</div>
        <div className="description">{props.data.decription}</div>
        {props.data.link && (
          <div className="viewmore">
            <a href={props.data.link} target="__blank">
              View More
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
