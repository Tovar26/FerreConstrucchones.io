import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import RoomIcon from '@mui/icons-material/Room'
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        //  px: { xs: 2, md: 1 },
        py: 3,
        width: '100%',
      }}
    >
      {/* CONTENEDOR PRINCIPAL RESPONSIVE */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // columna en móvil, fila en md+
          justifyContent: { xs: 'center' },
          alignItems: 'center',
          gap: { xs: 4, md: 9, lg: 22 },
          textAlign: 'center',
        }}
      >
        {/* ===== BLOQUE 1: REDES ===== */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              mb: 1,
            }}
          >
            Síguenos
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              size="small"
              sx={{ color: '#fff' }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              size="small"
              sx={{ color: '#fff' }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.tiktok.com/"
              target="_blank"
              size="small"
              sx={{ color: '#fff' }}
            >
              <MusicNoteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* ===== BLOQUE 2: DERECHOS ===== */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
            }}
          >
            © {new Date().getFullYear()} FerreConstrucciones
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.75rem', md: '0.9rem' },
            }}
          >
            Todos los derechos reservados.
          </Typography>
        </Box>

        {/* ===== BLOQUE 3: DIRECCIÓN ===== */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            component="a"
            href="https://maps.google.com"
            target="_blank"
            size="small"
            sx={{ color: '#fff' }}
          >
            <RoomIcon fontSize="small" />
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              mb: 1,
            }}
          >
            Visítanos
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              mt: 1,
            }}
          >
            Calle Álvaro Obregón #69 <br />
            El Chico, C. Castillo, Jalisco
          </Typography>
        </Box>

        {/* ===== BLOQUE 4: CONTACTO ===== */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            component="a"
            href="tel:3573830620"
            size="small"
            sx={{ color: '#fff' }}
          >
            <CallIcon fontSize="small" />
          </IconButton>

          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              mb: 1,
            }}
          >
            Contáctanos
          </Typography>

          {/* GRID DE TELÉFONOS */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, auto)',
              gap: 1,
              textAlign: 'center',
            }}
          >
            <Typography
              component="a"
              href="tel:3573830620"
              sx={{ color: '#fff', textDecoration: 'none', fontSize: { xs: '0.75rem', md: '0.9rem' } }}
            >
              357 383 0620
            </Typography>

            <Typography
              component="a"
              href="tel:3171137203"
              sx={{ color: '#fff', textDecoration: 'none', fontSize: { xs: '0.75rem', md: '0.9rem' } }}
            >
              317 113 7203
            </Typography>

            <Typography
              component="a"
              href="tel:3178733039"
              sx={{ color: '#fff', textDecoration: 'none', fontSize: { xs: '0.75rem', md: '0.9rem' } }}
            >
              317 873 3039
            </Typography>

            <Typography
              component="a"
              href="tel:3171291638"
              sx={{ color: '#fff', textDecoration: 'none', fontSize: { xs: '0.75rem', md: '0.9rem' } }}
            >
              317 129 1638
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer