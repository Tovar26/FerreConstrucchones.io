import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home.jsx';
import SobreNosotros from '../pages/Nosotros/nosotros.jsx';
import Contacto from '../pages/Contacto/Contacto.jsx';
import Navbar from '../pages/Componentes/menu.jsx';
import Footer from '../pages/Componentes/footer.jsx';
import Productos from '../pages/Productos/Productos.jsx';
import SistemaApartado from '../pages/SistemaApartado/SistemaApartado';
import BolsaTrabajo from '../pages/BolsaTrabajo/BolsaTrabajo.jsx';

const Rutas = () => {
  return (
    <Router>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sistemaApartado" element={<SistemaApartado />} />
        <Route path="/bolsaTrabajo" element={<BolsaTrabajo />} />
      </Routes>

      {/* Footer visible en todas las páginas */}
      <Footer />
    </Router>
  );
};

export default Rutas;