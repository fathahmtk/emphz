/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionHeader, Button, GlassCard } from '../components/UI';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="section-padding grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5">
          <SectionHeader 
            number="Connect"
            title="Project Inquiry"
            subtitle="Our technical team is ready to evaluate your site requirements and provide speed-to-market modular solutions."
          />

          <div className="space-y-12 mt-16">
            {[
              {
                icon: <MapPin className="text-accent" />,
                title: "HQ - Kerala",
                detail: "Phase II, Industrial Park, Kochi, Kerala, India",
                href: "https://maps.google.com/?q=Kochi,+Kerala,+India"
              },
              { icon: <Phone className="text-accent" />, title: "Technical Support", detail: "+91 9876 543 210", href: "tel:+919876543210" },
              { icon: <Mail className="text-accent" />, title: "General Queries", detail: "procure@emphz.com", href: "mailto:procure@emphz.com" }
            ].map(item => (
              <div key={item.title} className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2 font-black">{item.title}</p>
                  <a href={item.href} className="text-lg font-bold text-zinc-900 tracking-tighter hover:text-accent transition-colors">
                    {item.detail}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-zinc-100 overflow-hidden shadow-sm">
            <iframe
              title="EMPHZ location map"
              src="https://maps.google.com/maps?q=Kochi%2C%20Kerala%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-20 p-8 bg-zinc-50 border border-zinc-100 rounded-sm">
             <h4 className="font-display font-black uppercase mb-4 text-zinc-900 tracking-tight">Experience Center</h4>
             <p className="text-zinc-500 text-sm mb-8 leading-relaxed">Our showroom is open Mon-Sat, 9AM to 6PM. Walk-ins are welcome, but we recommend booking for a guided technical tour of our production facility.</p>
             <Button variant="outline" size="sm" className="w-full">Book Visit Appointment</Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <GlassCard className="p-10 md:p-16 border-zinc-100 shadow-xl bg-white/80">
            <h3 className="text-3xl font-display font-black uppercase mb-12 tracking-tighter text-zinc-900">Requirement Brief</h3>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="full-name" className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Full Name</label>
                  <input id="full-name" name="fullName" autoComplete="name" required type="text" className="w-full bg-zinc-50 border-b border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 font-bold" placeholder="Rajesh Menon" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Phone Number</label>
                  <input id="phone" name="phone" autoComplete="tel" required type="tel" className="w-full bg-zinc-50 border-b border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 font-bold" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Corporate Email</label>
                <input id="email" name="email" autoComplete="email" required type="email" className="w-full bg-zinc-50 border-b border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 font-bold" placeholder="office@company.com" />
              </div>

              <div className="space-y-3">
                <label htmlFor="unit-category" className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Unit Category</label>
                <select id="unit-category" name="unitCategory" required defaultValue="" className="w-full bg-zinc-50 border-b border-zinc-200 p-4 focus:border-accent outline-none appearance-none text-zinc-900 font-bold">
                  <option value="" disabled>Select Series</option>
                  <option>WorkSpace (Office)</option>
                  <option>RestUnit (Sleeping)</option>
                  <option>SaniMod (Sanitary)</option>
                  <option>Custom Industrial Solution</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="project-specifics" className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Project Specifics</label>
                <textarea id="project-specifics" name="projectSpecifics" rows={4} required className="w-full bg-zinc-50 border-b border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 font-bold resize-none" placeholder="Details of your site and timeline..."></textarea>
              </div>

              <Button size="lg" className="w-full group py-6">
                Transmit Specification <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-[10px] text-zinc-400 text-center uppercase tracking-[0.2em] font-bold">
                Technical feasibility report within 4 business hours.
              </p>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
