import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  onSearch: (keyword: string, location: string) => void;
  onPostClick: () => void;
  onFindClick: () => void;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onPostClick, onFindClick, lang }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const t = {
    en: {
      tag: "India's Hyperlocal Work & Task Platform",
      h1: "Find Work. ",
      h1Sub: "Get Work Done.",
      desc: "Work Adda connects flexible earners & students with local wholesalers, shops, and businesses for micro-tasks — simple, trusted, and verified.",
      findBtn: "Find Work Near You",
      postBtn: "I Need Work Done",
      placeholderTask: "Data Entry, Gift Box Assembly, Packaging...",
      placeholderLoc: "Enter Location (e.g. Ludhiana, Khanna)",
      searchBtn: "Search Tasks"
    },
    hi: {
      tag: "भारत का हाइपरलोकल कार्य और टास्क प्लेटफॉर्म",
      h1: "काम खोजें। ",
      h1Sub: "काम पूरा करवाएं।",
      desc: "वर्क अड्डा स्थानीय थोक विक्रेताओं, दुकानों और व्यवसायों के साथ छोटे कार्यों (Data Entry, Packing, Assembly) के लिए छात्रों और श्रमिकों को जोड़ता है।",
      findBtn: "पास का काम ढूंढें",
      postBtn: "मुझे टास्क करवाना है",
      placeholderTask: "डाटा एंट्री, पैकिंग, असेंबली...",
      placeholderLoc: "शहर का नाम (जैसे लुधियाना)",
      searchBtn: "टास्क खोजें"
    },
    pa: {
      tag: "ਭਾਰਤ ਦਾ ਹਾਈਪਰਲੋਕਲ ਕੰਮ ਅਤੇ ਟਾਸਕ ਪਲੇਟਫਾਰਮ",
      h1: "ਕੰਮ ਲੱਭੋ। ",
      h1Sub: "ਕੰਮ ਪੂਰਾ ਕਰਵਾਓ।",
      desc: "ਵਰਕ ਅੱਡਾ ਲਚਕਦਾਰ ਕਮਾਈ ਕਰਨ ਵਾਲਿਆਂ ਅਤੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਥਾਨਕ ਦੁਕਾਨਦਾਰਾਂ ਅਤੇ ਕਾਰੋਬਾਰਾਂ ਨਾਲ ਛੋਟੇ ਕੰਮਾਂ ਲਈ ਜੋੜਦਾ ਹੈ।",
      findBtn: "ਨੇੜੇ ਕੰਮ ਲੱਭੋ",
      postBtn: "ਕੰਮ ਕਰਵਾਉਣ ਲਈ ਬੰਦਾ ਚਾਹੀਦਾ ਹੈ",
      placeholderTask: "ਡਾਟਾ ਐਂਟਰੀ, ਪੈਕਿੰਗ, ਅਸੈਂਬਲੀ...",
      placeholderLoc: "ਸਥਾਨ ਦਰਜ ਕਰੋ (ਜਿਵੇਂ ਲੁਧਿਆਣਾ)",
      searchBtn: "ਟਾਸਕ ਲੱਭੋ"
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location);
  };

  return (
    <section className="relative bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-white pt-10 pb-16 px-4 border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Live Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide border border-amber-300 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          {t.tag}
        </div>

        {/* Dynamic Main Title */}
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          {t.h1}
          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {t.h1Sub}
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          {t.desc}
        </p>

        {/* Dual Primary CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <button 
            onClick={onFindClick}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl shadow-amber-600/25 flex items-center gap-2 transition hover:-translate-y-0.5"
          >
            {t.findBtn}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={onPostClick}
            className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-slate-400 font-extrabold px-6 py-3.5 rounded-2xl shadow-xs transition hover:-translate-y-0.5"
          >
            {t.postBtn}
          </button>
        </div>

        {/* Modern Search Card */}
        <div className="max-w-3xl mx-auto pt-6">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-2.5 sm:p-3 rounded-3xl shadow-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-2 text-left"
          >
            <div className="sm:col-span-5 flex items-center px-3.5 py-2.5 bg-slate-50 rounded-2xl border border-slate-200/80">
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={t.placeholderTask}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none font-semibold"
              />
            </div>

            <div className="sm:col-span-4 flex items-center px-3.5 py-2.5 bg-slate-50 rounded-2xl border border-slate-200/80">
              <MapPin className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={t.placeholderLoc}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none font-semibold"
              />
            </div>

            <button 
              type="submit"
              className="sm:col-span-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm py-3 px-4 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              {t.searchBtn}
            </button>
          </form>

          {/* Quick Pill Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs text-slate-500 font-semibold">
            <span>Popular nearby:</span>
            {['Excel Data Entry', 'Packaging & MRP Labeling', 'Box Assembly', 'Wholesale Count'].map((tag) => (
              <button 
                key={tag}
                type="button"
                onClick={() => { setKeyword(tag); onSearch(tag, location); }}
                className="bg-white hover:bg-amber-100 hover:text-amber-900 border border-slate-200 px-3 py-1 rounded-lg transition shadow-2xs font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-left">
          {[
            { t: '100% Hyperlocal', d: 'Tasks in 1-15 km radius' },
            { t: 'Daily / Per-Task Pay', d: 'Instant INR (₹) payout' },
            { t: 'Direct WhatsApp', d: 'Zero intermediate friction' },
            { t: 'Verified Employers', d: 'Real shops & wholesalers' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 p-3 rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black text-slate-900">{item.t}</p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};