import React from 'react';
import { Search, PlusCircle, UserCheck, Briefcase, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  applicationsCount: number;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, applicationsCount, lang, setLang }) => {
  const t = {
    en: { home: 'Home', find: 'Find Work', post: 'Post Work', worker: 'Worker Area', employer: 'Employer Hub', postBtn: 'Post a Task' },
    hi: { home: 'होम', find: 'काम ढूंढें', post: 'काम पोस्ट करें', worker: 'कार्यकर्ता क्षेत्र', employer: 'नियोक्ता हब', postBtn: 'टास्क पोस्ट करें' },
    pa: { home: 'ਮੁੱਖ ਪੰਨਾ', find: 'ਕੰਮ ਲੱਭੋ', post: 'ਕੰਮ ਪੋਸਟ ਕਰੋ', worker: 'ਵਰਕਰ ਖੇਤਰ', employer: 'ਮਾਲਕ ਹੱਬ', postBtn: 'ਟਾਸਕ ਪੋਸਟ ਕਰੋ' }
  }[lang];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentTab('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition">
            W
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
              Work Adda
              <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                Bharat
              </span>
            </span>
            <p className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">Hyperlocal Work & Task Platform</p>
          </div>
        </div>

        {/* Navigation Tabs */}
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

        {/* Right Section: Language Toggle + CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Bharat Language Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
            <Globe className="w-3.5 h-3.5 mx-1.5 text-slate-500" />
            <button 
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-lg transition ${lang === 'en' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-500 hover:text-slate-900'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('hi')}
              className={`px-2 py-0.5 rounded-lg transition ${lang === 'hi' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-500 hover:text-slate-900'}`}
            >
              हिं
            </button>
            <button 
              onClick={() => setLang('pa')}
              className={`px-2 py-0.5 rounded-lg transition ${lang === 'pa' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-500 hover:text-slate-900'}`}
            >
              ਪੰ
            </button>
          </div>

          <button 
            onClick={() => setCurrentTab('post-work')}
            className="text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-3.5 sm:px-4 py-2 rounded-xl shadow-md shadow-amber-600/20 hover:shadow-lg transition flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{t.postBtn}</span>
          </button>
        </div>

      </div>
    </header>
  );
};