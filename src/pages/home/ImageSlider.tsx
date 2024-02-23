import React, { useEffect, useState } from "react";
import * as m from "@mui/material";
import { imagesForImageSlider } from "./aboutUsScript";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        imagesForImageSlider.length - 1 === prevIndex ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <m.Box
      sx={{
        height: "200px",
        width: "300px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        margin: "5px 0",
        borderRadius: "10px",
      }}
    >
      {imagesForImageSlider.map(
        (image, index) =>
          index === currentIndex && (
            <img
              key={image}
              src={image}
              height={200}
              width={300}
              style={{ borderRadius: "10px" }}
            />
          )
      )}
    </m.Box>
  );
};

export default ImageSlider;
