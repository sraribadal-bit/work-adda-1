import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pb-20 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center space-x-2 text-white font-black text-lg">
            <span className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-sm">W</span>
            <span>Work Adda</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Hyperlocal task marketplace connecting flexible earners with shops, wholesalers, students, and businesses.
          </p>
          <p className="text-[11px] text-slate-500">
            "Find work nearby. Get work done easily."
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Popular Categories</h4>
          <ul className="space-y-2">
            <li>Excel Data Entry</li>
            <li>College Assignment Writing</li>
            <li>Product & Gift Box Assembly</li>
            <li>Packaging & MRP Labeling</li>
            <li>Warehouse Stock Sorting</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Locations Active</h4>
          <ul className="space-y-2">
            <li>Ludhiana</li>
            <li>Khanna</li>
            <li>Jalandhar</li>
            <li>Amritsar</li>
            <li>Chandigarh Tricity</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Platform Guarantee</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Work Adda is designed to eliminate friction in informal and short-term work. No corporate fluff, just transparent tasks and local opportunities.
          </p>
        </div>

      </div>

      <div className="border-t border-slate-800/80 py-4 text-center text-[11px] text-slate-500">
        © 2026 Work Adda Platform. Hyperlocal Work & Task Platform.
      </div>
    </footer>
  );
};