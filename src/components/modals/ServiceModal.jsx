import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ServiceModal = ({ isOpen, service, onClose }) => {
    if (!isOpen) return null;

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: "-50%", x: "-50%", scale: 0.9 },
        visible: { opacity: 1, y: "-50%", x: "-50%", scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 z-50"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="fixed top-1/2 left-1/2 bg-gray-900 text-white rounded-xl shadow-2xl shadow-cyan-500/20 w-[90vw] max-w-lg max-h-[85vh] flex flex-col"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 flex justify-between items-start border-b border-gray-800">
                            <h3 className="text-2xl font-bold text-cyan-400 pt-1">{service?.name}</h3>
                            <button
                                className="bg-gray-800/50 hover:bg-cyan-500/80 rounded-full p-1.5 text-white transition-colors duration-300"
                                onClick={onClose}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-grow">
                            <p className="text-gray-300 mb-4">{service.benefit}</p>
                            
                            {service?.benefitList && (
                                <ul className="space-y-3">
                                    {service.benefitList.map((benefit, index) => (
                                        <li key={index} className="text-sm bg-gray-800 p-3 rounded-lg">
                                            <span className="font-bold text-cyan-300">{benefit[0]}</span>
                                            {benefit.length > 1 && <span className="text-gray-400 ml-2">{benefit.slice(1).join(' ')}</span>}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        
                        <div className="p-6 border-t border-gray-800">
                             <button
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={onClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ServiceModal;