import { AboutMe } from "../sections/AboutMe";
import { Contact } from "../sections/Contact";
import { First } from "../sections/First";
import { Plans } from "../sections/Plans";
import { Testimonials } from "../sections/Testimonials";

export const sections = [
  { id: "1", name: "Home", component: <First />, bgColor: "primary" },
  {
    id: "2",
    name: "About Us",
    component: <AboutMe />,
    bgColor: "secondary",
  },
  {
    id: "3",
    name: "Plans",
    component: <Plans />,
    bgColor: "primary",
    haveIsMobile: true,
  },
  {
    id: "4",
    name: "Testimonials",
    component: <Testimonials />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "5",
    name: "Contact",
    component: <Contact />,
    bgColor: "primary",
    haveIsMobile: true,
  },
];
