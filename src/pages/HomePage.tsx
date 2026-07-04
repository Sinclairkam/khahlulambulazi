import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Trophy, Users, ShieldCheck, Quote, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/sections/Hero';
import { SERVICES, PROJECTS, REVIEWS, MOTTO } from '@/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectImageSlider from '@/components/ProjectImageSlider';

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <Hero 
        title="Building Zimbabwe's Future with Excellence"
        subtitle={MOTTO}
        image="https://i.8upload.com/image/0373ef713c30f8f6/backgroundimage3copy.jpg"
        ctaText="View Projects"
        ctaLink="/projects"
        secondaryCtaText="WhatsApp Us"
        secondaryCtaLink="https://wa.me/263774562012"
        thirdCtaText="Request Quote"
        thirdCtaLink="/contact"
        imagePosition="object-[90%_center] md:object-center"
      />

      {/* About Preview */}
      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Commitment</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-10 leading-[1.1] md:leading-[1] text-[#F3F4F6]">
              Crafting infrastructure that stands the <span className="italic font-light text-brand-sky">test of time.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed font-light max-w-xl">
              Based in Harare and Bulawayo, our company brings together a team of elite engineers and architects committed to technical precision and a legacy of excellence for Zimbabwe.
            </p>
            <Link to="/about">
              <Button variant="ghost" className="p-0 hover:bg-transparent text-white font-bold tracking-[0.3em] uppercase text-[10px] flex items-center group">
                LEARN OUR STORY <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-3 text-brand-sky" />
              </Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-brand-coral/30 hidden lg:block" />
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200" 
              alt="Construction Detail"
              className="w-full h-auto md:h-[700px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-dark-navy border border-white/5 p-8 md:p-12 text-white hidden sm:block">
              <span className="text-6xl font-serif block mb-2 text-brand-sky">15+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Years of Engineering Mastery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-40 bg-brand-navy border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
            <div className="max-w-3xl">
              <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Specializations</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl text-[#F3F4F6] uppercase tracking-tighter leading-tight">Elite <br className="hidden sm:block"/> Solutions.</h2>
            </div>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-brand-sky hover:text-white rounded-none px-10 py-6 text-[10px] font-bold uppercase tracking-[0.2em]">
                ALL SERVICES
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SERVICES.slice(0, 9).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="bg-brand-dark-navy p-4 sm:p-6 md:p-10 hover:bg-brand-accent-navy transition-colors group relative overflow-hidden"
              >
                <Link to={`/services/${service.slug}`} className="flex flex-col h-full justify-between min-h-[140px] sm:min-h-[220px] md:min-h-[280px]">
                  <div className="space-y-2 sm:space-y-4 md:space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-brand-coral text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em]">0{index + 1}</span>
                      <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-brand-coral group-hover:text-brand-sky transition-colors" />
                    </div>
                    <h3 className="text-xs sm:text-xl md:text-2xl text-white group-hover:translate-x-2 transition-transform duration-500 uppercase tracking-tighter font-serif italic line-clamp-2 sm:line-clamp-none">{service.title}</h3>
                    <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-sm leading-relaxed font-light line-clamp-2 md:line-clamp-none">{service.tagline}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-brand-sky text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] pt-2 sm:pt-4 md:pt-8 whitespace-nowrap">
                    DETAILS <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Speed StarLink Promo Card/Banner */}
      <section className="py-12 bg-brand-dark-navy border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-brand-navy p-8 md:p-14 border-l-4 border-brand-coral md:flex justify-between items-center group overflow-hidden"
          >
            {/* Background graphic flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40 transition-transform group-hover:scale-110 duration-700" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40 transition-transform group-hover:scale-110 duration-700" />
            
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] block">
                High-Speed Connectivity
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-5xl text-[#F3F4F6] uppercase tracking-tighter leading-tight font-serif italic">
                Need Fast Internet? <br className="hidden sm:block"/>
                <span className="text-white font-sans font-bold not-italic">Official StarLink Setup In 1 Hour.</span>
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl leading-relaxed">
                Experience high-speed, stable satellite internet anywhere in Harare, Bulawayo, Vic Falls, Matabeleland & deep rural areas. Same-day installation with full network security configuration starting from $25.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0 mt-8 md:mt-0">
              <Link to="/services#starlink-installations">
                <Button className="w-full sm:w-auto bg-brand-sky hover:bg-[#EF4444] text-white hover:text-white rounded-none px-10 py-8 font-bold uppercase tracking-[0.2em] text-[11px] transition-all border-none">
                  View StarLink Packages <ArrowRight className="ml-4 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 md:py-40 bg-brand-dark-navy overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-28 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Portfolio Showcase</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl text-white">Landmarks</h2>
            </div>
            <Link to="/projects">
              <Button variant="ghost" className="text-brand-sky font-bold tracking-[0.3em] uppercase text-[10px] group">
                EXPLORE PROJECTS <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-3 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-brand-navy border border-white/5 cursor-pointer hover:border-brand-sky/30 transition-all duration-500 shadow-lg"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-brand-dark-navy border-b border-white/10">
                  <ProjectImageSlider
                    images={project.images}
                    defaultImage={project.image}
                    title={project.title}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
                
                <div className="p-8 flex flex-col grow">
                  <span className="text-brand-sky text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                    Featured Project // {project.category}
                  </span>
                  <h3 className="text-2xl text-[#F3F4F6] font-serif italic mb-6 leading-tight group-hover:text-brand-sky transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 line-clamp-2 grow">
                    {project.description}
                  </p>
                  <div className="flex items-center text-brand-sky text-[10px] font-bold uppercase tracking-widest group/btn border-t border-white/5 pt-8 mt-auto">
                    VIEW CASE STUDY 
                    <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover/btn:translate-x-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Damp Rescue Highlight */}
      <section className="py-24 md:py-48 bg-brand-navy border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-sky/5 pointer-events-none skew-x-12 translate-x-20" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10 md:space-y-14"
            >
              <div className="space-y-6">
                <span className="bg-brand-sky/10 text-brand-sky px-4 py-2 border border-brand-sky/20 text-[10px] font-bold uppercase tracking-[0.4em] inline-block">Specialized Rescue Unit</span>
                <h2 className="text-4xl sm:text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none">Solving <br/><span className="italic font-light text-brand-sky">Damp Problems.</span></h2>
              </div>
              <div className="space-y-8 md:space-y-10 text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l border-brand-coral/30 pl-8 md:pl-12">
                <p>
                  Khahlula Mbulazi Projects is here to rescue you from your damp issues. Let the professionals take away the burdens you have in your home or office.
                </p>
                <p className="text-white font-serif italic text-2xl md:text-3xl">
                  "Specialized rising damp treatment with Dryzone technology."
                </p>
              </div>
              <Link to="/services/damp-treatment" className="inline-block">
                <Button className="bg-white hover:bg-brand-sky text-brand-navy rounded-none px-12 py-10 text-[12px] font-bold uppercase tracking-[0.3em] transition-all">
                  VIEW TREATMENT STEPS
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] bg-brand-dark-navy border border-white/5 p-4 md:p-8 overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200"
                alt="Damp Treatment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-12 left-12 right-12 bg-brand-navy/90 backdrop-blur-md p-8 border border-white/10">
                <span className="text-brand-sky text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Emergency Support</span>
                <div className="text-white text-xl md:text-2xl font-serif">khahlulambulazi@gmail.com</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-28">
          <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Excellence Guaranteed</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl text-[#F3F4F6]">The KM Advantage.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {[
            { icon: Users, title: "Elite Workforce", desc: "Professionals with decades of technical project success." },
            { icon: Trophy, title: "Gold Standard", desc: "Utilization of only SABS and premium grade materials." },
            { icon: CheckCircle2, title: "Precision Timelines", desc: "Rigorous planning to eliminate project delays." },
            { icon: ShieldCheck, title: "Zero Harm Policy", desc: "Stringent safety protocols and OSHA compliance." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-navy p-10 md:p-12 text-center group hover:bg-brand-dark-navy transition-colors"
            >
              <div className="w-16 h-16 border border-brand-coral/25 flex items-center justify-center mx-auto mb-10 text-brand-coral group-hover:border-brand-sky group-hover:text-brand-sky transition-all duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl mb-4 font-bold uppercase tracking-widest text-[#F3F4F6]">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-[0.1em] font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-48 bg-brand-navy text-white text-center border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <Quote className="w-12 h-12 md:w-16 md:h-16 text-brand-sky/10 mx-auto mb-10 md:mb-16" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-2xl sm:text-4xl md:text-6xl font-serif italic leading-[1.2] md:leading-[1.1] mb-10 md:mb-16 text-[#F3F4F6]">
              "{REVIEWS[0].text}"
            </p>
            <div className="space-y-4">
              <span className="font-bold block uppercase tracking-[0.5em] text-[11px] text-brand-coral">{REVIEWS[0].name}</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-medium">{REVIEWS[0].company}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-brand-navy relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-brand-sky/5 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-10 md:mb-16 text-[#F3F4F6] uppercase tracking-tighter leading-none">Ready to Build <br className="hidden sm:block"/> The <span className="italic font-light text-brand-sky">Future?</span></h2>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none px-16 py-10 text-[12px] font-bold uppercase tracking-[0.3em] transition-all">
                START A CONVERSATION
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal / Popup Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md">
            {/* Backdrop click closer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 cursor-pointer"
            />
            
            {/* Modal Content container */}
            {selectedProject.images ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full max-w-4xl bg-[#111827] border border-white/10 shadow-2xl overflow-y-auto z-10 p-8 md:p-12 max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 bg-brand-dark-navy/80 hover:bg-brand-coral border border-white/10 hover:border-transparent text-white p-2.5 rounded-lg transition-all outline-none cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content Section */}
                <div className="space-y-4 mb-8 pr-12">
                  <span className="text-brand-sky text-xs font-bold uppercase tracking-[0.4em] block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-serif uppercase tracking-tight leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="w-16 h-1 bg-brand-coral mt-4 mb-6" />
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.images.map((imgUrl, imgIdx) => (
                    <div key={imgIdx} className="overflow-hidden bg-brand-dark-navy/50 rounded-lg border border-white/5 shadow-md">
                      <img
                        src={imgUrl}
                        alt={`${selectedProject.title} - View ${imgIdx + 1}`}
                        className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full max-w-3xl md:max-w-5xl bg-[#111827] border border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-35 bg-brand-dark-navy/80 hover:bg-brand-coral border border-white/10 hover:border-transparent text-white p-2.5 transition-all outline-none cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:w-1/2 bg-black/20 flex-shrink-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-navy to-transparent md:hidden" />
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent to-brand-navy hidden md:block" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 overflow-y-auto flex-1 flex flex-col justify-center space-y-4">
                  <span className="text-brand-sky text-xs font-bold uppercase tracking-[0.4em] block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-serif uppercase tracking-tight leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="w-16 h-1 bg-brand-coral mt-4 mb-6" />
                  <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
