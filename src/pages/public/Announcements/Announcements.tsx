import { useEffect, useState } from "react";
import AnnouncementCard from "./Card/announcementCard";
import "./announcements.css";
import APIService from "../../../api/Service";
const dummyAnnouncements = [
  {
    title: "abc",
    decription: "jagsfkasf",
    link: "http://www.google.com",
    date: "12-2-2023",
  },
  {
    title: "abc",
    decription: "jagsfkasf",
    link: "http://www.google.com",
    date: "12-2-2023",
  },
  {
    title: "abc",
    decription: "jagsfkasf",
    link: "http://www.google.com",

    date: "12-2-2023",
  },
  {
    title: "abc",
    decription: "jagsfkasf",
    link: "http://www.google.com",

    date: "12-2-2023",
  },
  {
    title: "abc",
    decription: "jagsfkasf",
    link: "http://www.google.com",

    date: "12-2-2023",
  },
];

export default function Announcements() {
  const [data, setData] = useState(dummyAnnouncements);
  // useEffect(() => {
  //   const body = {
  //     tag: "getAnnouncement",
  //     param: "",
  //   };
  //   APIService.PostData(body, "/DB/Query")
  //     .then((res: any) => setData(res?.data))
  //     .catch((error: any) => console.log(error));
  // }, []);
  return (
    <div className="anouncementContainer">
      {data.map((val, index) => (
        <AnnouncementCard data={val} key={index} />
      ))}
    </div>
  );
}
