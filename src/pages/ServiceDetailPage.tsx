import { motion } from 'motion/react';
import Hero from '@/components/sections/Hero';
import { CheckCircle2, ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  icon: any;
  image: string;
  gallery?: string[];
  description: string;
  includes: string[];
  process?: {
    title: string;
    steps: string[];
  };
}

export default function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={service.slug}
    >
      <Hero 
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        ctaText="Get a Proposal"
        ctaLink="/contact"
      />

      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12">
        <Link to="/services" className="inline-flex items-center text-brand-sky font-bold uppercase tracking-[0.4em] text-[10px] mb-12 md:mb-16 hover:translate-x-[-10px] transition-transform">
          <ArrowLeft className="mr-4 w-4 h-4" /> BACK TO SERVICES
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
          <div className="lg:col-span-8 space-y-12 md:space-y-20">
            <div className="space-y-6 md:space-y-8">
              <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] block">Service Overview</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[#F3F4F6]">{service.title}</h2>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed font-light max-w-3xl">
                {service.description}
              </p>
            </div>

            {service.process && (
              <div className="pt-12 md:pt-20 border-t border-white/5 space-y-12">
                <div className="space-y-6">
                  <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] block">Technical Methodology</span>
                  <h3 className="text-3xl md:text-5xl text-white font-serif italic">{service.process.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {service.process.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-6 bg-brand-navy p-6 md:p-8 border border-white/5 group hover:border-brand-sky/30 transition-colors">
                      <span className="text-2xl md:text-3xl font-serif italic text-brand-sky/20 group-hover:text-brand-coral transition-colors">0{idx + 1}</span>
                      <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`pt-12 md:pt-20 border-t border-white/5 ${service.id === 'damp-treatment' ? 'hidden' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div className="space-y-8 md:space-y-10">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-coral">Technical Scope</h3>
                  <ul className="space-y-4 md:space-y-6">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-4 group">
                        <CheckCircle2 className="w-5 h-5 text-brand-coral mt-1 shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-base md:text-lg text-gray-300 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-dark-navy p-10 md:p-16 border border-white/5 relative flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-brand-coral/30 hidden sm:block" />
                  <Quote className="w-10 h-10 text-brand-sky/10 mb-8" />
                  <h4 className="text-xl mb-6 font-serif italic text-[#F3F4F6] leading-relaxed">"Quality is never an accident; it is always the result of intelligent effort."</h4>
                  <p className="text-brand-coral text-[10px] uppercase tracking-[0.3em] font-bold">— Khahlula Mbulazi</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 w-full max-w-md lg:max-w-none mx-auto lg:mx-0 flex-1">
            <div className="bg-brand-navy p-6 sm:p-8 xl:p-12 border border-white/10 space-y-12 sticky top-40 relative overflow-hidden">
               <div className="absolute inset-0 bg-brand-sky/5 pointer-events-none" />
               <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">Project Inquiry</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Every project is unique. Our engineering team is ready to provide a detailed technical breakdown and cost estimation for your specific requirements.
                </p>
                <div className="space-y-4 pt-4">
                  <Link to="/contact" className="block w-full">
                    <Button className="w-full bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none py-10 font-bold uppercase tracking-[0.2em] text-[11px] transition-all whitespace-normal break-words sm:whitespace-nowrap">
                      REQUEST QUOTATION
                    </Button>
                  </Link>
                  <p className="text-[9px] text-gray-700 uppercase tracking-widest text-center">Avg. Response Time: 24 Hours</p>
                </div>
               </div>
            </div>
          </aside>
        </div>
      </section>
    </motion.div>
  );
}
