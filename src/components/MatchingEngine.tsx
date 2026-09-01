import React from 'react';
import { MapPin, Wrench, Clock, Briefcase, Zap, Check } from 'lucide-react';

export const MatchingEngine: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Smart Matching Logic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How Work Adda Matches You in Minutes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We don’t rely on outdated resume filters. Our hyperlocal engine matches task requirements directly against active worker constraints.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <MapPin className="w-6 h-6 text-amber-400" />,
              title: '1. Location Proximity',
              desc: 'Matches tasks happening within 1–15 km of your locality to minimize transit time.'
            },
            {
              icon: <Wrench className="w-6 h-6 text-amber-400" />,
              title: '2. Specific Skills',
              desc: 'Accurately pairs requirements like Excel formulas, neat cursive, or physical warehouse sorting.'
            },
            {
              icon: <Clock className="w-6 h-6 text-amber-400" />,
              title: '3. Flexible Time Slot',
              desc: 'Select from evening, weekend, 4-hour batch, or self-paced work-from-home tasks.'
            },
            {
              icon: <Briefcase className="w-6 h-6 text-amber-400" />,
              title: '4. Work Preference',
              desc: 'Pick exactly between per-task assignments, daily gigs, or multi-day contracts.'
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-700/60 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white">{pillar.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Matching Flow Diagram */}
        <div className="bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 p-6 sm:p-8 rounded-3xl border border-amber-500/30">
          <div className="text-center mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">Live Match Simulation Example</h4>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
            
            <div className="bg-slate-800 px-5 py-4 rounded-xl border border-slate-700 text-center w-full md:w-auto">
              <p className="text-slate-400">Worker Profile</p>
              <p className="text-amber-400 font-bold text-sm mt-1">College Student (GNE Ludhiana)</p>
            </div>

            <div className="text-amber-400 font-black">↓</div>

            <div className="bg-slate-800 px-5 py-4 rounded-xl border border-slate-700 text-center w-full md:w-auto">
              <p className="text-slate-400">Available Slot</p>
              <p className="text-white font-bold text-sm mt-1">Evening (4:00 PM – 8:00 PM)</p>
            </div>

            <div className="text-amber-400 font-black">↓</div>

            <div className="bg-slate-800 px-5 py-4 rounded-xl border border-slate-700 text-center w-full md:w-auto">
              <p className="text-slate-400">Demonstrated Skills</p>
              <p className="text-white font-bold text-sm mt-1">Excel + 50 WPM Typing</p>
            </div>

            <div className="text-amber-400 font-black">↓</div>

            <div className="bg-emerald-950/80 border border-emerald-500 px-5 py-4 rounded-xl text-center w-full md:w-auto">
              <p className="text-emerald-400 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-emerald-400" /> Instant Match
              </p>
              <p className="text-white font-bold text-sm mt-1">₹400 Data Entry Task (WFH)</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};