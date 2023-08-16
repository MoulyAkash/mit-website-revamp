import { useEffect, useState } from "react";
import AnnouncementCard from "./Card/announcementCard";
import "./announcements.css";
import APIService from "../../../api/Service";

interface Announcement {
  id: number;
  announcementType: string;
  announcementDate: string;
  viewmore: string;
  description: string;
  announcementTitle: string;
}

export default function Announcements() {
  const [Olddata, setOldData] = useState<Announcement[]>([]);
  const [recentdata, setrecentData] = useState<Announcement[]>([]);
  const [PossibleAnnouncementTypes, setPossibleAnnouncementTypes] = useState<
    string[]
  >([]);

  const GetData = () => {
    const body = {
      tag: "getAnnouncement",
      param: "",
    };
    APIService.PostData(body, "/DB/Query")
      .then((res: any) => {
        console.log(res?.data);

        separateAnnouncements(res?.data);
        setPossibleAnnouncementTypes(getAllAnnouncementTypes(res?.data));
      })
      .catch((error) => console.log(error));
  };

  const getAllAnnouncementTypes = (array: Announcement[]) => {
    const announcementTypes = new Set<string>();
    array.forEach((item) => announcementTypes.add(item.announcementType));
    return Array.from(announcementTypes);
  };

  const FilterAnnouncement = (
    Announcement: Announcement[],
    announcementType: string
  ) => {
    const filteredAnnouncement = Announcement.filter(
      (item) => item.announcementType === announcementType
    );
    if (filteredAnnouncement.length === 0) {
      return [];
    }
    return filteredAnnouncement;
  };
  const separateAnnouncements = (
    array: Announcement[]
  ): { recent: Announcement[]; other: Announcement[] } => {
    const today = new Date();
    const recentThreshold = new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000);
    const recentAnnouncements: Announcement[] = [];
    const otherAnnouncements: Announcement[] = [];
    array.forEach((item) => {
      const timestamp = new Date(item.announcementDate);
      if (timestamp >= recentThreshold) {
        recentAnnouncements.push(item);
      } else {
        otherAnnouncements.push(item);
      }
    });
    setOldData(otherAnnouncements);
    setrecentData(recentAnnouncements);
    return { recent: recentAnnouncements, other: otherAnnouncements };
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="anouncementContainer">
      {recentdata.length > 0 && (
        <div className="recentTextContainer">
          <div className="announcementType">Latest Updates</div>
          <div className="recentContainer">
            {PossibleAnnouncementTypes.map((announcementType, index) => (
              <div key={index} className="announcementTypeContainer">
                {/* <div className="headText">
  
                    {announcementType}
                  </div> */}
                <div className="announcementCardContainer">
                  {FilterAnnouncement(recentdata, announcementType).map(
                    (announcement) =>
                      announcement && (
                        <AnnouncementCard
                          data={announcement}
                          key={announcement.id}
                          type={true}
                        />
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {Olddata.length > 0 && (
        <div className="oldTextContainer">
          <div className="announcementType">Past Announcement</div>
          <div className="recentContainer">
            {PossibleAnnouncementTypes.map((announcementType, index) => (
              <div key={index} className="announcementTypeContainer">
                {/* <div className="headText">
  
                    {announcementType}
                  </div> */}
                <div className="announcementCardContainer">
                  {FilterAnnouncement(Olddata, announcementType).map(
                    (announcement) =>
                      announcement && (
                        <AnnouncementCard
                          data={announcement}
                          key={announcement.id}
                          type={false}
                        />
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
