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

    // Estructura de mensaje profesional y organizada
    const message = `✨ *Nueva Solicitud de Cita* ✨
  
*Cliente:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}

📅 *Fecha:* ${formData.date}
⏰ *Hora:* ${formData.time}

📝 *Descripción del servicio:* ${formData.message}

---
_Enviado desde el sitio web_`;

    // Es fundamental usar encodeURIComponent para manejar espacios y caracteres especiales
    const whatsappUrl = `https://wa.me/573154251382?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    // Reset del formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      date: new Date().toISOString().split('T')[0],
      time: '08:00'
    });
  };

  return (
    <section id="reservar" className="py-20 bg-primary/10 relative overflow-hidden">
      {/* Soft decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Text Side */}
          <div className="md:w-1/2 p-10 bg-primary text-white flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Porque tú te lo mereces</h2>
            <p className="font-sans text-white/90 text-lg mb-8 leading-relaxed">
              Reserva tu cita hoy mismo y déjanos cuidar de ti. Un viaje hacia la relajación y la belleza te espera.
            </p>
            <div className="flex items-center gap-2 text-secondary font-bold">
              <span>Agenda tu cita fácilmente</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="space-y-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-textDark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-primary/50"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-textDark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-primary/50"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-textDark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-primary/50"
              />
              <div className='flex gap-3 w-full'>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-4 py-3 rounded-lg bg-background border border-gray-200 text-textDark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-primary/50"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  min="08:00"
                  max="18:00"
                  className="w-1/2 px-4 py-3 rounded-lg bg-background border border-gray-200 text-textDark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-primary/50"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="¿Qué servicio deseas?"
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-textDark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover:border-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-textDark font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-serif text-lg"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaLeadForm;
