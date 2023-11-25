import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import { Box, IconButton, Stack } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  RadioButtonUnchecked,
  RadioButtonChecked,
} from "@mui/icons-material";
import { items } from "../../../../commons/constants/carouselItems";

const CarouselContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

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
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
          transform: `translate(-${activeIndex * 100}%)`,
        }}
      >
        {items.map((item) => {
          return <CarouselItem key={item.id} item={item} width={"100%"} />;
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: "100%",
        }}
      >
        <IconButton
          size="large"
          sx={{ color: "white", ml: 2 }}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          size="large"
          sx={{ color: "white", mr: 2 }}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {items.map((item, index) => (
            <IconButton
              key={item.id}
              size="small"
              sx={{ mx: 0.5, color: "white" }}
              onClick={() => updateIndex(index)}
            >
              {index === activeIndex ? (
                <RadioButtonChecked fontSize="small" />
              ) : (
                <RadioButtonUnchecked fontSize="small" />
              )}
            </IconButton>
          ))}
        </Stack>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => updateIndex(activeIndex - 1)}
          size="large"
          sx={{ backgroundColor: "white" }}
        >
          <ArrowBackIosNew />
        </IconButton>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {items.map((_, index) => (
            <IconButton
              key={index}
              size="small"
              sx={{ backgroundColor: "white" }}
              onClick={() => updateIndex(index)}
            >
              {index === activeIndex ? (
                <RadioButtonChecked fontSize="small" />
              ) : (
                <RadioButtonUnchecked fontSize="small" />
              )}
            </IconButton>
          ))}
        </Stack>
        <IconButton
          size="large"
          sx={{ backgroundColor: "white" }}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default CarouselContainer;
