import { motion } from 'motion/react';
import { LOCATIONS } from '@/constants';
import { MapPin, Phone, Clock, Mail, Navigation2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LocationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Sleek, Clean Hero Block */}
      <section className="relative w-full min-h-[45vh] md:min-h-[55vh] bg-brand-dark-navy flex items-center pt-32 pb-20 justify-center text-center overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-brand-coral text-[10px] md:text-sm font-semibold tracking-[0.4em] uppercase">Our Offices</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-serif uppercase tracking-tight"
            >
              Zimbabwean <span className="italic font-light">Presence</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            >
              Conveniently located in Bulawayo, Zimbabwe.
            </motion.p>
          </div>
        </div>
        
        {/* Sleek Minimalist Architectural Accents */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-white/5 hidden lg:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-white/5 hidden lg:block" />
      </section>

      <section className="py-20 md:py-32 container mx-auto px-6 md:px-12">
        <div className="space-y-20 md:space-y-32">
          {/* Bulawayo HQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
             <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <span className="text-brand-coral font-bold uppercase tracking-[0.3em] text-[10px] block">Main Head Office</span>
                <h2 className="text-4xl md:text-6xl text-[#F3F4F6] uppercase tracking-tighter">Bulawayo Office</h2>
                <div className="h-1 w-20 md:w-24 bg-brand-coral" />
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4 md:space-x-6 pb-6 md:pb-8 border-b border-white/5">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-coral mt-1" />
                  <div>
                    <span className="text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px] font-bold block mb-2">Address</span>
                    <span className="text-lg md:text-xl text-white font-light whitespace-pre-line">{LOCATIONS.bulawayo.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6 pb-6 md:pb-8 border-b border-white/5">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-coral mt-1" />
                  <div>
                    <span className="text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px] font-bold block mb-2">Direct Line</span>
                    <span className="text-lg md:text-xl text-white font-light">{LOCATIONS.bulawayo.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-coral mt-1" />
                  <div>
                    <span className="text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px] font-bold block mb-2">Business Hours</span>
                    <span className="text-lg md:text-xl text-white font-light">{LOCATIONS.bulawayo.hours}</span>
                  </div>
                </div>
              </div>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATIONS.bulawayo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none px-10 py-8 font-bold uppercase tracking-widest text-[11px] transition-all">
                  <Navigation2 className="mr-2 w-4 h-4" /> Get Directions
                </Button>
              </a>
            </div>
            <div className="h-[300px] sm:h-[400px] md:h-[600px] w-full bg-brand-dark-navy border border-white/5 overflow-hidden">
               <iframe 
                 src={LOCATIONS.bulawayo.mapUrl}
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 md:py-32 bg-brand-navy text-white border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter">Full National Coverage</h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg font-light">
              While our head office is located in Bulawayo, KM Construction handles civil, structural, and building projects nationwide across Matabeleland, Mashonaland, Midlands, and Manicaland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {['In-House Logistics', 'Regional Managers', 'Site Supervision', 'Mobile Units'].map(item => (
              <div key={item} className="p-8 md:p-10 border border-white/5 text-center uppercase tracking-widest text-[10px] font-bold text-brand-sky bg-brand-dark-navy/50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
