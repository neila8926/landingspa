import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";


const Ubicacion  = () => {
  
   return (
    <section className="py-20 bg-muted/10">
      <div className="container px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Visítanos en Cartagena
          </h2>
          <p className="text-xl text-muted-foreground">
            Tu oasis de bienestar te espera
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-card space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Dirección</h3>
                  <p className="text-muted-foreground text-white">
                    Portal Comercial 4 Vientos<br />
                    Local 3A<br />
                    Cartagena de Indias, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-accent/20 p-3">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Contacto</h3>
                  <p className="text-muted-foreground text-white">
                    WhatsApp: +57 315 4251382<br />
                    Cel: +57 315 4251382<br />
                    yolimaballesta@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Horarios</h3>
                  <p className="text-muted-foreground text-white">
                    Lunes a Sábado: 9:00 AM - 5:00 PM<br />
                    Domingo: Cerrado<br />
                    <span className="text-sm italic">*Citas con previa reserva</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-card">
              <h3 className="font-semibold text-white mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4">
                <button
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://www.instagram.com/yolima.ballesta/?hl=es', '_blank')}
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </button>
                <button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:bg-accent hover:text-white"
                onClick={()=>{window.open("https://www.facebook.com/yolimaballestaSpaEsthetic?locale=es_LA", "_blank")}}
                >
                  <Facebook className="h-5 w-5 mr-2" />
                Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-card-hover h-[500px] border border-border/30">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.8213443994073!2d-75.50088621831122!3d10.406481036929895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef6259812a0fbdd%3A0xa97bc51bdd000d9b!2sYolima%20Ballesta%20Spa%20%26%20Esthetic%20-%20Cartagena!5e0!3m2!1ses-419!2sco!4v1761188409770!5m2!1ses-419!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;