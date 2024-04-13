// import { lazy } from "react";
import Home from "../pages/Home/Home";

const navigationItems = [
  {
    id: "home",
    path: "/",
    index: true,
    text: "홈",
    element: <Home />,
    lazy: () => import("@/pages/Home/Home"),
  },
];

export default navigationItems;
