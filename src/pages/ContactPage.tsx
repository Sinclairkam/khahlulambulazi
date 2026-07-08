import { motion } from 'motion/react';
import Hero from '@/components/sections/Hero';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { CONTACT_INFO, SERVICES } from '@/constants';

// EmailJS Configuration - Update these with your EmailJS credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_4qtdfkq',
  TEMPLATE_ID: 'template_rpfrz38',
  PUBLIC_KEY: 'rKVbiYAEJB-Ejf4I_',
  RECIPIENT_EMAIL: 'khahlulambulazi@gmail.com',
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const name = (form.querySelector('#name') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const phone = (form.querySelector('#phone') as HTMLInputElement).value;
    const service = (form.querySelector('#service') as HTMLSelectElement).value;
    const budget = (form.querySelector('#budget') as HTMLInputElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

    const templateParams = {
      to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
      from_name: name,
      from_email: email,
      phone_number: phone,
      service_needed: service,
      budget_range: budget,
      project_details: message,
    };

    try {
      // Fail gracefully and guide the user if parameters are unconfigured placeholders
      if (
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error(
          "EmailJS is not fully configured. Please edit the credentials in 'src/pages/ContactPage.tsx' to start receiving submissions."
        );
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || 'An error occurred while sending your request. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero 
        title="Start Your Project"
        subtitle="Our engineering consultants are ready to discuss your requirements, budget, and timeline."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-20 md:py-40 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {/* Form Side */}
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-6">
              <span className="text-brand-coral font-bold uppercase tracking-[0.4em] text-[10px] block">Inquiry Request</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl text-[#F3F4F6] uppercase leading-none">Let's build <br className="hidden sm:block"/> something <span className="italic font-light text-brand-sky">extraordinary.</span></h2>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-dark-navy p-10 md:p-20 text-white text-center space-y-8 border border-white/5"
              >
                <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-brand-coral mx-auto" />
                <h3 className="text-3xl md:text-4xl text-[#F3F4F6] uppercase tracking-tighter">Inquiry Received</h3>
                <p className="text-gray-500 font-light text-base md:text-lg">Thank you. An engineering consultant will review your request and contact you within 24 business hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full sm:w-auto text-brand-sky border-brand-sky px-12 py-8 rounded-none uppercase tracking-widest text-xs">SEND ANOTHER</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">Full Name</Label>
                    <Input id="name" required placeholder="Ex. Elias Mambo" className="rounded-none border-white/10 bg-brand-dark-navy text-white focus-visible:ring-brand-sky h-16 px-6" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="email" className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">Business Email</Label>
                    <Input id="email" type="email" required placeholder="contact@company.co.zw" className="rounded-none border-white/10 bg-brand-dark-navy text-white focus-visible:ring-brand-sky h-16 px-6" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">Phone Number</Label>
                    <Input id="phone" required placeholder="+263 ..." className="rounded-none border-white/10 bg-brand-dark-navy text-white focus-visible:ring-brand-sky h-16 px-6" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="service" className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">Service Needed</Label>
                    <select id="service" className="w-full rounded-none border border-white/10 bg-brand-dark-navy text-white px-6 h-16 text-sm focus:outline-none focus:ring-1 focus:ring-brand-sky appearance-none">
                      {SERVICES.map(service => (
                        <option key={service.id}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="budget" className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">Project Budget Range</Label>
                  <Input id="budget" placeholder="e.g. $50,000 - $200,000" className="rounded-none border-white/10 bg-brand-dark-navy text-white focus-visible:ring-brand-sky h-16 px-6" />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="message" className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">Project Description</Label>
                  <Textarea id="message" required placeholder="Tell us about your project requirements..." className="rounded-none border-white/10 bg-brand-dark-navy text-white focus-visible:ring-brand-sky h-48 px-6 py-6" />
                </div>

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-coral font-medium text-xs tracking-wider uppercase bg-brand-coral/5 border border-brand-coral/20 p-5 leading-relaxed"
                  >
                    Error: {error}
                  </motion.p>
                )}

                <Button 
                  type="submit" 
                  disabled={sending}
                  className="w-full bg-brand-sky hover:bg-white text-white hover:text-brand-navy rounded-none py-10 md:py-12 font-bold uppercase tracking-[0.3em] text-[12px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'SENDING REQUEST...' : 'SUBMIT QUOTE REQUEST'}
                </Button>
              </form>
            )}
          </div>

          {/* Connect Side */}
          <div className="lg:pl-20 space-y-16 md:space-y-24">
            <div className="space-y-12 md:space-y-16">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-[#F3F4F6]">Direct Connect</h3>
              
              <div className="space-y-10 md:space-y-12">
                <div className="flex items-start space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 border border-brand-coral/20 group-hover:border-brand-sky flex items-center justify-center shrink-0 transition-all duration-500">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-coral" />
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Call Our Team</span>
                    {CONTACT_INFO.phones.map(phone => (
                      <span key={phone} className="text-xl sm:text-2xl md:text-3xl font-serif text-white block mb-2 last:mb-0">{phone}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 border border-brand-coral/20 group-hover:border-brand-sky flex items-center justify-center shrink-0 transition-all duration-500">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-coral" />
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Email Us</span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif text-white hover:text-brand-sky transition-colors cursor-pointer block break-all">{CONTACT_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark-navy p-10 md:p-16 space-y-12 md:space-y-16 border border-white/5 relative">
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-brand-coral/30 hidden sm:block" />
              <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-coral">Zimbabwe Presence</h4>
              
              <div className="space-y-10 md:space-y-12">
                <div className="space-y-4">
                  <span className="font-bold flex items-center text-sm text-white uppercase tracking-widest"><MapPin className="w-4 h-4 mr-3 text-brand-coral" /> Harare Office</span>
                  <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
                    Century House East<br />
                    38 Nelson Mandela Avenue, Causeway, Harare
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="font-bold flex items-center text-sm text-white uppercase tracking-widest"><MapPin className="w-4 h-4 mr-3 text-brand-coral" /> Bulawayo Office</span>
                  <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">Corner 6th Avenue and Jason Moyo Camperdome house No. 67</p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 flex items-center space-x-4 text-[10px] md:text-xs text-gray-600 uppercase tracking-[0.2em] font-bold">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 08:00 - 17:00</span>
              </div>
            </div>

            <div className="p-10 md:p-16 bg-brand-coral text-white text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <h5 className="font-bold uppercase tracking-[0.4em] text-[11px] mb-6">Emergency Support</h5>
              <p className="text-sm font-medium mb-8 leading-relaxed max-w-[200px] mx-auto">Available 24/7 for urgent site issues or structural inspections.</p>
              <div className="font-serif text-3xl md:text-4xl">{CONTACT_INFO.phones[0]}</div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
