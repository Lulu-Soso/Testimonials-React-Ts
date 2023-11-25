import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
} from "@mui/icons-material";
import { items } from "../../../../commons/constants/testimonialItems";
import TestimonialItem from "./TestimonialItem";

const CarouselContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          whiteSpace: "nowrap",
          transition: "transform 0.3s",
          transform: `translate(-${activeIndex * 100}%)`,
        }}
      >
        {items.map((item) => {
          return <TestimonialItem key={item.id} item={item} width={"100%"} />;
        })}
      </Box>
    </Box>
  );
};

export default CarouselContainer;
