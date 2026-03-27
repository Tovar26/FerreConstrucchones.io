import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Fade,
  Grow,
  Card,
  CardMedia,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
} from "@mui/material";

import liston from "../../imagenes/listonv2.png";

// Catalogos
import CatalogoConectoresCobre from "../../imagenes/Productos/Catalogos/ConectoresCobre.webp";
import CatalogoTipoDiscoCorte from "../../imagenes/Productos/Catalogos/TiposDiscoCorte.webp";
import CatalogoTiposMetales from "../../imagenes/Productos/Catalogos/TiposMetales.webp";
import CatalogoCaseton from "../../imagenes/Productos/Catalogos/Calceton.webp";

// Materiales
import MaterialBlocckCaraPiedra from "../../imagenes/Productos/Material/BlockCaraPiedra.webp";
import MaterialBlockSolido from "../../imagenes/Productos/Material/BlockSolido.webp";
import MaterialBobeduca from "../../imagenes/Productos/Material/Bobeduca.webp";
import MaterialCementoMoctezuma from "../../imagenes/Productos/Material/CementoMoctezuma.webp";
import MaterialCementoTolteca from "../../imagenes/Productos/Material/CementoTolteca.png";
import MaterialPegaduro from "../../imagenes/Productos/Material/Pegaduro.png";
import MaterialSonoTubos from "../../imagenes/Productos/Material/SonoTubos.png";
import MaterialTuboSanitaria from "../../imagenes/Productos/Material/TubosSanitarios.png";
import MaterialRolloAsfaltico from "../../imagenes/Productos/Material/RolloAsfaltico.png";
import MaterialAlambrePuas from "../../imagenes/Productos/Material/AlambrePuas.webp";
import MaterialMetalteja from "../../imagenes/Productos/Material/Metalteja.png";
import MaterialPosteGanadero from "../../imagenes/Productos/Material/PosteGanadero.png";

// Accesorios
import AccesorioBanioLavamano from "../../imagenes/Productos/Accesorio/BanioLavamano.webp";
import AccesorioRegaderas from "../../imagenes/Productos/Accesorio/Regaderas.webp";

// Herramientas
import HerramientaCarretilla from "../../imagenes/Productos/Herramientas/Carretilla.webp";
import HerramientaCortadora from "../../imagenes/Productos/Herramientas/Cortadora.webp";
import HerramientaEscaleras from "../../imagenes/Productos/Herramientas/Escaleras.webp";
import HerramientaRevolvedoras from "../../imagenes/Productos/Herramientas/Revolvedora.webp";
import HerramientaSierraCircular from "../../imagenes/Productos/Herramientas/SierraCircular.png";
import HerramientaSoldadora from "../../imagenes/Productos/Herramientas/Soldadora.webp";
import HerramientaTaladro from "../../imagenes/Productos/Herramientas/Taladro.webp";
import HerramientaLijas from "../../imagenes/Productos/Herramientas/Lijas.webp";

const Productos = () => {
  const [showImage, setShowImage] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [tab, setTab] = useState(0);

  const [open, setOpen] = useState(false);
  const [imgSelected, setImgSelected] = useState(null);

  useEffect(() => {
    setShowImage(true);

    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  const handleOpen = (img) => {
    setImgSelected(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categorias = [
    {
      nombre: "Catalogos",
      imagenes: [
        CatalogoConectoresCobre,
        CatalogoTipoDiscoCorte,
        CatalogoTiposMetales,
        CatalogoCaseton,
      ],
    },
    {
      nombre: "Material",
      imagenes: [
        MaterialBlocckCaraPiedra,
        MaterialBlockSolido,
        MaterialBobeduca,
        MaterialCementoMoctezuma,
        MaterialCementoTolteca,
        MaterialPegaduro,
        MaterialSonoTubos,
        MaterialTuboSanitaria,
        MaterialRolloAsfaltico,
        MaterialAlambrePuas,
        MaterialMetalteja,
        MaterialPosteGanadero,
      ],
    },
    {
      nombre: "Accesorios",
      imagenes: [AccesorioBanioLavamano, AccesorioRegaderas],
    },
    {
      nombre: "Herramientas",
      imagenes: [
        HerramientaCarretilla,
        HerramientaCortadora,
        HerramientaEscaleras,
        HerramientaRevolvedoras,
        HerramientaSierraCircular,
        HerramientaSoldadora,
        HerramientaTaladro,
        HerramientaLijas,
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        py: 3,
        px: { xs: 2, sm: 6, md: 10 },
      }}
    >
      {/* TITULO */}

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
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Fade>

        <Grow in={pulse} timeout={800}>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3.5rem", md: "4.5rem" },
            }}
          >
            PRODUCTOS
          </Typography>
        </Grow>
      </Box>

      {/* TABS */}

      <Tabs
        value={tab}
        onChange={handleChange}
        centered
        textColor="error"
        indicatorColor="error"
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "center",
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
          },
        }}
      >
        {categorias.map((cat, i) => (
          <Tab
            key={i}
            label={cat.nombre}
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              minWidth: 120,
            }}
          />
        ))}
      </Tabs>

      {/* GRID */}
      <Grid container spacing={3} justifyContent="center">
        {categorias[tab].imagenes.map((img, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              onClick={() => handleOpen(img)}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="230"
                image={img}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* MODAL */}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
      >
        <DialogContent
          sx={{
            p: 0,
            backgroundColor: "#000",
          }}
        >
          <img
            src={imgSelected}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Productos;