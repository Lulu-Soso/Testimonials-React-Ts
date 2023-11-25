import { Carousel } from "../../types/Carousel"
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";

export const items: Array<Carousel> = [
    {
      id: 1,
      title: "Title part 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: slide4,
    },
    {
      id: 2,
      title: "Title part 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: slide2,
    },
    {
      id: 3,
      title: "Title part 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: slide3,
    },
    {
      id: 4,
      title: "Title part 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: slide1,
    },
  ];
  