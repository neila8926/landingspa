import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={service.imageUrl}
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h4 className="font-serif text-2xl font-bold mb-2 text-shadow-sm">{service.name}</h4>
        <p className="font-sans text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {service.benefit}
        </p>
      </div>
    </motion.div>
  );
};

const ServiceDetail = ({ title, services }) => {
  return (
    <section id="tipos-servicios" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h3>
          <p className="font-sans text-textLight text-lg max-w-2xl mx-auto">Explora nuestras categorías especializadas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
