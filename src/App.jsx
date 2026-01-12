import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ServiceRow from './components/ServiceRow';
import TestimonialBlock from './components/TestimonialBlock';
import CtaLeadForm from './components/CtaLeadForm';
import Footer from './components/Footer';

import { popularServices, advancedAesthetics } from './data.js';
import Ubicacion from './components/Ubicacion.jsx';
import ServiceDetail from './components/ServiceDetail.jsx';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <ServiceRow title="Nuestros Servicios" services={popularServices} />
        <ServiceDetail title="Tipos de servicios" services={advancedAesthetics} />
        <TestimonialBlock />
        <CtaLeadForm />
        <Ubicacion />
      </main>
      <Footer />
    </div>
  );
}

export default App;