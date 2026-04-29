/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Globe2, Bot, Mail, LayoutDashboard, Sparkles, ShieldCheck, Menu, X, Zap, Users, Database, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const tiers = [
  {
    name: "Free Preview",
    price: "₦0",
    tag: "Cold lead converter",
    description: "A fast website mockup generated from your business details or social media.",
    features: ["1-page preview", "Subdomain preview link", "AI-generated copy", "Upgrade recommendation"],
    cta: "Generate Free Preview",
    highlighted: false,
  },
  {
    name: "Lite",
    price: "₦50K – ₦150K",
    tag: "Fast online presence",
    description: "A clean one-page website for small businesses that need credibility quickly.",
    features: ["1-page responsive website", "WhatsApp CTA", "Contact form", "Basic SEO", "Custom domain option"],
    cta: "Start Lite",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "₦300K – ₦500K",
    tag: "Professional business site",
    description: "A structured 3–5 page website for businesses ready to look serious online.",
    features: ["Up to 5 pages", "Service pages", "SEO foundation", "Lead capture forms", "Business email setup option"],
    cta: "Start Starter",
    highlighted: true,
  },
  {
    name: "Growth",
    price: "₦1M – ₦2M+",
    tag: "Automation + CMS",
    description: "A dynamic website system with admin tools, content control, and light SaaS features.",
    features: ["CMS", "Admin portal", "CRM/lead pipeline", "Booking or listing tools", "Automation flows"],
    cta: "Discuss Growth",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "₦5M – ₦10M+",
    tag: "Full AI business system",
    description: "A scalable platform with SaaS, multi-role dashboards, AI systems, and integrations.",
    features: ["Full SaaS platform", "Advanced CMS", "Multi-role admin", "Payments", "AI agents and analytics"],
    cta: "Book Strategy Call",
    highlighted: false,
  },
];

const services = [
  {
    icon: Globe2,
    title: "Website Design & Launch",
    text: "Landing pages, business websites, and industry-specific web experiences built to generate enquiries.",
  },
  {
    icon: Mail,
    title: "Domain & Business Email",
    text: "Custom domain setup, professional email addresses, DNS records, and credibility essentials.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & WhatsApp Automation",
    text: "Customer response systems that qualify leads, answer FAQs, and route prospects to your sales team.",
  },
  {
    icon: LayoutDashboard,
    title: "CMS, Admin Portals & SaaS",
    text: "For Growth and Enterprise clients: dashboards, content management, bookings, listings, and user portals.",
  },
];

const industries = ["Real Estate", "Clinics", "Restaurants", "Schools", "Logistics", "Travel", "Agencies", "Professional Services"];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Starter");

  const selected = useMemo(() => tiers.find((tier) => tier.name === selectedTier) || tiers[2], [selectedTier]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-400 selection:text-slate-950 relative border-slate-900">
      {/* Background Glows */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="fixed top-1/2 -right-24 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#home" 
            className="flex items-center gap-3 group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 font-black text-slate-950 text-sm italic transition-transform group-hover:rotate-6">VJ</div>
            <div className="leading-none">
              <p className="text-xs font-black tracking-widest uppercase text-amber-400">VannieJay</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Digital Systems</p>
            </div>
          </motion.a>

          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-400 md:flex">
            {["services", "process", "pricing", "systems"].map((link) => (
              <a key={link} href={`#${link}`} className="hover:text-amber-400 transition-colors">{link.replace('-', ' ')}</a>
            ))}
          </nav>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="hidden md:inline-flex rounded-full bg-amber-400 px-5 py-2 text-[11px] font-black uppercase text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-400/10"
          >
            Get Preview
          </motion.a>

          <button className="md:hidden text-slate-300" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 px-4 py-4 md:hidden bg-slate-950"
            >
              <div className="flex flex-col gap-4 text-sm text-slate-300">
                <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
                <a onClick={() => setMenuOpen(false)} href="#process">How it works</a>
                <a onClick={() => setMenuOpen(false)} href="#pricing">Pricing</a>
                <a onClick={() => setMenuOpen(false)} href="#systems">AI Systems</a>
                <a onClick={() => setMenuOpen(false)} href="#contact" className="rounded-full bg-amber-400 px-5 py-3 text-center font-semibold text-slate-950">Get Preview</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="home">
        {/* Hero Section */}
        <section className="relative px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">
            
            {/* Hero Main Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-8 bento-card p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden h-full min-h-[480px]"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-full border border-amber-400/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <span className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Nigeria's First "Preview First" Agency</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bento-hero mb-8">
                We build your website <br />
                <span className="text-amber-400">before</span> you pay.
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400 mb-10">
                Give us your business details, social media, or your current weak website. We create a professional preview and help you launch or revamp with a modern digital system.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-8 py-5 font-black text-slate-950 hover:bg-amber-300 shadow-xl shadow-amber-400/20"
                >
                  Get Your Free Preview <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  href="#pricing" 
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-8 py-5 font-semibold text-white transition-colors"
                >
                  View Pricing
                </motion.a>
              </div>
            </motion.div>

            {/* Preview Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="col-span-12 lg:col-span-4 bento-card border-none bg-slate-900 overflow-hidden flex flex-col shadow-2xl h-full min-h-[480px]"
            >
              <div className="bg-slate-800/50 p-4 px-6 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
                <div className="bg-slate-950 px-3 py-1.5 rounded-md text-[10px] text-slate-500 font-mono flex-1 text-center truncate">
                  preview.vanniejay.com.ng/your-business
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950 p-10 flex flex-col items-center justify-center text-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }} 
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center mb-6 border border-amber-400/20"
                >
                   <span className="text-amber-400 text-3xl font-black italic">?</span>
                </motion.div>
                <h2 className="text-2xl font-black font-display text-white italic">Your New Website</h2>
                <p className="mt-4 text-slate-500 text-sm px-6 leading-relaxed">
                  A fully custom preview generated based on your brand goals and social content.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-3 w-full">
                  {["Hero Copy", "Services", "WhatsApp", "Lead Form"].map((item, i) => (
                    <div key={item} className="h-10 bento-card border-white/5 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* trust bar */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
          >
            {[
              { text: "No website means lost trust", sub: "84% of consumers believe a website adds credibility." },
              { text: "Ownership is digital freedom", sub: "Ownership of your platform is ownership of your data." },
              { text: "Automation closes faster", sub: "A 5-minute lead response is 10x more likely to convert." }
            ].map((item) => (
              <motion.div key={item.text} variants={fadeIn} className="bento-card p-6 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="h-5 w-5 text-amber-400" />
                  <p className="font-black text-sm uppercase tracking-widest text-slate-100 font-display italic">{item.text}</p>
                </div>
                <p className="mt-3 text-[11px] text-slate-500 leading-relaxed uppercase tracking-tighter">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                {...fadeIn}
                className="col-span-12 lg:col-span-6 bento-card p-12 lg:p-16 flex flex-col justify-center"
              >
                <p className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Professional Systems</p>
                <h2 className="text-4xl font-black sm:text-5xl font-display leading-[1] italic mb-6">Digital systems for businesses ready to scale.</h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  We don't just build pages; we build conversion paths. From simple sites to complex AI systems.
                </p>
              </motion.div>
              
              <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
                {services.map(({ icon: Icon, title, text }, i) => (
                  <motion.div 
                    key={title} 
                    variants={fadeIn}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className={`bento-card p-6 flex flex-col justify-between group ${i === 2 ? 'bg-amber-400' : ''}`}
                  >
                    <div className="flex justify-between items-start">
                       <span className={`text-[10px] font-black uppercase tracking-widest ${i === 2 ? 'text-slate-950/60' : 'text-amber-400'}`}>0{i+1}</span>
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${i === 2 ? 'bg-slate-950 text-amber-400' : 'bg-slate-900 text-slate-400 group-hover:bg-amber-400 group-hover:text-slate-950'}`}>
                        <Icon className="h-5 w-5" />
                       </div>
                    </div>
                    <div className="mt-8">
                      <h3 className={`text-lg font-black font-display italic ${i === 2 ? 'text-slate-950' : 'text-white'}`}>{title}</h3>
                      <p className={`mt-2 text-[11px] leading-relaxed line-clamp-2 ${i === 2 ? 'text-slate-900/70' : 'text-slate-500'}`}>{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-12 lg:col-span-12 bento-card p-12 lg:p-16 flex flex-col justify-center text-center bg-white text-slate-950"
              >
                <p className="text-amber-600 text-xs font-black uppercase tracking-[0.2em] mb-4">Our Methodology</p>
                <h2 className="text-4xl font-black sm:text-5xl font-display leading-[1] italic mb-6">Zero confusion. <br />Zero guesswork.</h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  Most agencies take months to show you a first draft. We show you a version of your future business site in days using AI-integrated design systems.
                </p>
              </motion.div>
              
              { [
                  ["01", "Social Audit", "Tell us about your goals and current digital presence."],
                  ["02", "AI Preview", "See your site before you commit to any payment."],
                  ["03", "Tier Selection", "Transparent pricing with no hidden developer fees."],
                  ["04", "Full Launch", "Full deployment and ongoing technical management."]
                ].map(([num, title, text], i) => (
                  <motion.div 
                    key={num} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="col-span-12 md:col-span-6 lg:col-span-3 bento-card p-8 flex flex-col items-center text-center bg-slate-900 border-none"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 font-black text-amber-300 text-xl font-display mb-6">{num}</span>
                    <p className="text-lg font-black font-display italic mb-2">{title}</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-widest">{text}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              {...fadeIn}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <p className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Pricing Strategy</p>
              <h2 className="text-4xl font-black sm:text-5xl font-display italic">Grow at your own pace.</h2>
            </motion.div>
            
            <div className="grid grid-cols-12 gap-4">
              {tiers.map((tier, i) => (
                <motion.div 
                  key={tier.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`col-span-12 md:col-span-6 xl:col-span-4 bento-card p-10 flex flex-col h-full ${tier.highlighted ? "bg-slate-900 border-amber-400/30" : "bg-white/5"}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${tier.highlighted ? "bg-amber-400 text-slate-950 border-amber-400" : "bg-amber-400/10 text-amber-400 border-amber-400/20"}`}>
                      {tier.tag}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{tier.name}</span>
                  </div>
                  <p className="text-5xl font-black tracking-tighter italic font-display mb-4">{tier.price}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-10 flex-1">{tier.description}</p>
                  
                  <div className="h-px bg-white/5 mb-10" />
                  
                  <ul className="space-y-4 mb-10 text-[11px] font-bold tracking-tight text-slate-300 uppercase">
                    {tier.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex gap-3 items-center">
                        <span className="text-amber-400 text-lg">✓</span> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a 
                    whileTap={{ scale: 0.98 }}
                    href="#contact" 
                    onClick={() => setSelectedTier(tier.name)} 
                    className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest transition-all ${tier.highlighted ? "bg-amber-400 text-slate-950 hover:bg-amber-300" : "bg-white text-slate-950 hover:bg-slate-100"}`}
                  >
                    {tier.cta}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Business Systems */}
        <section id="systems" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="col-span-12 lg:col-span-5 bento-card p-12 flex flex-col justify-center"
              >
                <p className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Core Technology</p>
                <h2 className="text-4xl font-black sm:text-5xl font-display leading-[1] italic mb-6">Systems that work while you sleep.</h2>
                <div className="mt-8 flex gap-4">
                  <div className="flex-1 bento-card bg-slate-900 border-none p-6">
                    <p className="text-3xl font-black text-amber-400 font-display italic">90%</p>
                    <p className="mt-1 text-[9px] font-black text-slate-500 uppercase tracking-widest leading-tight">Faster Lead Response</p>
                  </div>
                  <div className="flex-1 bento-card bg-slate-900 border-none p-6">
                    <p className="text-3xl font-black text-amber-400 font-display italic">24/7</p>
                    <p className="mt-1 text-[9px] font-black text-slate-500 uppercase tracking-widest leading-tight">Automated Qualification</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  [Zap, "Automation", "Connect your web forms to WhatsApp, email, or your favorite CRM instantly."],
                  [Users, "CRM Logic", "Track every single enquiry from the first click to the final payment."],
                  [Database, "Custom CMS", "Manage your own products, properties, or team profiles without a developer."],
                  [PhoneCall, "WhatsApp CRM", "The primary communication channel for Nigerians, now fully automated."]
                ].map(([Icon, title, text]) => (
                  <motion.div 
                    key={title} 
                    whileHover={{ scale: 1.02 }}
                    className="bento-card p-8 flex flex-col justify-between group bg-slate-900 border-none"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-amber-400 mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black font-display italic mb-3">{title}</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-widest">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 bento-card p-12 lg:p-16 bg-slate-900 border-none"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-6">Status Quo</p>
              <h3 className="text-3xl font-black font-display italic mb-10 text-white">Weak Sites & Social Only</h3>
              <ul className="space-y-6">
                {[
                  "Low perceived value & outdated design",
                  "Scattered info across posts or slow pages",
                  "Non-functional forms & broken links",
                  "Manual follow-ups that kill conversions"
                ].map(item => (
                  <li key={item} className="flex gap-4 text-slate-400 font-bold uppercase text-[11px] tracking-tight hover:translate-x-2 transition-transform">
                    <X className="h-4 w-4 text-red-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 bento-card p-12 lg:p-16 relative overflow-hidden bg-slate-900 border-none"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px]" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-6 relative z-10">The VannieJay Effect</p>
              <h3 className="text-3xl font-black font-display italic mb-10 relative z-10 text-white">Website + Digital System</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Authority & trust from the first visit",
                  "Clear, structured offers that convert",
                  "Lead capture synced to your phone",
                  "Scalable foundation as your team grows"
                ].map(item => (
                  <li key={item} className="flex gap-4 text-slate-300 font-bold uppercase text-[11px] tracking-tight hover:translate-x-2 transition-transform">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">
            <motion.div 
              {...fadeIn}
              className="col-span-12 lg:col-span-5 bento-card p-12 lg:p-16 flex flex-col justify-center bg-slate-900 border-none relative overflow-hidden"
            >
              <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />
              <p className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Launch or Revamp</p>
              <h2 className="text-4xl font-black sm:text-5xl font-display leading-[1] italic mb-8">Request your <br />free preview.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Ready to take your business to the next level? Our team will prepare a tactical preview or revamp mockup within 48 hours.
              </p>
              
              <div className="bento-card bg-amber-400 border-none p-8 overflow-hidden relative">
                <div className="flex justify-between items-center mb-2">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-950/60">Selected Package</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-950/60 italic">Tier Strategy</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-950 font-display italic">{selected.name}</h3>
                  <p className="font-black text-slate-950 font-display">{selected.price}</p>
                </div>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-7 bento-card p-10 lg:p-16" 
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Identity</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-amber-400 transition-colors text-sm font-bold" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Business Brand</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-amber-400 transition-colors text-sm font-bold" placeholder="Business Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">WhatsApp Primary</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-amber-400 transition-colors text-sm font-bold" placeholder="+234..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Package Level</label>
                  <select 
                    value={selectedTier} 
                    onChange={(event) => setSelectedTier(event.target.value)} 
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-amber-400 transition-colors appearance-none text-sm font-bold"
                  >
                    {tiers.map((tier) => <option key={tier.name} className="bg-slate-950">{tier.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Digital Presence Links</label>
                <input className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-amber-400 transition-colors text-sm font-bold" placeholder="instagram.com/handle or website" />
              </div>
              <div className="mt-6 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">System Goals</label>
                <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-amber-400 transition-colors resize-none text-sm font-bold" placeholder="Tell us if you are launching new or revamping a weak site, and what goals you have..." />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-5 text-sm font-black uppercase tracking-widest text-slate-950 hover:bg-amber-300 shadow-xl shadow-amber-400/10"
              >
                Submit Form <ArrowRight className="h-5 w-5" />
              </motion.button>
              <p className="mt-6 text-center text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">
                VannieJay Digital Integrity Standards
              </p>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl bento-card p-10 lg:p-16 flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-amber-400 rounded-lg flex items-center justify-center font-black text-slate-950 text-sm italic">VJ</div>
            <div className="text-left">
              <p className="text-sm font-black tracking-widest uppercase text-amber-400">VannieJay Systems</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter italic">Elevating Nigerian Digital Business</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            {["Home", "Services", "Process", "Pricing", "Systems"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">{item}</a>
            ))}
          </nav>
          <div className="h-px w-full max-w-xs bg-white/5" />
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} VannieJay Digital Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
