// import { lazy } from "react";
import Home from "../pages/Home/Home";
import Careers from "../pages/Mimiworld/Careers";
import CeoMessage from "../pages/Mimiworld/CeoMessage";
import Mimiworld from "../pages/Mimiworld/Mimiworld";
import AboutUs from "../pages/Mimiworld/AboutUs";

const navigationItems = [
  {
    id: "home",
    path: "/",
    index: true,
    text: "홈",
    element: <Home />,
    lazy: () => import("@/pages/Home/Home"),
  },
  {
    path: "/mimiworld",
    element: <Mimiworld />,
    children: [
      { index: true, element: <AboutUs /> }, // '/mimiworld'의 기본 페이지
      { path: "ceomessage", element: <CeoMessage /> },
      { path: "careers", element: <Careers /> },
    ],
  },
];

export default navigationItems;
