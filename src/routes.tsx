import { createBrowserRouter } from "react-router-dom";
import {} from "react-icons/bi";

// Main Pages Import

import MainApp from "./pages/public/MainApp";
import Home from "./pages/public/Home/Home";
import About from "./pages/public/About/About";
import Contact from "./pages/public/Contact/Contact";
import Announcements from "./pages/public/Announcements/Announcements";

// Department Pages Import
import AeroNauticalHome from "./pages/public/Departments/Aeronautical/Home";
import AutomobileHome from "./pages/public/Departments/Automobile/Home";
import ElectronicsHome from "./pages/public/Departments/Electronics/Home";
import InstrumentationHome from "./pages/public/Departments/Instrumentation/Home";
import ProductionHome from "./pages/public/Departments/Production/Home";
import RubberAndPlasticsHome from "./pages/public/Departments/RubberAndPlastics/Home";

// Admin Pages Import

import AdminMainApp from "./pages/admin/MainApp";

const generateAppData = (publicRoutes: any, privateRoutes: any) => {
  const topBarItems = publicRoutes.filter((route: any) => !route.avoidInHeader);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      children: publicRoutes,
    },
    {
      path: "/admin/",
      element: <AdminMainApp />,
    },
  ]);

  return { publicRoutes, privateRoutes, topBarItems, router };
};

// Single source of truth for the routes
export const allPublicRoutes = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
    children: [
      {
        path: "https://www.annauniv.edu/",
        title: "AU Home",
      },
    ],
  },
  {
    path: "/departments/",
    title: "Departments",
    element: <Home />,
    children: [
      {
        path: "aeronauticalEngineering",
        title: "Aeronautical Engineering",
        element: <AeroNauticalHome />,
      },
      {
        path: "automobileEngineering",
        title: "Automobile Engineering",
        element: <AutomobileHome />,
      },
      {
        path: "electronicsEngineering",
        title: "Electronics Engineering",
        element: <ElectronicsHome />,
      },
      {
        path: "instrumentationEngineering",
        title: "Instrumentation Engineering",
        element: <InstrumentationHome />,
      },
      {
        path: "productionTechnology",
        title: "Production Technology",
        element: <ProductionHome />,
      },
      {
        path: "rubberAndPlasticsTechnology",
        title: "Rubber and Plastics Technology",
        element: <RubberAndPlasticsHome />,
      },
      {
        path: "http://www.it.mitindia.edu/",
        title: "Information Technology",
      },
      {
        path: "http://www.ct.mitindia.edu/dct/#/home",
        title: "Computer Technology",
      },
      {
        path: "http://www.dash.mitindia.edu/",
        title: "Applied Science and Humanities",
      },
    ],
  },
  {
    path: "/administration",
    title: "Administration",
    element: <Home />,
    children: [
      {
        path: "https://annauniv.irins.org/profile/43400",
        title: "Dean",
      },
      {
        path: "https://mitindia.edu/en/administration/office-page",
        title: "Office Staff",
      },
    ],
  },
  {
    path: "/centres",
    title: "Centres",
    element: <Home />,
    children: [
      {
        path: "https://cc.mitindia.edu/",
        title: "Computer Centre",
      },
      {
        path: "https://www.au-kbc.org/",
        title: "AU-KBC Research Centre",
      },
      {
        path: "http://www.casr.mitindia.edu/",
        title: "Centre for Aerospace Research",
      },
    ],
  },
  {
    path: "/facilities",
    title: "Facilities",
    element: <Home />,
    children: [
      {
        path: "http://www.placement.mitindia.edu/",
        title: "Placements",
      },
    ],
  },
  {
    // path: "/about?/:section",
    path: "https://mitindia.edu/en/home/history",
    title: "About Us",
    element: <About />,
  },
  {
    path: "/contact",
    title: "Contact",
    element: <Contact />,
  },
  {
    path: "/announcements",
    title: "Announcements",
    element: <Announcements />,
    avoidInHeader: true,
  },
];

const allPrivateRoutes = {
  // "/admin/reports": {
  //   title: "Assessment Board",
  //   description: "Track, manage, open and close vulnerabilities",
  //   element: <Reports />,
  // },
};

// Generate the derived objects
const { publicRoutes, privateRoutes, topBarItems, router } = generateAppData(
  allPublicRoutes,
  allPrivateRoutes
);

export { publicRoutes, privateRoutes, topBarItems, router };
