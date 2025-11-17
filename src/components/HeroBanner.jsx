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
        duration: 0.6,
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
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <motion.div
        className="relative z-10 text-center p-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg"
          variants={itemVariants}
        >
          Yolima Ballesta Spa: Alta Estética y Bienestar Integral en Cartagena.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-shadow"
          variants={itemVariants}
        >
          Tratamientos faciales y corporales de vanguardia
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <a
            href="#servicios"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out text-lg transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Explorar Experiencias
          </a>
          <a
            href="#reservar"
            className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-lg transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Reservar Cita Ahora
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
