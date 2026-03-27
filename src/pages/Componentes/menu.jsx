import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import logo from '../../imagenes/FerreConstrucchones.png';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpen(open);
  };

  // 👇 Define tus rutas
  const menuItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Productos', path: '/productos' },
    { text: 'Nosotros', path: '/sobre-nosotros' },
    { text: 'Sistema de Apartado', path: '/sistemaApartado' },
    { text:'Bolsa de Trabajo', path: '/bolsaTrabajo' },
    { text: 'Contacto', path: '/contacto' },
  ];

  // Drawer lateral (para móviles)
  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar>

          {/* Botón hamburguesa (visible en móviles) */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo + Nombre */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              textDecoration: 'none', // evita subrayado en texto
              cursor: 'pointer'
            }}
          >
            <img
              src={logo}
              alt="Logo FerreConstrucchones"
              style={{ height: '80px', marginRight: '10px' }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: '#fff' }}
            >
              FerreConstrucchones
            </Typography>
          </Box>

          {/* Menú visible en pantallas grandes */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 500,
                  mx: 1,
                  '&:hover': { color: '#ff0000ff' },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Menu;
