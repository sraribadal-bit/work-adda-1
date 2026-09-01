import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { WorkCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (cat: WorkCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
            Hyperlocal Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Explore Flexible Work by Category
          </h2>
        </div>
        <p className="text-sm text-slate-500 mt-2 md:mt-0 max-w-md">
          Tailored specifically for micro-tasks, small business assistance, homework typing, assembly, and local support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            onClick={() => onSelectCategory(cat.name)}
            className="group bg-white border border-slate-200 hover:border-amber-500 rounded-2xl p-5 cursor-pointer shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2.5 bg-amber-50 rounded-xl group-hover:scale-110 transition duration-200 inline-block">
                  {cat.icon}
                </span>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md group-hover:bg-amber-100 group-hover:text-amber-800 transition">
                  {cat.count} Openings
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-4 group-hover:text-amber-600 transition">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {cat.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-amber-700">
              <span>Browse Tasks</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};