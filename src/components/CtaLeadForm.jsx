import React, { useState } from 'react';

const CtaLeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: new Date().toISOString().split('T')[0],
    time: '08:00'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un backend o a un servicio de email marketing.
    console.log('Form data submitted:', formData);
    //Enviar datos a chat de whatsapp
    const message = `- *Nombre:* ${formData.name} - *Email:* ${formData.email} - *Teléfono:* ${formData.phone} - *Mensaje:* ${formData.message} - *Fecha:* ${formData.date} - *Hora:* ${formData.time}`;
    window.open(`https://wa.me/573154251382?text=${message}`);
    //alert('¡Gracias por registrarte! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section id="reservar" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">¿Lista para Empezar tu Transformación?</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo" 
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu mejor email" 
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Tu número de teléfono" 
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <div className='flex gap-1.5 w-full'>
              <input 
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="fecha de reserva" 
              required
              className="w-2/4 px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input 
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              min="08:00"
              max="18:00"
             
              className="w-2/4 px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            </div>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Servicio que necesitas" 
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button 
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded transition-all duration-300 ease-in-out"
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaLeadForm;
