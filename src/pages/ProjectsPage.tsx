import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from '@/components/sections/Hero';
import { PROJECTS } from '@/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectImageSlider from '@/components/ProjectImageSlider';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null);

  const categories = [
    'All', 
    'Residential', 
    'Tiling',
    'Civil & Structural Infrastructure', 
    'Commercial Developments', 
    'Commercial & Leisure Developments',
    'Civil & Support Infrastructure',
    'Structural Construction & Fabrication',
    'Trailer Assembly & Transport Engineering', 
    'Custom Trailer & Bakkie Body Fabrication'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero 
        title="Portfolio of Excellence"
        subtitle="A showcase of landmarks and infrastructure that trace the growth of modern Zimbabwe."
        image="https://i.8upload.com/image/03b16a6c9f4078bc/khahlula-homepage.png"
        imagePosition="object-[70%_center] md:object-center"
      />

      <section className="py-20 md:py-32 container mx-auto px-6 md:px-12">
        <Tabs defaultValue="All" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8 border-b border-white/5 pb-10">
            <div>
              <span className="text-brand-coral font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Showcase</span>
              <h2 className="text-4xl md:text-6xl text-[#F3F4F6] uppercase tracking-tighter">Visualizing Success</h2>
            </div>
            <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-4 md:gap-8">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-sky data-[state=active]:bg-transparent text-gray-500 data-[state=active]:text-white font-bold uppercase tracking-widest text-[10px] px-0 pb-2 transition-all cursor-pointer"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(cat => (
            <TabsContent key={cat} value={cat} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {PROJECTS
                  .filter(p => cat === 'All' || p.category === cat)
                  .map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setSelectedProject(project)}
                      className="group flex flex-col bg-brand-navy border border-white/5 hover:border-brand-sky/30 transition-all duration-500 shadow-lg hover:shadow-[0_12px_40px_rgba(56,189,248,0.08)] hover:-translate-y-2 relative overflow-hidden cursor-pointer"
                    >
                      <div className="relative overflow-hidden aspect-[16/10] bg-brand-dark-navy border-b border-white/10">
                        <ProjectImageSlider
                          images={project.images}
                          defaultImage={project.image}
                          title={project.title}
                          onClick={() => setSelectedProject(project)}
                        />
                      </div>
                      
                      <div className="p-8 md:p-10 flex flex-col grow">
                        <span className="text-brand-coral text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 tracking-tight leading-tight group-hover:text-brand-sky transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 grow">
                          {project.description}
                        </p>
                        <div className="flex items-center text-brand-coral text-[10px] font-bold uppercase tracking-widest group/btn border-t border-white/5 pt-6 mt-auto">
                          View Project Details 
                          <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
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
                  <span className="text-brand-coral text-xs font-bold uppercase tracking-[0.4em] block">
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
                  <span className="text-brand-coral text-xs font-bold uppercase tracking-[0.4em] block">
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

      {/* Quality Badge Section */}
      <section className="py-20 md:py-24 bg-brand-navy text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex items-center space-x-6 md:space-x-8">
            <span className="text-6xl md:text-8xl font-serif text-brand-coral/30">KM</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest">Zimbabwe Certified</h3>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">Quality Excellence Mark</p>
            </div>
          </div>
          <div className="max-w-md text-center lg:text-right">
            <p className="italic text-base md:text-lg text-gray-400 font-light leading-relaxed">
              "We don't just build. We create foundations for generations. Every project is handled with the precision of an artisan and the scale of a pioneer."
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
