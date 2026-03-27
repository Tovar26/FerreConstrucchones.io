import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Fade, Grow } from '@mui/material';
import ferreConstruc from "../../imagenes/Fachada.png";
import MisionVision from "../../imagenes/MisionVision.png";
import liston from "../../imagenes/liston.png";
const Nosotros = () => {
  const valores = [
    { titulo: 'Compromiso', descripcion: 'Cumplimos con nuestros clientes garantizando productos de alta calidad y atención personalizada.' },
    { titulo: 'Innovación', descripcion: 'Nos adaptamos a las nuevas tecnologías y tendencias del mercado para ofrecer siempre lo mejor.' },
    { titulo: 'Responsabilidad', descripcion: 'Trabajamos con ética y respeto hacia nuestros colaboradores, clientes y la comunidad.' },
    { titulo: 'Trabajo en equipo', descripcion: 'Creemos en la colaboración como base para alcanzar los mejores resultados.' },
  ];

  const [showImage, setShowImage] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setShowImage(true);

    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);


  return (
    <Box sx={{ backgroundColor: '#f7f7f7', py: 5, px: { xs: 2, sm: 4, md: 10 } }}>
      {/* Título principal */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "20vh", sm: "28vh", md: "30vh" },
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
                fontSize: { xs: "2.7rem", sm: "4rem", md: "5rem" },
                letterSpacing: "0.2em"
              }}
            >
              CONOCENOS
            </Typography>
          </Grow>
        </Box>
      </Box>

      {/* Historia */}
      <Grid
        container
        spacing={3}
        alignItems="center"
        sx={{ mb: 10, mt: 5 }}
      >

        {/* IMAGEN */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 1 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={ferreConstruc}
            alt="FerreConstrucchones historia"
            sx={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* TEXTO */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 2 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: '#d32f2f', mb: 3 }}
          >
            Nuestra Historia
          </Typography>

          <Typography sx={{ color: '#555', lineHeight: 1.8, mb: 2 }}>
            <strong> FerreConstrucchones</strong> es una empresa fundada el 1 de marzo de 2009 en El Chico, municipio<br /> de
            Casimiro Castillo, Jalisco, iniciando bajo el nombre de  FERRETERÍA Y MATERIALES <br />PARA CONSTRUCHON.
          </Typography>

          <Typography sx={{ color: '#555', lineHeight: 1.8, mb: 2 }}>
            Desde su fundación, la empresa se ha dedicado al sector de aceros y materiales para la<br /> construcción, creciendo con esfuerzo, compromiso y la confianza de sus clientes.
          </Typography>

          <Typography sx={{ color: '#555', lineHeight: 1.8 }}>
            En 2025 adoptó el nombre de  <strong> FerreConstrucchones</strong>, manteniendo su compromiso de <br /> ofrecer calidad, confianza y buen servicio desde su sede en El Chico, Jalisco.
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 10 }} />

      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          mb: 10,
          flexDirection: { xs: "column", md: "row" },
        }}
      >

        {/* IMAGEN */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 1 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={MisionVision}
            alt="Mision y vision"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            }}
          />
        </Grid>


        {/* CARDS */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >

            {/* CARD 1 */}
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#d32f2f", mb: 2 }}
                >
                  Misión
                </Typography>

                <Typography>
                  Brindar soluciones integrales en materiales de construcción y ferretería,<br />
                  garantizando calidad, servicio y confianza en cada producto, con un equipo<br />
                  humano comprometido con la satisfacción del cliente.
                </Typography>
              </CardContent>
            </Card>


            {/* CARD 2 */}
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#d32f2f", mb: 2 }}
                >
                  Visión
                </Typography>

                <Typography>
                  Ser una empresa líder en el sector ferretero y de construcción a nivel regional,<br /> reconocida por su excelencia en servicio, innovación constante y compromiso<br /> con el desarrollo sostenible.
                </Typography>
              </CardContent>
            </Card>

          </Box>
        </Grid>

      </Grid>

      <Divider sx={{ mb: 8 }} />

      {/* Valores */}
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#d32f2f', mb: 3 }}>
          Nuestros Valores
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        {valores.map((valor, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff",
              height: "100%",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#d32f2f",
                  textAlign: "center",
                }}
              >
                {valor.titulo}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#555", textAlign: "justify" }}
              >
                {valor.descripcion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Nosotros;
