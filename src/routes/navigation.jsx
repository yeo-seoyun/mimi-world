import Home from "../pages/Home/Home";
import Careers from "../pages/Mimiworld/Careers";
import CeoMessage from "../pages/Mimiworld/CeoMessage";
import Mimiworld from "../pages/Mimiworld/Mimiworld";
import AboutUs from "../pages/Mimiworld/AboutUs";
import Brand from "../pages/Brand/Brand";
import PrincessMimi from "../pages/Brand/PrincessMimi";
import Mimifriends from "../pages/Brand/Mimifriends";
import MimiPet from "../pages/Brand/MimiPet";
import Ddolddol from "../pages/Brand/Ddolddol";
import Product from "../pages/Product/Product";
import BrandFilter from "../pages/Product/BrandFilter";
import AgeFilter from "../pages/Product/AgeFilter";
import NewProduct from "../pages/Product/NewProduct";

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
      { index: true, element: <AboutUs /> },
      { path: "ceomessage", element: <CeoMessage /> },
      { path: "careers", element: <Careers /> },
    ],
  },
  {
    path: "/brand",
    element: <Brand />,
    children: [
      { index: true, element: <PrincessMimi /> },
      { path: "mimifriends", element: <Mimifriends /> },
      { path: "mimipet", element: <MimiPet /> },
      { path: "ddolddol", element: <Ddolddol /> },
    ],
  },
  {
    path: "/product",
    element: <Product />,
    children: [
      { index: true, element: <NewProduct /> },
      { path: "brandfilter", element: <BrandFilter /> },
      { path: "agefilter", element: <AgeFilter /> },
    ],
  },
];

export default navigationItems;
