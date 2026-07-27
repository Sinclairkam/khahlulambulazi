import { motion } from 'motion/react';
import { COMPANAY_NAME } from '@/constants';
import { Target, Eye, ShieldCheck, Zap, Award, Globe, Users, HardHat } from 'lucide-react';

export default function AboutPage() {
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
              <span className="text-brand-coral text-[10px] md:text-sm font-semibold tracking-[0.4em] uppercase">Build · Deliver · Excel</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-serif uppercase tracking-tight"
            >
              Engineering <span className="italic font-light">Progress</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            >
              Our story is built on a foundation of integrity, technical excellence, and a deep commitment to Zimbabwe's infrastructure.
            </motion.p>
          </div>
        </div>
        
        {/* Sleek Minimalist Architectural Accents */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-white/5 hidden lg:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-white/5 hidden lg:block" />
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="space-y-8 md:space-y-10">
              <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] block">Our Heritage</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F3F4F6] uppercase leading-none">Building with <br className="hidden sm:block"/><span className="italic font-light">Purpose.</span></h2>
              <div className="space-y-6 md:space-y-8 text-gray-400 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Khahlula Mbulazi (Private) Limited is a legally registered entity under the Companies and Other Business Entities Act [Chapter 24:31] of Zimbabwe, ensuring maximum corporate compliance and structural trust for our clients.
                </p>
                <p>
                  Founded with a singular vision to redefine the construction landscape in Zimbabwe, we combine superior engineering with unwavering professional ethics.
                </p>
                <p>
                  Operating primarily out of Bulawayo, our reach extends across the nation, bringing world-class construction standards to every project we undertake—whether it's a luxury residential estate or complex civil infrastructure.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -top-12 -right-12 w-48 h-48 border-t border-r border-brand-coral/30 hidden lg:block" />
              <img 
                src="https://i.postimg.cc/9MH4qHk5/House-building-workers.jpg" 
                alt="Construction Heritage"
                className="w-full h-full min-h-[400px] md:min-h-[600px] object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/5 m-6 md:m-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-40 bg-brand-dark-navy border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            <div className="p-10 md:p-16 lg:p-32 bg-brand-navy space-y-8 md:space-y-10 hover:bg-brand-accent-navy transition-colors">
              <Target className="w-10 h-10 md:w-14 md:h-14 text-brand-coral" />
              <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tighter">Our Mission</h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                To provide innovative, cost-effective, and high-quality construction solutions that exceed client expectations while fostering a safe and empowering environment for our people.
              </p>
            </div>
            <div className="p-10 md:p-16 lg:p-32 bg-brand-navy space-y-8 md:space-y-10 hover:bg-brand-accent-navy transition-colors">
              <Eye className="w-10 h-10 md:w-14 md:h-14 text-brand-coral" />
              <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tighter">Our Vision</h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                To be the most trusted name in African civil engineering and construction, recognized for our role in building the Zimbabwe of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-32">
          <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The KM Code</span>
          <h2 className="text-4xl md:text-7xl text-[#F3F4F6] uppercase">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { icon: ShieldCheck, title: "Integrity", text: "We do what is right, even when no one is watching. Transparency is our baseline." },
            { icon: Zap, title: "Innovation", text: "Embracing modern technology and construction methods to deliver smarter results." },
            { icon: Globe, title: "Sustainability", text: "Building with the future in mind, minimizing environmental impact at every site." },
            { icon: Award, title: "Excellence", text: "Aiming for perfection in every joint, Every beam, and every interaction." },
            { icon: Users, title: "Community", text: "Proudly Zimbabwean, investing in local talent and local development." },
            { icon: HardHat, title: "Safety", text: "Zero compromise on the health and safety of our workforce and the public." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-navy p-10 md:p-16 group hover:bg-brand-dark-navy transition-colors"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 border border-brand-coral/20 flex items-center justify-center text-brand-coral mb-8 md:mb-12 group-hover:border-brand-sky group-hover:text-brand-sky transition-all duration-500">
                <value.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white uppercase tracking-tighter">{value.title}</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-medium">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-40 bg-brand-dark-navy overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-7xl mb-16 md:mb-32 text-center text-white uppercase tracking-tighter">Milestones</h2>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-24 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
            {[
              { year: '2010', title: 'The Blueprint', desc: 'Registered as a specialist residential contractor.' },
              { year: '2014', title: 'Scaling Up', desc: 'Acquisition of heavy machinery and expansion into civil works.' },
              { year: '2018', title: 'Multi-City Presence', desc: 'Opened our Bulawayo headquarters to serve the southern region.' },
              { year: '2023', title: 'Structural Expansion & Housing Estates', desc: 'Successfully scaled up operations into large-scale structural steel framing and premium residential estate developments, solidifying our reputation for structural excellence.' }
            ].map((milestone, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${idx % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className={`text-6xl md:text-8xl font-serif text-white/5 block mb-4 md:mb-6`}>{milestone.year}</span>
                  <h4 className="text-3xl md:text-4xl text-brand-sky mb-4 md:mb-6 uppercase tracking-tighter">{milestone.title}</h4>
                  <p className={`text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-sm ${idx % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'}`}>{milestone.desc}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-brand-coral z-10 hidden md:block" />
                <div className="w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
