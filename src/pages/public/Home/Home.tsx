import "./home.css";

import Banner from "../../../components/Home/Banner/Banner";
import NumberCount from "../../../components/general/NumberCount/NumberCount";
import HorizontalCards from "../../../components/general/HorizontalCards/HorizontalCards";
import PlacementPartners from "../../../components/general/PlacementPartners/PlacementPartners";
import StaggeredCards from "../../../components/general/StaggeredCards/StaggeredCards";

import { departmentsData, numberCountsData } from "./data";
import Dean from "../../../components/general/Dean/Dean";
import MissionVision from "../../../components/general/ParallaxCards/MissionVision";

export default function Home() {
  return (
    <>
      <Banner />
      <NumberCount data={numberCountsData} />
      <HorizontalCards data={departmentsData} />
      <NumberCount data={numberCountsData} />
      <Dean />
      <MissionVision />
      <StaggeredCards />
      <PlacementPartners />
    </>
  );
}
