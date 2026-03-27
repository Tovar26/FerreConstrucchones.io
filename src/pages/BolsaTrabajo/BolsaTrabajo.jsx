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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const BolsaTrabajo = () => {
    const telefonos = [
        "3573830620",
        "3171137203",
        "3178733039",
        "3171291638",
    ];

    const requisitos = [
        "Solicitud de empleo",
        "Ser mayor de edad",
        "Disponibilidad de horario",
        "Buena actitud",
        "Identificación oficial",
        "Gusto por las ventas",
    ]


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
        <Box
            sx={{
                backgroundColor: "#f7f7f7",
                mt: 1,
                px: { xs: 1, sm: 4, md: 7 },
            }}
        >
            {/* Título */}
            <Box
                sx={{
                    mt: 4,
                    width: "100%",
                    height: { xs: "19vh", sm: "28vh", md: "38vh" },
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

                    <Typography
                        variant="h5"
                        sx={{
                            color: "#fff",

                            textShadow: "0 4px 10px rgba(0,0,0,0.6)",
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                        }}
                    >
                        BOLSA DE
                    </Typography>

                    <Grow in={pulse} timeout={800}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                textShadow: "0 4px 10px rgba(0,0,0,0.6)",
                                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                                letterSpacing: "0.2em"
                            }}
                        >
                            TRABAJO
                        </Typography>
                    </Grow>
                </Box>
            </Box>

            <Grid  mt={3} mb={3} container spacing={4} alignItems="center" justifyContent="center">
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

                {/* Columna 2: Requisitos */}
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
                                Requisitos para solicitar trabajo
                            </Typography>

                            {/* Lista de requisitos */}
                            {requisitos.map((requisito, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 1.5,
                                        justifyContent: { xs: "center", md: "flex-start" },
                                    }}
                                >
                                    <ArrowRightIcon sx={{ mr: 1, color: "#d32f2f" }} />

                                    <Typography
                                        sx={{
                                            color: "#555",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {requisito}
                                    </Typography>
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
                                <Typography align="center" sx={{ color: "#555" }}>
                                    Preséntate en nuestras oficinas con la documentación requerida
                                </Typography>
                            </Box>



                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BolsaTrabajo;
