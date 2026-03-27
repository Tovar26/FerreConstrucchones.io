import React from "react";
import { useKeenSlider } from "keen-slider/react.es";
import "keen-slider/keen-slider.min.css";
import BolsaDeTrabajo from  "../../../imagenes/Slider/BolsaTrabajo.png";
import Contactanos from  "../../../imagenes/Slider/contactanos.webp";
import Conocenos from  "../../../imagenes/Slider/Conocenos.webp";
import Productos from  "../../../imagenes/Slider/Productos.webp";
import Visitanos from  "../../../imagenes/Slider/Visitanos.webp";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  const items = [
    { id: 1, title: "Productos", text: "Descripción del item 1", img: Productos },
    { id: 2, title: "Conocenos", text: "Descripción del item 2", img: Conocenos },
    { id: 3, title: "Bolsa de trabajo", text: "Descripción del item 3", img: BolsaDeTrabajo },
    { id: 4, title: "Contáctanos", text: "Descripción del item 4", img: Contactanos },
    { id: 5, title: "Ubicación", text: "Descripción del item 5", img: Visitanos },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1300,
        margin: "0 auto",
        position: "relative",
        mt: 6,
      }}
    >
      {/* Botón Prev */}
      <IconButton
        onClick={() => slider.current?.prev()}
        sx={{
          position: "absolute",
          top: "50%",
          left: -10,
          transform: "translateY(-50%)",
          zIndex: 20,
          bgcolor: "white",
          boxShadow: 3,
          "&:hover": { bgcolor: "grey.200" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {items.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 5px 18px rgba(0,0,0,0.15)",
              }}
            >
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{
                  height: { xs: 340, sm: 380, md: 420 },
                  objectFit: "cover",
                }}
              />

              <CardContent>
                <Typography variant="h6" fontWeight="bold" align="center">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Botón Next */}
      <IconButton
        onClick={() => slider.current?.next()}
        sx={{
          position: "absolute",
          top: "50%",
          right: -10,
          transform: "translateY(-50%)",
          zIndex: 20,
          bgcolor: "white",
          boxShadow: 3,
          "&:hover": { bgcolor: "grey.200" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
