import { BiSolidBell } from "react-icons/bi";
import "./banner.css";

import BannerImage from "../../../assets/banner-student.png";
import BookImage from "../../../assets/book.png";
import ChartImage from "../../../assets/chart.png";
import ChatImage from "../../../assets/chat.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="left">
        <span>⚡ Best E-Learning Platform</span>
        <h1>
          <p>Getting best</p>
          <p>quality education</p>
          <p>is now more easier</p>
        </h1>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <p>industry. Lorem Ipsum has been the industry</p>
        </div>
        <div className="flex-row">
          <button className="announcements-button">
            <BiSolidBell size={20} />
            Announcements
          </button>
          <p>4 new in last 7 days</p>
        </div>
      </div>
      <div className="right">
        <img src={BannerImage} className="banner-image" />
        <img src={BookImage} className="book-image" />
        <img src={ChartImage} className="chart-image" />
        <img src={ChatImage} className="chat-image" />
      </div>
    </div>
  );
}
