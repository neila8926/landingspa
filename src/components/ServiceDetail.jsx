import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative flex-none w-64 h-76  rounded-xl shadow-cyan-500/50" style={{backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      <div className={`absolute inset-0 p-6 flex flex-col justify-end`}>
        <h4 className="text-red text-lg">{service.name}</h4>
        <p className="text-gray-300 text-sm mt-2 ">
          {service.benefit}
        </p>
      </div>
    </div>
  );
};

const ServiceDetail = ({ title, services }) => {
  const constraintsRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

  useEffect(() => {
    const calculateConstraints = () => {
      if (constraintsRef.current) {
        const containerWidth = constraintsRef.current.offsetWidth;
        const contentWidth = constraintsRef.current.scrollWidth;
        const newLeftConstraint = contentWidth > containerWidth ? -(contentWidth - containerWidth) : 0;
        setDragConstraints({ right: 0, left: newLeftConstraint });
      }
    };

    // A small delay to ensure content is loaded and rendered
    const timer = setTimeout(calculateConstraints, 100);

    window.addEventListener('resize', calculateConstraints);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateConstraints);
    };
  }, [services]);

  return (
    <section id="servicios" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex-col sm:lex justify-center sm:justify-between items-center mb-8">
          <h3 className="text-xl sm:text-3xl font-bold">{title}</h3>
          
        </div>
        <motion.div ref={constraintsRef} className="overflow-x-auto scrollbar-hide relative cursor-grab" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="flex space-x-6 justify-center"
            drag="x"
            dragConstraints={dragConstraints}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
