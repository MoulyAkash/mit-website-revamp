import { createBrowserRouter } from "react-router-dom";
import {} from "react-icons/bi";

// Main Pages Import

import MainApp from "./pages/public/MainApp";
import Home from "./pages/public/Home/Home";
import About from "./pages/public/About/About";
import Contact from "./pages/public/Contact/Contact";

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
  const topBarItems = Object.entries(publicRoutes).map(
    ([path, route]: any) => ({
      path,
      title: route.title,
    })
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      children: allPublicRoutes,
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
    path: "/about",
    title: "About Us",
    element: <About />,
  },
  {
    path: "/contact",
    title: "Contact",
    element: <Contact />,
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
