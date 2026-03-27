import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  Link,
  Fade,
  Grow,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import liston from "../../imagenes/listonv2.png";

const Contacto = () => {
  const [showImage, setShowImage] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setShowImage(true);

    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const telefonos = [
    "3573830620",
    "3171137203",
    "3178733039",
    "3171291638",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        py: 3,
        px: { xs: 2, sm: 6, md: 10 },
      }}
    >
      {/* Título */}
      <Box
        sx={{
          mt: 2,
          mb: 4,
          width: "100%",
          height: { xs: "20vh", sm: "25vh", md: "35vh" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={showImage} timeout={1500}>
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
        </Fade>

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
          <Grow in={pulse} timeout={800}>
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textShadow: "0 4px 10px rgba(0,0,0,0.6)",
                fontSize: { xs: "2rem", sm: "3.5rem", md: "4.5rem" },
                letterSpacing: "0.2em"
              }}
            >
              CONTÁCTANOS
            </Typography>
          </Grow>
        </Box>
      </Box>

      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#d32f2f",
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Información de contacto
              </Typography>

              {/* Teléfonos clicables */}
              {telefonos.map((numero, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <PhoneIcon sx={{ mr: 1, color: "#d32f2f" }} />
                  <Link
                    href={`tel:${numero}`}
                    underline="hover"
                    sx={{
                      color: "#555",
                      fontWeight: "500",
                      "&:hover": { color: "#d32f2f" },
                    }}
                  >
                    {numero.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}
                  </Link>
                </Box>
              ))}

              {/* Dirección */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 3,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <LocationOnIcon sx={{ mr: 1, color: "#d32f2f" }} />
                <Typography sx={{ color: "#555" }}>
                  Calle Álvaro Obregón #69, El Chico, C. Castillo, Jalisco
                </Typography>
              </Box>

              {/* Redes sociales */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 3,
                  gap: 2,
                }}
              >
                {/* Facebook */}
                <IconButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=100068550897138"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#3b5998",
                    "&:hover": { backgroundColor: "#2d4373" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>

                {/* Instagram */}
                <IconButton
                  component="a"
                  href="https://www.instagram.com/ferreconstrucchones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#E1306C",
                    "&:hover": { backgroundColor: "#C13584" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>

                {/* WhatsApp */}
                <IconButton
                  component="a"
                  href="https://wa.me/3171291638?text=¡Hola!%20Me%20gustaría%20obtener%20más%20información%20sobre%20FerreConstrucchones."
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#25D366",
                    "&:hover": { backgroundColor: "#1EBE57" },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Columna 2: Mapa con marcador */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              height: { xs: 420, md: 340 },
              width: { xs: 370, md: 450 },
            }}
          >
            <iframe
              title="Ubicación FerreConstrucchones"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=19.5634072,-104.5557559&hl=es&z=16&output=embed`}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacto;
