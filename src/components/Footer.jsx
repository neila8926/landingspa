import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Yolima Ballesta Spa & Esthetic. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Cartagena de Indias, Colombia</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
