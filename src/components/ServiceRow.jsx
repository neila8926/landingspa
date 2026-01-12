import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './modals/ServiceModal';

const ServiceCard = ({ service, onVerDetalles }) => {
  return (
    <motion.div
      className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="p-6 text-center">
        <h4 className="font-serif text-2xl font-bold text-textDark mb-3">{service.name}</h4>
        <p className="font-sans text-textLight text-sm mb-6 line-clamp-3">
          {service.benefit}
        </p>
        <button
          onClick={() => onVerDetalles(service)}
          className="inline-block px-6 py-2 border border-secondary text-secondary font-sans font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
        >
          Ver Detalles
        </button>
      </div>
    </motion.div>
  );
};

const ServiceRow = ({ title, services }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const abrirModal = (servicio) => {
    setServicioSeleccionado(servicio);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setServicioSeleccionado(null);
  };

  return (
    <section id="servicios" className="py-20 bg-background text-textDark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">{title}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onVerDetalles={abrirModal} />
          ))}
        </div>

        <ServiceModal
          isOpen={modalVisible}
          service={servicioSeleccionado}
          onClose={cerrarModal}
        />
      </div>
    </section>
  );
};

export default ServiceRow;
