import { motion } from 'motion/react';
import Hero from '@/components/sections/Hero';
import { REVIEWS } from '@/constants';
import { Star, Quote } from 'lucide-react';

export default function ReviewsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero 
        title="Client Voices"
        subtitle="Reputation is built one project at a time. Here is what our partners and clients say about KM Construction."
        image="https://images.unsplash.com/photo-1544980766-319ce9fcc01a?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 md:py-32 container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-20 md:space-y-32">
          {/* Featured Success Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center border-b border-white/5 pb-20 md:pb-32">
            <div className="relative">
              <Quote className="absolute -top-12 -left-12 w-24 h-24 text-brand-coral/10 hidden sm:block" />
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-sky text-brand-sky" />
                ))}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 italic leading-tight text-[#F3F4F6] uppercase tracking-tighter">
                "Their engineering team solved complex drainage issues that 3 other contractors had failed to fix."
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-full" />
                <div>
                  <span className="font-bold block uppercase tracking-widest text-[10px] md:text-sm text-white">Brighton Zvomuya</span>
                  <span className="text-brand-sky text-[10px] uppercase tracking-widest">Chief Operations Officer, ZG Logistics</span>
                </div>
              </div>
            </div>
            <div className="aspect-[4/5] bg-brand-dark-navy overflow-hidden group transition-all duration-1000">
               <img 
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                 alt="Leadership"
                 className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>

          {/* Review Grid */}
          <div className="overflow-hidden">
             <div className="text-center mb-16 md:mb-24">
               <span className="text-brand-coral font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Feedback Portfolio</span>
               <h2 className="text-4xl md:text-5xl text-[#F3F4F6] uppercase tracking-tighter">Corporate & Residential Feedback</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {REVIEWS.map((review, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-brand-navy p-10 md:p-12 border border-white/5 flex flex-col justify-between hover:bg-brand-dark-navy transition-colors group"
                 >
                   <div className="space-y-6">
                     <div className="flex">
                       {[...Array(review.rating)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 fill-brand-sky text-brand-sky" />
                       ))}
                     </div>
                     <p className="text-gray-400 italic text-base md:text-lg leading-relaxed font-light">
                       "{review.text}"
                     </p>
                   </div>
                   <div className="pt-10 mt-10 border-t border-white/5">
                     <span className="font-bold block uppercase tracking-widest text-[10px] mb-1 text-white">{review.name}</span>
                     <span className="text-brand-sky text-[10px] uppercase tracking-widest font-bold">{review.company}</span>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 border-t border-white/5 bg-brand-navy overflow-hidden">
        <div className="container mx-auto px-6 opacity-60 flex flex-wrap justify-center gap-12 md:gap-20 items-center">
          <span className="text-2xl md:text-3xl font-bold font-serif text-white">ZIMRA</span>
          <span className="text-2xl md:text-3xl font-bold font-serif text-white">CIFOZ</span>
          <span className="text-2xl md:text-3xl font-bold font-serif text-white">ZBCA</span>
          <span className="text-2xl md:text-3xl font-bold font-serif text-white">SAZ</span>
        </div>
      </section>
    </motion.div>
  );
}
