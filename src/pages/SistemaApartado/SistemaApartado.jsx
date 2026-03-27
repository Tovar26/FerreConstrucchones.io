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
import hsbcLogo from "../../imagenes/hsbcLogo.png";

const SistemaApartado = () => {

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
        <>
            {/* HERO SUPERIOR */}
            <Box
                sx={{
                    mt: 4,
                    width: "100%",
                    height: { xs: "20vh", sm: "30vh", md: "40vh" },
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
                        SISTEMA DE
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
                            APARTADO
                        </Typography>
                    </Grow>
                </Box>
            </Box>

            {/* PASOS A SEGUIR */}
            <Box
                sx={{
                    backgroundColor: "#f7f7f7",
                    py: 4,
                    px: { xs: 3, sm: 6, md: 10 },
                }}
            >
                <Grid item xs={12} md={12} lg={12}>
                    <Card
                        sx={{
                            borderRadius: 3,
                            boxShadow: 3,
                            backgroundColor: "#fff",
                        }}
                    >
                        <CardContent>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#d32f2f",
                                    mb: 2,
                                    textAlign: "center",
                                }}
                            >
                                Pasos para usar el sistema de apartado
                            </Typography>

                            <Box sx={{ px: { xs: 1, md: 4 } }}>

                                {/* Paso 1 */}
                                <Typography sx={{ mb: 1, color: "#555", fontWeight: "bold" }}>
                                    1.- Llama o visítanos y solicita una cotización personalizada.
                                </Typography>

                                <Typography sx={{ mb: 2, color: "#555" }}>
                                    Nuestro equipo te atenderá con gusto para conocer qué material necesitas,
                                    las cantidades requeridas y el lugar de entrega, con el fin de brindarte
                                    el mejor precio y la opción más conveniente para tu proyecto.
                                </Typography>


                                {/* Paso 2 */}
                                <Typography sx={{ mb: 1, color: "#555", fontWeight: "bold" }}>
                                    2.- Realiza el pago o depósito correspondiente a la cotización.
                                </Typography>

                                <Typography sx={{ mb: 2, color: "#555" }}>
                                    Una vez que estés de acuerdo con el precio, podrás confirmar tu pedido
                                    realizando el pago en sucursal o mediante depósito o transferencia,
                                    según la opción que te indiquemos. Esto nos permitirá preparar tu
                                    material con anticipación y asegurar su disponibilidad.
                                </Typography>


                                {/* Paso 3 */}
                                <Typography sx={{ mb: 1, color: "#555", fontWeight: "bold" }}>
                                    3.- Recibe tu material directamente en tu domicilio cuando lo necesites.
                                </Typography>

                                <Typography sx={{ color: "#555" }}>
                                    Después de confirmar tu pedido, podrás solicitar el envío hasta tu casa,
                                    obra o negocio en el momento que lo requieras. Nos encargamos de la
                                    entrega para que no tengas que preocuparte por el traslado y puedas
                                    continuar con tu trabajo sin contratiempos.
                                </Typography>

                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#f7f7f7",
                    py: 4,
                    px: { xs: 3, sm: 6, md: 10 },
                }}
            >
                {/* Título */}
                <Grid container spacing={4} alignItems="center" justifyContent="center">
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

                    {/* Columna 2: INFORMACIÓN DE PAGO */}
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

                                {/* Título */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#d32f2f",
                                        mb: 3,
                                        textAlign: "center",
                                    }}
                                >
                                    Información de pago
                                </Typography>

                                {/* Logo del banco */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        mb: 3,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={hsbcLogo}   // tu imagen local
                                        alt="HSBC"
                                        sx={{
                                            width: 140,
                                            height: "auto",
                                        }}
                                    />
                                </Box>

                                {/* Datos de pago */}
                                <Box sx={{ px: { xs: 2, md: 4 } }}>

                                    <Typography sx={{ mb: 1.5, color: "#555" }}>
                                        <strong>Banco:</strong> HSBC
                                    </Typography>

                                    <Typography sx={{ mb: 1.5, color: "#555" }}>
                                        <strong>Nombre del titular:</strong> ____________________
                                    </Typography>

                                    <Typography sx={{ mb: 1.5, color: "#555" }}>
                                        <strong>Número de tarjeta:</strong> ____________________
                                    </Typography>

                                    <Typography sx={{ mb: 1.5, color: "#555" }}>
                                        <strong>Fecha de vencimiento:</strong> __ / __
                                    </Typography>

                                    <Typography sx={{ color: "#555" }}>
                                        <strong>CVV:</strong> ___
                                    </Typography>

                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default SistemaApartado;
