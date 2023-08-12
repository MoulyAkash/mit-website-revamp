import { LiaChalkboardTeacherSolid } from "react-icons/lia";

import { HorizontalCardProps } from "../../../components/general/HorizontalCards/HorizontalCards";

export const numberCountsData = [
  { count: "8K+", description: "Placed Students" },
  { count: "108K+", description: "Students" },
  { count: "200+", description: "Expert Instructors" },
  { count: "310+", description: "Trendy Subjects" },
];

const deptSize = "70%";

export const departmentsData: HorizontalCardProps[] = [
  {
    name: "Computer Technology",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2007",
  },
  {
    name: "Aeronautical Engineering",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2000",
  },
  {
    name: "Automobile Engineering",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "orange",
    description: "Published - 2000",
  },
  {
    name: "Electronics Engineering",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2000",
  },
  {
    name: "Instrumentation Engineering",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "red",
    description: "Published - 2000",
  },
  {
    name: "Production Technology",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2000",
  },
  {
    name: "Rubber and Plastics Technology",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2000",
  },
  {
    name: "Information Technology",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2000",
  },
  {
    name: "Applied Science and Humanities",
    svg: <LiaChalkboardTeacherSolid size={deptSize} color={"white"} />,
    svgBackground: "#9848FF",
    description: "Published - 2000",
  },
];
