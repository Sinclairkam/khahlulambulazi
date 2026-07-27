import { motion } from 'motion/react';
import Hero from '@/components/sections/Hero';
import { SERVICES, MOTTO, PROJECTS } from '@/constants';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Trophy, Users } from 'lucide-react';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function HomePage() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0"
    >
      {/* Hero Section */}
      <Hero 
        title="Engineering Precision. Built to Last."
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
              Based in Bulawayo, our company brings together a team of elite engineers and architects committed to technical precision and a legacy of excellence for Zimbabwe.
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
                  <div className="flex items-center gap-2 sm:gap-3 text-brand-coral text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] pt-2 sm:pt-4 md:pt-8 whitespace-nowrap">
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
                Experience high-speed, stable satellite internet anywhere in Bulawayo, Vic Falls, Matabeleland & deep rural areas. Same-day installation with full network security configuration starting from $25.
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

      {/* Featured Projects Showcase */}
      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-7xl text-[#F3F4F6] uppercase">Recent Execution</h2>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="border-white/10 text-white hover:bg-brand-sky hover:text-white rounded-none px-10 py-6 text-[10px] font-bold uppercase tracking-[0.2em]">
              VIEW ALL PROJECTS
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.slice(0, 3).map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="group relative bg-brand-dark-navy border border-white/5 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy via-transparent to-transparent opacity-80" />
                <span className="absolute top-6 left-6 text-[9px] font-bold uppercase tracking-[0.3em] bg-brand-navy/90 text-brand-sky px-4 py-2 border border-white/5">
                  {project.category}
                </span>
              </div>
              <div className="p-8 md:p-10 space-y-4">
                <h3 className="text-xl md:text-2xl text-[#F3F4F6] uppercase tracking-tighter font-serif italic">{project.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Component */}
      <ReviewsSection />

      {/* Trust Indicators */}
      <section className="py-20 md:py-32 bg-brand-dark-navy border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: ShieldCheck, title: "CR14 Certified", desc: "Registered Company" },
            { icon: Trophy, title: "100% Quality", desc: "Guaranteed Workmanship" },
            { icon: Users, title: "Expert Engineers", desc: "Certified Professionals" },
            { icon: CheckCircle2, title: "On-Time Delivery", desc: "Strict Schedule Adherence" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <item.icon className="w-8 h-8 text-brand-coral mx-auto" />
              <h4 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">{item.title}</h4>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
