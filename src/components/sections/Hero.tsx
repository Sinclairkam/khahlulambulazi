import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  thirdCtaText?: string;
  thirdCtaLink?: string;
  height?: string;
  overlayOpacity?: number;
  className?: string;
  imagePosition?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  image, 
  ctaText = "Explore Services", 
  ctaLink = "/services",
  secondaryCtaText = "Get a Proposal",
  secondaryCtaLink = "/contact",
  thirdCtaText,
  thirdCtaLink,
  height = "min-h-[85vh] md:h-[600px]",
  overlayOpacity = 0.35,
  className = "",
  imagePosition
}: HeroProps) {
  return (
    <section className={`relative w-full ${height} bg-brand-navy flex items-center pt-20 sm:pt-32 md:py-0 pb-20 sm:pb-32 md:py-0 overflow-hidden ${className}`}>
      {/* Background Image Container */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover ${imagePosition || 'object-[75%_center] md:object-[center_bottom]'}`}
          referrerPolicy="no-referrer"
        />
        {/* Soft targeted gradients for readability while keeping the image vibrant */}
        <div className="absolute inset-0 bg-black/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-xl md:max-w-[55%]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-2 md:mb-3"
          >
            <span className="text-brand-coral text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase">Build · Deliver · Excel</span>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h1 
              className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[0.95] mb-6 md:mb-6 font-serif"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              {title === "Building Zimbabwe's Future with Excellence" ? (
                <>
                  Building <span className="italic font-light">Zimbabwe's</span>
                  <br />
                  Future with
                  <br />
                  Excellence<span className="text-brand-coral">.</span>
                </>
              ) : (
                title.split(' ').map((word, i) => (
                  <span key={i} className={i % 3 === 1 ? 'italic font-light' : ''}>
                    {word}{' '}
                    {i === title.split(' ').length - 1 && <span className="text-brand-coral">.</span>}
                    {i === 1 && <br className="hidden sm:block"/>}
                  </span>
                ))
              )}
            </h1>
          </motion.div>
          
          {subtitle && (
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-300 text-base md:text-lg font-light mb-8 md:mb-8 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={thirdCtaText ? "flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-start w-full sm:w-auto mt-[33px] sm:mt-0" : "flex flex-row gap-3 sm:gap-6 items-center justify-start w-full sm:w-auto mt-[33px] sm:mt-0"}
          >
            {thirdCtaText ? (
              <>
                <Link to={thirdCtaLink || '/contact'} className="flex-1 sm:flex-none">
                  <Button 
                    size="lg" 
                    className="w-full bg-brand-coral hover:bg-brand-coral/90 text-white rounded-[12px] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest transition-all border border-transparent"
                  >
                    {thirdCtaText}
                  </Button>
                </Link>
                <Link to={ctaLink} className="flex-1 sm:flex-none">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full bg-[#131E3A]/40 border-white/20 text-white hover:bg-white hover:text-black rounded-[12px] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest transition-all"
                  >
                    {ctaText}
                  </Button>
                </Link>
                <Link 
                  to={secondaryCtaLink} 
                  className="flex-1 sm:flex-none"
                  target={secondaryCtaLink.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryCtaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full bg-[#131E3A]/40 border-white/20 text-white hover:bg-white hover:text-black rounded-[12px] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest transition-all"
                  >
                    {secondaryCtaText}
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={ctaLink} className="flex-1 sm:flex-none">
                  <Button size="lg" className="w-full bg-brand-sky hover:bg-brand-sky/90 text-white rounded-[12px] px-2 py-4 sm:px-12 sm:py-8 text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest transition-all">
                    {ctaText}
                  </Button>
                </Link>
                <Link 
                  to={secondaryCtaLink} 
                  className="flex-1 sm:flex-none"
                  target={secondaryCtaLink.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryCtaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Button size="lg" variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black rounded-[12px] px-2 py-4 sm:px-12 sm:py-8 text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest transition-all">
                    {secondaryCtaText}
                  </Button>
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Frame */}
      <div className="absolute top-32 right-12 p-8 hidden lg:block z-20">
        <div className="w-32 h-32 border-t border-r border-brand-coral/30"></div>
      </div>

      {/* Side Label */}
      <div className="hidden lg:block absolute right-12 bottom-32 z-10 origin-bottom-right rotate-90 translate-x-12">
        <span className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-medium">
          PREMIUM INFRASTRUCTURE & DESIGN
        </span>
      </div>
    </section>
  );
}
