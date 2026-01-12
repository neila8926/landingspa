import React from 'react';
import { motion } from 'framer-motion';
import videoBG from '../assets/video_inicio.mp4';

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="h-screen relative flex items-center justify-center text-white overflow-hidden">
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Soft overlay using brand colors */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent z-0"></div>

      <motion.div
        className="relative z-10 text-center p-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-md"
          variants={itemVariants}
        >
          Bienestar Integral y Alta Estética
        </motion.h1>
        <motion.p
          className="font-sans text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-sm font-light tracking-wide"
          variants={itemVariants}
        >
          Descubre el equilibrio perfecto entre belleza y relajación en Cartagena
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={itemVariants}
        >
          <a
            href="#servicios"
            className="bg-secondary text-textDark font-sans font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Explorar Servicios
          </a>
          <a
            href="#reservar"
            className="bg-transparent border border-white text-white font-sans font-bold py-4 px-8 rounded-full hover:bg-white hover:text-textDark transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendar Cita
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
