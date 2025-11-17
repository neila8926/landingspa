import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './modals/ServiceModal';



const ServiceCard = ({ service, onVerDetalles }) => {
  return (
  <div className="group relative flex-shrink-0 w-72 h-96 bg-gray-900 rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out lg:hover:scale-105 shadow-lg lg:hover:shadow-cyan-500/50">
    
    {/* La imagen solo se escala en hover en pantallas 'lg' */}
    <img 
      src={service.imageUrl} 
      alt={service.name} 
      className="w-full h-70 object-cover transition-transform duration-300 lg:group-hover:scale-110" 
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
    
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <h4 className="text-white text-2xl font-bold drop-shadow-lg">{service.name}</h4>
    </div>


    <div 
      className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full hover:cursor-pointer transition-all duration-300  opacity-100 translate-y-0 lg:opacity-0 lg:-translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
    
      onClick={() => { onVerDetalles(service) }}
    >
      Ver Detalles
    </div>
  </div>
);
};

const ServiceRow = ({ title, services }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const abrirModal = (servicio) =>{
    console.log("servicio seleccionado")
    setServicioSeleccionado(servicio);
    setModalVisible(true);

  }

  const cerrarModal = ()=>{
    setModalVisible(false);
    setServicioSeleccionado(null);
  }

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const calculateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    calculateWidth();

    window.addEventListener('resize', calculateWidth);

    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, [services]);

  return (
    <section id="servicios" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
        <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden relative">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex space-x-6 justify-start sm:justify-center"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onVerDetalles={abrirModal}/>
            ))}
          </motion.div>
          <ServiceModal
          
          isOpen={modalVisible}
          service={servicioSeleccionado}
          onClose={cerrarModal}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceRow;
