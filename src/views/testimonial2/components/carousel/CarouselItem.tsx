import React from "react";
import { Carousel } from "../../../../types/Carousel";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface CarouselItemProps {
  item: Carousel;
  width: string;
}

const CarouselItem = ({ item, width }: CarouselItemProps) => {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.down("lg"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    const height = isMd ? "200px" : isLg ? "500px" : "700px";
  
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
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
            }}
          />
        </Box>
  
        <Container
          sx={{
            mt: "auto",
            pb: 5,
            zIndex: 100,
          }}
        >
          <Box
            sx={{
              width: "70%",
              background: "rgba(0, 0, 0, 0.1)",
              py: 2,
              pb: 3,
              px: 4,
              borderRadius: 4,
              color: "white",
              boxShadow: "2px 2px 3px 1px rgba(25,25,25,0.5)",
            }}
            whiteSpace="normal"
          >
            <Typography variant="h2">{item.title}</Typography>
            <Typography
              variant="h4"
              sx={{
                my: 1,
                py: 1,
                borderBottom: "2px solid white",
                borderTop: "2px solid white",
              }}
            >
              {item.description}
            </Typography>
  
            <Stack>
              <Button
                onClick={() => console.log("la")}
                variant="contained"
                sx={{ ml: "auto" }}
              >
                En savoir plus
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default CarouselItem;
