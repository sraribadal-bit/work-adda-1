import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck, AlertCircle } from 'lucide-react';
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
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const t = {
    en: {
      tag: "India's Hyperlocal Work & Task Platform",
      h1: "Find Work. ",
      h1Sub: "Get Work Done.",
      desc: "Work Adda connects flexible earners & students with local wholesalers, shops, and businesses for micro-tasks — simple, trusted, and verified.",
      findBtn: "Find Work Near You",
      postBtn: "I Need Work Done",
      placeholderTask: "e.g. Data Entry, Packing, Typing",
      placeholderLoc: "e.g. Ludhiana, Khanna",
      labelTask: "Find Work / Task",
      labelLoc: "Location / City",
      searchBtn: "Search Tasks",
      validationWarning: "Please fill in both Task and Location to search."
    },
    hi: {
      tag: "भारत का हाइपरलोकल कार्य और टास्क प्लेटफॉर्म",
      h1: "काम खोजें। ",
      h1Sub: "काम पूरा करवाएं।",
      desc: "वर्क अड्डा स्थानीय थोक विक्रेताओं, दुकानों और व्यवसायों के साथ छोटे कार्यों (Data Entry, Packing, Assembly) के लिए छात्रों और श्रमिकों को जोड़ता है।",
      findBtn: "पास का काम ढूंढें",
      postBtn: "मुझे टास्क करवाना है",
      placeholderTask: "जैसे डाटा एंट्री, पैकिंग",
      placeholderLoc: "जैसे लुधियाना, खन्ना",
      labelTask: "कार्य / कौशल",
      labelLoc: "स्थान / शहर",
      searchBtn: "टास्क खोजें",
      validationWarning: "सर्च करने के लिए कृपया टास्क और लोकेशन दोनों दर्ज करें।"
    },
    pa: {
      tag: "ਭਾਰਤ ਦਾ ਹਾਈਪਰਲੋਕਲ ਕੰਮ ਅਤੇ ਟਾਸਕ ਪਲੇਟਫਾਰਮ",
      h1: "ਕੰਮ ਲੱਭੋ। ",
      h1Sub: "ਕੰਮ ਪੂਰਾ ਕਰਵਾਓ।",
      desc: "ਵਰਕ ਅੱਡਾ ਲਚਕਦਾਰ ਕਮਾਈ ਕਰਨ ਵਾਲਿਆਂ ਅਤੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਥਾਨਕ ਦੁਕਾਨਦਾਰਾਂ ਅਤੇ ਕਾਰੋਬਾਰਾਂ ਨਾਲ ਛੋਟੇ ਕੰਮਾਂ ਲਈ ਜੋੜਦਾ ਹੈ।",
      findBtn: "ਨੇੜੇ ਕੰਮ ਲੱਭੋ",
      postBtn: "ਕੰਮ ਕਰਵਾਉਣ ਲਈ ਬੰਦਾ ਚਾਹੀਦਾ ਹੈ",
      placeholderTask: "ਜਿਵੇਂ ਡਾਟਾ ਐਂਟਰੀ, ਪੈਕਿੰਗ",
      placeholderLoc: "ਜਿਵੇਂ ਲੁਧਿਆਣਾ, ਖੰਨਾ",
      labelTask: "ਕੰਮ / ਸਕਿੱਲ",
      labelLoc: "ਸਥਾਨ / ਸ਼ਹਿਰ",
      searchBtn: "ਟਾਸਕ ਲੱਭੋ",
      validationWarning: "ਖੋਜ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਟਾਸਕ ਅਤੇ ਲੋਕੇਸ਼ਨ ਦੋਵੇਂ ਦਰਜ ਕਰੋ।"
    }
  }[lang];

  const isTaskValid = keyword.trim().length > 0;
  const isLocValid = location.trim().length > 0;
  const isSearchValid = isTaskValid && isLocValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSearchValid) {
      setAttemptedSubmit(true);
      return;
    }
    setAttemptedSubmit(false);
    onSearch(keyword.trim(), location.trim());
  };

  const handlePopularTagClick = (tag: string) => {
    setKeyword(tag);
    if (location.trim().length > 0) {
      setAttemptedSubmit(false);
      onSearch(tag, location.trim());
    } else {
      setAttemptedSubmit(true);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-white pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
        
        {/* Live Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wide border border-amber-300 shadow-xs max-w-full truncate">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500 shrink-0" />
          <span className="truncate">{t.tag}</span>
        </div>

        {/* Dynamic Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          {t.h1}
          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
            {t.h1Sub}
          </span>
        </h1>

        <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium px-2">
          {t.desc}
        </p>

        {/* Dual Primary CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 pt-2 max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={onFindClick}
            className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-black px-6 sm:px-7 py-3.5 rounded-2xl shadow-xl shadow-amber-600/25 hover:shadow-2xl hover:shadow-amber-500/40 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-95 text-sm sm:text-base animate-shimmer-sweep btn-glow"
          >
            <span>{t.findBtn}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
          <button 
            onClick={onPostClick}
            className="bg-white hover:bg-amber-50/50 text-slate-900 hover:text-amber-700 border-2 border-slate-300 hover:border-amber-400 font-extrabold px-6 py-3.5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95 text-sm sm:text-base"
          >
            {t.postBtn}
          </button>
        </div>

        {/* Separated Search Input Cards */}
        <div className="max-w-4xl mx-auto pt-4 sm:pt-6">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-left"
          >
            {/* Box 1: Task / Skill Search */}
            <div className={`flex-1 bg-white p-3 sm:py-3 sm:px-4 rounded-2xl border transition-all duration-200 flex items-center gap-3 shadow-sm ${
              attemptedSubmit && !isTaskValid
                ? 'border-rose-400 ring-2 ring-rose-400/20 bg-rose-50/30'
                : 'border-slate-200 hover:border-amber-400 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20'
            }`}>
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                attemptedSubmit && !isTaskValid
                  ? 'bg-rose-100/70 border-rose-300 text-rose-600'
                  : 'bg-amber-50 border-amber-200/60 text-amber-600'
              }`}>
                <Search className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <label className={`block text-[10px] font-extrabold uppercase tracking-wider leading-none mb-1 ${
                    attemptedSubmit && !isTaskValid ? 'text-rose-600' : 'text-slate-400'
                  }`}>
                    {t.labelTask}
                  </label>
                  {attemptedSubmit && !isTaskValid && (
                    <span className="text-[10px] text-rose-500 font-bold leading-none mb-1">Required</span>
                  )}
                </div>
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    if (attemptedSubmit && e.target.value.trim().length > 0) {
                      setAttemptedSubmit(false);
                    }
                  }}
                  placeholder={t.placeholderTask}
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none font-bold truncate leading-tight"
                />
              </div>
            </div>

            {/* Box 2: Location / Area Search */}
            <div className={`flex-1 bg-white p-3 sm:py-3 sm:px-4 rounded-2xl border transition-all duration-200 flex items-center gap-3 shadow-sm ${
              attemptedSubmit && !isLocValid
                ? 'border-rose-400 ring-2 ring-rose-400/20 bg-rose-50/30'
                : 'border-slate-200 hover:border-amber-400 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20'
            }`}>
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                attemptedSubmit && !isLocValid
                  ? 'bg-rose-100/70 border-rose-300 text-rose-600'
                  : 'bg-orange-50 border-orange-200/60 text-orange-600'
              }`}>
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <label className={`block text-[10px] font-extrabold uppercase tracking-wider leading-none mb-1 ${
                    attemptedSubmit && !isLocValid ? 'text-rose-600' : 'text-slate-400'
                  }`}>
                    {t.labelLoc}
                  </label>
                  {attemptedSubmit && !isLocValid && (
                    <span className="text-[10px] text-rose-500 font-bold leading-none mb-1">Required</span>
                  )}
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (attemptedSubmit && e.target.value.trim().length > 0) {
                      setAttemptedSubmit(false);
                    }
                  }}
                  placeholder={t.placeholderLoc}
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none font-bold truncate leading-tight"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={!isSearchValid}
              className={`group font-extrabold text-xs sm:text-sm py-3.5 px-6 sm:px-7 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shrink-0 ${
                isSearchValid
                  ? 'bg-slate-900 hover:bg-slate-800 active:scale-95 text-white shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.02]'
                  : 'bg-slate-200/80 text-slate-400 cursor-not-allowed border border-slate-200/90 shadow-none'
              }`}
            >
              <Zap className={`w-4 h-4 transition-transform duration-200 ${
                isSearchValid
                  ? 'text-amber-400 fill-amber-400 group-hover:scale-125'
                  : 'text-slate-400 fill-slate-300'
              }`} />
              <span>{t.searchBtn}</span>
            </button>
          </form>

          {/* Validation Warning Alert */}
          {attemptedSubmit && !isSearchValid && (
            <div className="flex items-center justify-center gap-1.5 text-xs text-rose-600 font-bold pt-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{t.validationWarning}</span>
            </div>
          )}

          {/* Quick Pill Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3 sm:pt-4 text-xs text-slate-500 font-semibold">
            <span className="w-full sm:w-auto text-[11px] sm:text-xs">Popular nearby:</span>
            {['Excel Data Entry', 'Packaging & MRP Labeling', 'Box Assembly', 'Wholesale Count'].map((tag) => (
              <button 
                key={tag}
                type="button"
                onClick={() => handlePopularTagClick(tag)}
                className="bg-white hover:bg-amber-100 hover:text-amber-900 active:scale-95 hover:scale-105 border border-slate-200 px-2.5 sm:px-3 py-1 rounded-lg transition-all shadow-2xs text-[11px] font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-4 sm:pt-6 max-w-4xl mx-auto text-left">
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