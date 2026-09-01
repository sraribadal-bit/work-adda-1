import React, { useState, useMemo } from 'react';
import { Job, WorkCategory } from '../types';
import { CATEGORIES } from '../data/mockData';
import { MapPin, Clock, Users, IndianRupee, CheckCircle, SlidersHorizontal, Search } from 'lucide-react';

interface FindWorkViewProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  initialCategory?: WorkCategory | null;
  initialKeyword?: string;
  initialLocation?: string;
}

export const FindWorkView: React.FC<FindWorkViewProps> = ({
  jobs,
  onSelectJob,
  initialCategory,
  initialKeyword = '',
  initialLocation = ''
}) => {
  const [searchKeyword, setSearchKeyword] = useState(initialKeyword);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [workTypeFilter, setWorkTypeFilter] = useState<string>('ALL');
  const [maxDistance, setMaxDistance] = useState<number>(30);
  const [minPay, setMinPay] = useState<number>(0);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchKeyword = 
        !searchKeyword || 
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.skillsRequired.some(s => s.toLowerCase().includes(searchKeyword.toLowerCase()));

      const matchLocation = 
        !selectedLocation || 
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchCategory = 
        selectedCategory === 'ALL' || job.category === selectedCategory;

      const matchWorkType = 
        workTypeFilter === 'ALL' || job.workType === workTypeFilter;

      const matchDistance = job.distanceKm <= maxDistance;
      const matchPay = job.payment >= minPay;

      return matchKeyword && matchLocation && matchCategory && matchWorkType && matchDistance && matchPay;
    });
  }, [jobs, searchKeyword, selectedLocation, selectedCategory, workTypeFilter, maxDistance, minPay]);

  const resetFilters = () => {
    setSearchKeyword('');
    setSelectedLocation('');
    setSelectedCategory('ALL');
    setWorkTypeFilter('ALL');
    setMaxDistance(30);
    setMinPay(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Find Work Near You</h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time opportunities with daily, per-task, and flexible payout models.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
            ● {filteredJobs.length} Tasks Available Now
          </span>
          <button 
            onClick={resetFilters}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 underline px-2 py-1"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div className="sm:col-span-6 flex items-center px-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Search title, skills (Excel, Typing, Assembly)..."
            className="w-full bg-transparent text-sm text-slate-800 outline-none font-medium"
          />
        </div>
        <div className="sm:col-span-6 flex items-center px-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
          <MapPin className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            placeholder="Filter location (e.g. Ludhiana, Khanna, Amritsar)..."
            className="w-full bg-transparent text-sm text-slate-800 outline-none font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Filter Sidebar */}
        <aside className="space-y-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs h-fit">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm border-b pb-3">
            <SlidersHorizontal className="w-4 h-4 text-amber-600" />
            <span>Refine Search</span>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-2.5 text-xs font-semibold bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="ALL">All Categories</option>
              {CATEGORIES.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Work Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Work Type</label>
            <div className="grid grid-cols-1 gap-1 text-xs font-medium">
              {['ALL', 'Work from home', 'On-site', 'Hybrid'].map((type) => (
                <label key={type} className="flex items-center gap-2 p-1.5 hover:bg-slate-50 rounded cursor-pointer">
                  <input
                    type="radio"
                    name="workType"
                    checked={workTypeFilter === type}
                    onChange={() => setWorkTypeFilter(type)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span>{type === 'ALL' ? 'Any Work Type' : type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Max Distance Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Max Distance</span>
              <span className="text-amber-600">{maxDistance} km</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={maxDistance}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>

          {/* Minimum Pay Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Min. Pay</span>
              <span className="text-amber-600">₹{minPay}+</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={minPay}
              onChange={(e) => setMinPay(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </aside>

        {/* Right Job Cards Feed */}
        <main className="lg:col-span-3 space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center space-y-3">
              <p className="text-3xl">🔍</p>
              <h3 className="text-base font-bold text-slate-800">No tasks found matching your criteria</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try widening your distance limit, selecting "All Categories", or searching for broader terms.
              </p>
              <button 
                onClick={resetFilters}
                className="bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-amber-50 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200/60">
                        {job.category}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                        job.workType === 'Work from home' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {job.workType}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-black text-slate-900">
                        ₹{job.payment}
                      </span>
                      <span className="text-xs text-slate-500 ml-1">/ {job.paymentType.replace('Per ', '')}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:lg font-bold text-slate-900 hover:text-amber-700 cursor-pointer" onClick={() => onSelectJob(job)}>
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {job.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.skillsRequired.map((skill, i) => (
                    <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Meta details footer */}
                <div className="border-t border-slate-100 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      {job.location} ({job.distanceKm} km away)
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {job.workersRequired} needed
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectJob(job)}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition"
                  >
                    View Details & Apply
                  </button>
                </div>

              </div>
            ))
          )}
        </main>

      </div>
    </div>
  );
};