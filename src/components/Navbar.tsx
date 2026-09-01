import React, { useState, useRef, useEffect } from 'react';
import { Search, PlusCircle, UserCheck, Briefcase, Globe, Sparkles, ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  applicationsCount: number;
  lang: Language;
  setLang: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string; native: string; short: string }[] = [
  { code: 'en', label: 'English', native: 'English', short: 'EN' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', short: 'हिं' },
  { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ', short: 'ਪੰ' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, applicationsCount, lang, setLang }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const t = {
    en: { home: 'Home', find: 'Find Work', post: 'Post Work', worker: 'Worker Area', employer: 'Employer Hub', postBtn: 'Post a Task' },
    hi: { home: 'होम', find: 'काम ढूंढें', post: 'काम पोस्ट करें', worker: 'कार्यकर्ता क्षेत्र', employer: 'नियोक्ता हब', postBtn: 'टास्क पोस्ट करें' },
    pa: { home: 'ਮੁੱਖ ਪੰਨਾ', find: 'ਕੰਮ ਲੱਭੋ', post: 'ਕੰਮ ਪੋਸਟ ਕਰੋ', worker: 'ਵਰਕਰ ਖੇਤਰ', employer: 'ਮਾਲਕ ਹੱਬ', postBtn: 'ਟਾਸਕ ਪੋਸਟ ਕਰੋ' }
  }[lang];

  const currentLangObj = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition shrink-0">
              W
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 leading-none">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                  Work Adda
                </span>
                <span className="inline-flex items-center justify-center text-[9px] uppercase font-extrabold tracking-wider bg-amber-100/90 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300 shadow-2xs leading-none">
                  Bharat
                </span>
              </div>
              <p className="text-[10.5px] text-slate-500 font-medium leading-none mt-1 hidden sm:block">
                Hyperlocal Work & Task Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${currentTab === 'home' ? 'text-amber-700 bg-amber-50 shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              {t.home}
            </button>
            <button 
              onClick={() => setCurrentTab('find-work')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${currentTab === 'find-work' ? 'text-amber-700 bg-amber-50 shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <Search className="w-4 h-4 text-amber-600" />
              {t.find}
            </button>
            <button 
              onClick={() => setCurrentTab('post-work')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${currentTab === 'post-work' ? 'text-amber-700 bg-amber-50 shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <PlusCircle className="w-4 h-4 text-amber-600" />
              {t.post}
            </button>
            <button 
              onClick={() => setCurrentTab('worker-dashboard')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold relative flex items-center gap-1.5 transition ${currentTab === 'worker-dashboard' ? 'text-amber-700 bg-amber-50 shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <UserCheck className="w-4 h-4 text-amber-600" />
              {t.worker}
              {applicationsCount > 0 && (
                <span className="bg-amber-600 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full shadow-xs">
                  {applicationsCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setCurrentTab('employer-dashboard')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${currentTab === 'employer-dashboard' ? 'text-amber-700 bg-amber-50 shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <Briefcase className="w-4 h-4 text-amber-600" />
              {t.employer}
            </button>
          </nav>

          {/* Right Section: Single Language Dropdown Button + CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Single Language Dropdown Menu */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 active:scale-95 text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold transition shadow-2xs"
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-extrabold hidden sm:inline">{currentLangObj.native}</span>
                <span className="font-extrabold sm:hidden">{currentLangObj.short}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              {/* Language Dropdown List */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider font-extrabold text-slate-400 border-b border-slate-100">
                    Select Language / भाषा
                  </div>
                  {LANGUAGES.map((item) => {
                    const isSelected = item.code === lang;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLang(item.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition ${
                          isSelected
                            ? 'bg-amber-50 text-amber-900 font-extrabold'
                            : 'text-slate-700 hover:bg-slate-50 font-medium'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-bold">{item.native}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{item.label}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentTab('post-work')}
              className="group relative text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white px-3.5 sm:px-4 py-2 rounded-xl shadow-md shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 active:scale-95 hover:scale-[1.03] transition-all duration-200 flex items-center gap-1.5 shrink-0 animate-shimmer-sweep btn-glow"
            >
              <PlusCircle className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              <span className="hidden sm:inline">{t.postBtn}</span>
              <span className="sm:hidden">Post</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Bottom Navigation Dock */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-2xl">
        <div className="grid grid-cols-5 gap-1 text-center">
          
          <button
            onClick={() => setCurrentTab('home')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${currentTab === 'home' ? 'text-amber-700 bg-amber-50 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'}`}
          >
            <Sparkles className={`w-4 h-4 ${currentTab === 'home' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span className="text-[10px] mt-0.5">{t.home}</span>
          </button>

          <button
            onClick={() => setCurrentTab('find-work')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${currentTab === 'find-work' ? 'text-amber-700 bg-amber-50 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'}`}
          >
            <Search className={`w-4 h-4 ${currentTab === 'find-work' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span className="text-[10px] mt-0.5">{t.find}</span>
          </button>

          <button
            onClick={() => setCurrentTab('post-work')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${currentTab === 'post-work' ? 'text-amber-700 bg-amber-50 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'}`}
          >
            <PlusCircle className={`w-4 h-4 ${currentTab === 'post-work' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span className="text-[10px] mt-0.5">{t.post}</span>
          </button>

          <button
            onClick={() => setCurrentTab('worker-dashboard')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl relative transition ${currentTab === 'worker-dashboard' ? 'text-amber-700 bg-amber-50 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'}`}
          >
            <UserCheck className={`w-4 h-4 ${currentTab === 'worker-dashboard' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span className="text-[10px] mt-0.5">{t.worker}</span>
            {applicationsCount > 0 && (
              <span className="absolute top-0.5 right-2 bg-amber-600 text-white text-[9px] font-black px-1.2 rounded-full">
                {applicationsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setCurrentTab('employer-dashboard')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${currentTab === 'employer-dashboard' ? 'text-amber-700 bg-amber-50 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'}`}
          >
            <Briefcase className={`w-4 h-4 ${currentTab === 'employer-dashboard' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span className="text-[10px] mt-0.5">{t.employer}</span>
          </button>

        </div>
      </div>
    </>
  );
};