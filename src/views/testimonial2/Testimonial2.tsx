import React from "react";
import CarouselContainer from "./components/carousel/CarouselContainer";
import TestimonialContainer from "./components/testimonial2/TestimonialContainer";
import { Box } from "@mui/material";

const Testimonial2 = () => {
  return (
    <div>
      <Box mb={2}>
        <CarouselContainer />
      </Box>
      <Box>
        <TestimonialContainer />
      </Box>
    </div>
  );
};

export default Testimonial2;
