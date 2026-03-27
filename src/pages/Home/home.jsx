import React from "react";
import { Box, keyframes, Typography, Button } from "@mui/material";
import liston from "../../imagenes/listonv2.png";
import Slider from "../Componentes/Slider-Home/Slider.jsx";
import FondoLugares from "../../imagenes/lugares/Fondo.webp";
import LogoFC from "../../imagenes/lugares/Logo.webp";
import SistemaApartado from "../../imagenes/SistemaApartado/SistemaApartado.png";
import { useNavigate } from "react-router-dom";
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO SUPERIOR */}
      <Box
        sx={{
          mt: 4,
          width: "100%",
          height: { xs: "25vh", sm: "35vh", md: "45vh" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={liston}
          alt="Ribbon"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "0 4px 10px rgba(0,0,0,0.6)",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            BIENVENIDO A
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "0 4px 10px rgba(0,0,0,0.6)",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            FerreConstrucchones
          </Typography>
        </Box>
      </Box>

      <Slider />

      <Box sx={{ position: "relative", width: "100%" }}>

        <Box
          sx={{
            mt: 4,

            width: "100%",
            height: { xs: 200, sm: 300, md: 500 }, // responsive real
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
          }}
        >
          <Box
            component="img"
            src={FondoLugares}
            alt="Ribbon"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>

        <Box
          onClick={() => navigate("/sistemaApartado")}
          sx={{
            mt: 3,
            mb: 12,
            width: "100%",
            height: { xs: 200, sm: 300, md: 500 },
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            cursor: "pointer", // para que se vea clickeable
          }}
        >
          <Box
            component="img"
            src={SistemaApartado}
            alt="Ribbon"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>

      </Box>
    </>
  );
};

export default Home;
