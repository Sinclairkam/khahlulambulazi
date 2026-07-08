import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES, COMPANAY_NAME, SERVICES, CONTACT_INFO, TAGLINE } from './constants';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ReviewsPage from './pages/ReviewsPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    
    const handleHashScroll = () => {
      if (location.hash) {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    handleHashScroll();
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-dark-navy/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-brand-navy/80 backdrop-blur-sm py-6 border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="w-10 h-10 relative flex items-center justify-center shrink-0">
              <img 
                src="https://i.8upload.com/image/a56f4291eda83d18/whatsapp-image-2026-07-07-at-20-37-40.jpg" 
                alt="KM Logo" 
                className="absolute w-14 h-14 max-w-none object-cover transition-transform group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white text-base md:text-lg font-bold tracking-tighter uppercase whitespace-nowrap">KHAHLULA MBULAZI</span>
              <span className="text-brand-sky text-[10px] uppercase tracking-[0.25em] font-medium">(Pvt) Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {ROUTES.map((route) => {
              const isActive = route.path.includes('#')
                ? (location.pathname + location.hash) === route.path
                : location.pathname === route.path && !location.hash;
              return (
                <Link 
                  key={route.path} 
                  to={route.path}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-brand-sky italic' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </nav>

          <Link to="/contact" className="hidden lg:block">
            <Button className="bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none px-8 py-6 font-bold uppercase tracking-widest text-[11px] transition-all">
              REQUEST PROPOSAL
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-white' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-white' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
       {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm z-50 bg-brand-navy border-l border-white/10 p-12 flex flex-col justify-between"
            >
              <div className="space-y-12 pt-20 text-right">
                {ROUTES.map((route) => {
                  const isActive = route.path.includes('#')
                    ? (location.pathname + location.hash) === route.path
                    : location.pathname === route.path && !location.hash;
                  return (
                    <Link 
                      key={route.path} 
                      to={route.path}
                      className={`block text-3xl font-serif text-white hover:text-brand-sky transition-colors ${
                        isActive ? 'text-brand-sky italic' : ''
                      }`}
                    >
                      {route.name}
                    </Link>
                  );
                })}
              </div>
              <div className="space-y-10 border-t border-white/5 pt-10 text-right">
                <div className="space-y-4">
                  <span className="text-brand-sky text-[10px] font-bold uppercase tracking-widest block">Connect</span>
                  <div className="text-white text-lg font-light leading-snug">
                    {CONTACT_INFO.phones[0]}<br/>
                    {CONTACT_INFO.email}
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none py-10 text-[12px] font-bold uppercase tracking-[0.3em] transition-all">
                    REQUEST PROPOSAL
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            {SERVICES.map(service => (
              <Route 
                // @ts-ignore
                key={service.slug} 
                path={`/services/${service.slug}`} 
                element={<ServiceDetailPage service={service} />} 
              />
            ))}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark-navy text-white pt-20 md:pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 border-b border-white/5 pb-16 md:pb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
            <img 
              src="https://i.8upload.com/image/a56f4291eda83d18/whatsapp-image-2026-07-07-at-20-37-40.jpg" 
              alt="KM Logo" 
              className="w-12 h-12 object-cover" 
              referrerPolicy="no-referrer"
            />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tighter uppercase">KHAHLULA MBULAZI</span>
                <span className="text-[12px] uppercase tracking-[0.2em] text-brand-sky font-medium">(Pvt) Ltd</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light italic">
              "{TAGLINE}"
            </p>
            <div className="flex space-x-6 items-center">
              <a 
                href="https://www.facebook.com/TyndaleTinosKhahlula" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-sky transition-colors inline-flex items-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-brand-sky transition-colors inline-flex items-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-brand-sky transition-colors inline-flex items-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-10">Navigation</h4>
            <ul className="space-y-5">
              {ROUTES.map(route => (
                <li key={route.path}>
                  <Link to={route.path} className="text-gray-500 hover:text-brand-sky transition-colors text-[11px] uppercase tracking-[0.2em] font-medium">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-10">Services</h4>
            <ul className="space-y-5">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="text-gray-500 hover:text-brand-sky transition-colors text-xs font-light">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-10">Inquiries</h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-5 h-5 text-brand-coral transition-transform group-hover:scale-110" />
                <span className="text-gray-500 text-xs font-light leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-brand-coral" />
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.phones.map(phone => (
                    <span key={phone} className="text-gray-500 text-xs">{phone}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-brand-coral" />
                <span className="text-gray-500 text-xs">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.25em] font-medium text-center md:text-left">
          <p>© {new Date().getFullYear()} Khahlula Mbulazi (Private) Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center space-x-6 md:space-x-10 mt-6 md:mt-0">
            <span className="hover:text-brand-sky cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-sky cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
