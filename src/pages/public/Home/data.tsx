import { FaPlaneDeparture, FaCar } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import {
  GiHumanPyramid,
  GiGears,
  GiCircuitry,
  GiSatelliteCommunication,
  GiFlatTire,
} from "react-icons/gi";
import { HiMiniCpuChip } from "react-icons/hi2";

import { HorizontalCard } from "../../../components/general/HorizontalCards/HorizontalCards";
import { FooterContent } from "../../../components/general/Footer/Footer";

import bny from "../../../assets/PlacementPartners/bny_mellon.svg";
import oracle from "../../../assets/PlacementPartners/oracle.svg";
import cat from "../../../assets/PlacementPartners/caterpillar.svg";
import barclays from "../../../assets/PlacementPartners/barclays.svg";

import LibraryImage from "../../../assets/Facilities/library.jpg";
import HostelImage from "../../../assets/Facilities/hostel.jpg";
import HealthCentreImage from "../../../assets/Facilities/health_centre.jpg";
import ComputerCenterImage from "../../../assets/Facilities/computer_center.jpg";
import SportsImage from "../../../assets/Facilities/sports.jpg";

export const numberCountsData = [
  { count: "8K+", description: "Placed Students" },
  { count: "108K+", description: "Students" },
  { count: "200+", description: "Expert Instructors" },
  { count: "310+", description: "Trendy Subjects" },
];

export const departmentsData: HorizontalCard[] = [
  {
    name: "Computer Technology",
    Icon: FaComputer,
    iconFillColor: "#EA1179",
    description: "Established - 2007",
  },
  {
    name: "Aeronautical Engineering",
    Icon: FaPlaneDeparture,
    iconFillColor: "#B799FF",
    description: "Established - 2000",
  },
  {
    name: "Automobile Engineering",
    Icon: FaCar,
    iconFillColor: "#AEE2FF",
    description: "Established - 2000",
  },
  {
    name: "Electronics Engineering",
    Icon: GiCircuitry,
    iconFillColor: "#1C6758",
    description: "Established - 2000",
  },
  {
    name: "Instrumentation Engineering",
    Icon: HiMiniCpuChip,
    iconFillColor: "#F31559",
    description: "Established - 2000",
  },
  {
    name: "Production Technology",
    Icon: GiGears,
    iconFillColor: "orange",
    description: "Established - 2000",
  },
  {
    name: "Rubber and Plastics Technology",
    Icon: GiFlatTire,
    iconFillColor: "#960E10",
    description: "Established - 2000",
  },
  {
    name: "Information Technology",
    Icon: GiSatelliteCommunication,
    iconFillColor: "#5E481C",
    description: "Established - 2000",
  },
  {
    name: "Applied Science and Humanities",
    Icon: GiHumanPyramid,
    iconFillColor: "#196157",
    description: "Established - 2000",
  },
];

export const footerContents: FooterContent[] = [
  {
    title: "About Us",
    url: "#",
    content: [
      {
        title: "Company",
        url: "company",
      },
      {
        title: "Teams",
        url: "teams",
      },
      {
        title: "Profile",
        url: "profile",
      },
      {
        title: "Company",
        url: "company",
      },
    ],
  },
  {
    title: "About Us",
    url: "#",
    content: [
      {
        title: "Company",
        url: "company",
      },
      {
        title: "Teams",
        url: "teams",
      },
      {
        title: "Profile",
        url: "profile",
      },
      {
        title: "Company",
        url: "company",
      },
    ],
  },
  {
    title: "Courses",
    url: "#",
    content: [
      {
        title: "Design",
        url: "design",
      },
      {
        title: "Development",
        url: "development",
      },
      {
        title: "Marketing",
        url: "marketing",
      },
      {
        title: "Blog",
        url: "blog",
      },
    ],
  },
  {
    title: "Courses",
    url: "#",
    content: [
      {
        title: "Design",
        url: "design",
      },
      {
        title: "Development",
        url: "development",
      },
      {
        title: "Marketing",
        url: "marketing",
      },
      {
        title: "Blog",
        url: "blog",
      },
    ],
  },
];

export const placementPartnersLogos = [bny, oracle, cat, barclays];

export const facilitiesData = [
  {
    title: "Library",
    img: LibraryImage,
    description: "2K+ Active Members",
  },
  {
    title: "Hostel",
    img: HostelImage,
    description: "2K+ Active Members",
  },
  {
    title: "Health Centre",
    img: HealthCentreImage,
    description: "2K+ Active Members",
  },
  {
    title: "Computer Center",
    img: ComputerCenterImage,
    description: "2K+ Active Members",
  },
  {
    title: "Sports",
    img: SportsImage,
    description: "2K+ Active Members",
  },
];
