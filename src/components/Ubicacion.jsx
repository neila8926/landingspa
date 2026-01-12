import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Ubicacion = () => {
  return (
    <section className="py-20 bg-background" id="ubicacion">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary tracking-[0.2em] uppercase">
            Ubicación
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Visítanos en Cartagena
          </h3>
          <p className="text-lg text-textLight max-w-2xl mx-auto font-light">
            Tu oasis de bienestar te espera en el corazón de la ciudad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-accent/30 space-y-8">

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-textDark text-lg mb-2">Dirección</h4>
                  <p className="text-textLight leading-relaxed">
                    Portal Comercial 4 Vientos<br />
                    Local 3A<br />
                    Cartagena de Indias, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-secondary/20 p-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-textDark text-lg mb-2">Contacto</h4>
                  <p className="text-textLight leading-relaxed">
                    WhatsApp: +57 315 4251382<br />
                    Cel: +57 315 4251382<br />
                    yolimaballesta@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-textDark text-lg mb-2">Horarios</h4>
                  <p className="text-textLight leading-relaxed">
                    Lunes a Sábado: 9:00 AM - 5:00 PM<br />
                    Domingo: Cerrado<br />
                    <span className="text-sm text-secondary italic mt-1 block">*Citas con previa reserva</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-accent/20 flex flex-col items-center text-center">
              <h3 className="font-serif font-bold text-textDark mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4 w-full justify-center">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                  onClick={() => window.open('https://www.instagram.com/yolima.ballesta/?hl=es', '_blank')}
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Instagram
                </button>
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                  onClick={() => { window.open("https://www.facebook.com/yolimaballestaSpaEsthetic?locale=es_LA", "_blank") }}
                >
                  <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.8213443994073!2d-75.50088621831122!3d10.406481036929895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef6259812a0fbdd%3A0xa97bc51bdd000d9b!2sYolima%20Ballesta%20Spa%20%26%20Esthetic%20-%20Cartagena!5e0!3m2!1ses-419!2sco!4v1761188409770!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;