import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-textDark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl font-bold mb-4 text-secondary">Yolima Ballesta Spa & Esthetic</h3>
        <p className="font-sans text-gray-400 mb-6">Restaurando tu bienestar, realzando tu belleza.</p>

        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-secondary transition-colors font-sans uppercase text-sm tracking-wider">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-secondary transition-colors font-sans uppercase text-sm tracking-wider">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-secondary transition-colors font-sans uppercase text-sm tracking-wider">WhatsApp</a>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Yolima Ballesta Spa & Esthetic. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-600 mt-2">Cartagena de Indias, Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
