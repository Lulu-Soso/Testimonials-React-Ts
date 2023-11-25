import React from "react";
import { Testimonial } from "../../../../types/Testimonial";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface TestimonialItemProps {
  item: Testimonial;
  width: string;
}

const TestimonialItem = ({ item, width }: TestimonialItemProps) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const height = isMd ? "300px" : isLg ? "350px" : "400px";

  return (
    <Box
      sx={{
        width: width,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: height,
        backgroundColor: "lightgrey",
      }}
    >
      <Container
        sx={{
          mt: "auto",
          pb: 5,
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            // width: "100%",
            py: 2,
            pb: 3,
            px: 4,
            color: "dark",
          }}
          whiteSpace="normal"
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "10%",
            }}
          />
          <Typography
            sx={{
              my: 1,
              py: 1,
            }}
          >
            {item.description}
          </Typography>
          <Typography
            sx={{
              my: 1,
              py: 1,
            }}
          >
            {item.author}
          </Typography>
          <Typography
            sx={{
              my: 1,
              py: 1,
            }}
          >
            {item.job}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialItem;
