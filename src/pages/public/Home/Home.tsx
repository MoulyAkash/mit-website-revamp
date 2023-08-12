import "./home.css";

import Banner from "../../../components/Home/Banner/Banner";
import NumberCount from "../../../components/general/NumberCount/NumberCount";
import { departmentsData, numberCountsData } from "./data";
import HorizontalCards from "../../../components/general/HorizontalCards/HorizontalCards";

export default function Home() {
  return (
    <div className="homepage-container">
      <Banner />
      <NumberCount data={numberCountsData} />
      <HorizontalCards data={departmentsData} />
    </div>
  );
}
