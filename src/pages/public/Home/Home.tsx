import "./home.css";

import Banner from "../../../components/Home/Banner/Banner";
import NumberCount from "../../../components/general/NumberCount/NumberCount";

const numberCountsData = [
  { count: "8K+", description: "Placed Students" },
  { count: "108K+", description: "Students" },
  { count: "200+", description: "Expert Instructors" },
  { count: "310+", description: "Trendy Subjects" },
];

export default function Home() {
  return (
    <div className="homepage-container">
      <Banner />
      <NumberCount data={numberCountsData} />
    </div>
  );
}
