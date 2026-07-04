import { motion } from 'motion/react';
import Hero from '@/components/sections/Hero';
import { SERVICES } from '@/constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero 
        title="Official Service Offerings"
        subtitle="Precision infrastructure and architectural excellence serving Zimbabwe."
        image="https://i.8upload.com/image/4457c014c5992525/projectimage2.jpg"
        imagePosition="object-center"
      />

      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-20 md:gap-32">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-brand-coral/30 hidden lg:block" />
                {(service as any).gallery ? (
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {(service as any).gallery.map((img: string, i: number) => (
                      <div key={i} className="relative overflow-hidden aspect-[4/5] lg:aspect-square">
                        <img 
                          src={img} 
                          alt={`${service.title} ${i + 1}`}
                          className="w-full h-full object-cover group-hover:opacity-100 transition-all duration-1000"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 border border-white/5 m-2 md:m-4" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full aspect-[16/10] object-cover object-center group-hover:opacity-100 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 border border-white/5 m-4 md:m-6" />
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-10">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-coral" />
                  <div className="flex items-center">
                    <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px]">0{index + 1}</span>
                    <span className="text-brand-sky/60 font-bold uppercase tracking-[0.4em] text-[10px] ml-2">// Specialization</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl text-[#F3F4F6] uppercase tracking-tighter">{service.title}</h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="pt-4 md:pt-6">
                  <Link to={`/services/${service.slug}`} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-brand-sky hover:text-white rounded-none px-12 py-8 font-bold uppercase tracking-[0.2em] text-[11px] transition-all">
                      VIEW SPECIFICATIONS <ArrowRight className="ml-4 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* StarLink Satellite Internet Installations Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center pt-20 md:pt-32 border-t border-white/5"
            id="starlink-installations"
          >
            {/* Left Side: Content Column */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div className="flex items-center space-x-4 md:space-x-6">
                <Wifi className="w-8 h-8 md:w-10 md:h-10 text-brand-coral" />
                <div className="flex items-center">
                  <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px]">04 // ADVANCED CONNECTIVITY</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl text-[#F3F4F6] uppercase tracking-tighter">
                High-Speed StarLink Installation
              </h2>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                Connected in 1 hour. <span className="text-white font-medium">Khahlula Smartlink Technologies</span> brings fast, reliable, professional satellite internet setups directly to your home, office, or remote project site.
              </p>

              {/* Bulleted Price Tiers */}
              <div className="bg-brand-accent-navy/40 p-6 md:p-8 border border-white/5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coral">Pricing & Packages</h4>
                <ul className="space-y-3 text-sm md:text-base font-light text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                    <div>
                      <strong className="text-white font-medium">StarLink Mini Kit:</strong> $260 <span className="text-gray-500 font-mono text-xs">|</span> Installation: $25 <span className="text-gray-500 font-mono text-xs">|</span> Sub: $35/month <span className="text-brand-sky font-medium">(+75 MBPS)</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                    <div>
                      <strong className="text-white font-medium">StarLink Standard Kit:</strong> $350 <span className="text-gray-500 font-mono text-xs">|</span> Installation: $30 <span className="text-gray-500 font-mono text-xs">|</span> Sub: $35/month <span className="text-brand-sky font-medium">(+100 MBPS)</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral shrink-0" />
                    <div>
                      <strong className="text-white font-medium">StarLink Business Kit:</strong> Installation available <span className="text-gray-500 font-mono text-xs">|</span> Sub: Custom <span className="text-brand-sky font-medium">(+200 MBPS)</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <span className="text-brand-coral font-bold text-xs uppercase tracking-wider">Promo:</span>
                    <span className="text-white font-medium">One-Time Activation Fee: $50</span>
                  </li>
                </ul>
              </div>

              {/* Geographic Reach Note */}
              <p className="text-brand-sky text-sm font-semibold tracking-wide uppercase">
                Areas Covered: Bulawayo | Vic Falls | Matabeleland North & South | Rural Areas Included
              </p>

              {/* Feature Highlights Checklist */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  "Super Speed",
                  "Affordable Price",
                  "Same-Day Setup",
                  "Secured Network"
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-3 text-white">
                    <div className="w-5 h-5 rounded-full bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-sm tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none px-12 py-8 font-bold uppercase tracking-[0.2em] text-[11px] transition-all">
                    Request StarLink Quote <ArrowRight className="ml-4 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side: Gallery Grid */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-brand-coral/30 hidden lg:block" />
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 md:grid-gap-4">
                {/* Photo 1 */}
                <div className="col-span-2 sm:col-span-3 aspect-[4/3] sm:aspect-square relative overflow-hidden group/img">
                  <img 
                    src="https://i.8upload.com/image/688455f955728bd2/706f12a0-2a4a-45aa-8d8f-4747f0e97826.jpg" 
                    alt="Tile Roof Dish Installation" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover/img:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 border border-white/5 m-2 pointer-events-none" />
                </div>
                
                {/* Photo 2 */}
                <div className="col-span-2 sm:col-span-3 aspect-[4/3] sm:aspect-square relative overflow-hidden group/img">
                  <img 
                    src="https://i.8upload.com/image/361aaac95708c697/0a86311d-7de7-4ba2-bffe-d7b40edef1fa-1.jpg" 
                    alt="Ridge Cap Mount Installation" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover/img:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 border border-white/5 m-2 pointer-events-none" />
                </div>
                
                {/* Photo 3 */}
                <div className="col-span-1 sm:col-span-2 aspect-square relative overflow-hidden group/img">
                  <img 
                    src="https://i.8upload.com/image/da42c0e9394a3378/7ea070db-5ad5-4d78-b93c-a79211a970a4.jpg" 
                    alt="Eaves Mount Profile Setup" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover/img:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 border border-white/5 m-1 pointer-events-none" />
                </div>
                
                {/* Photo 4 */}
                <div className="col-span-1 sm:col-span-2 aspect-square relative overflow-hidden group/img">
                  <img 
                    src="https://i.8upload.com/image/c720eecb93cfe211/db4730f4-5058-4250-aeef-c07451385ef0.jpg" 
                    alt="Rural Ground Pole Mount Setup" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover/img:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 border border-white/5 m-1 pointer-events-none" />
                </div>
                
                {/* Photo 5 */}
                <div className="col-span-2 sm:col-span-2 aspect-square relative overflow-hidden group/img">
                  <img 
                    src="https://i.8upload.com/image/3c2b93231f124d0c/52703936-5cb0-4a29-8dbc-9c598d0e44d4.jpg" 
                    alt="Wall Bracket Setup Installation" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover/img:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 border border-white/5 m-2 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 bg-brand-navy border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
          <h2 className="text-4xl sm:text-5xl md:text-8xl mb-12 md:mb-16 text-[#F3F4F6] uppercase tracking-tighter leading-none">Your Vision, <br className="hidden sm:block"/> Our <span className="italic font-light text-brand-sky">Structure.</span></h2>
          <Link to="/contact">
            <Button className="w-full sm:w-auto bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none px-16 py-10 text-[12px] font-bold uppercase tracking-[0.3em] transition-all">
              REQUEST A PROPOSAL
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
