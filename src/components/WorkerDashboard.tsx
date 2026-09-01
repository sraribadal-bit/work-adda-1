import React from 'react';
import { Application, Job } from '../types';
import { User, MapPin, Wrench, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface WorkerDashboardProps {
  applications: Application[];
  recommendedJobs: Job[];
  onSelectJob: (job: Job) => void;
}

export const WorkerDashboard: React.FC<WorkerDashboardProps> = ({
  applications,
  recommendedJobs,
  onSelectJob
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Profile Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl font-black border border-white/30">
            YL
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black">Yash Lamba</h1>
              <span className="text-[10px] bg-emerald-400/30 text-emerald-100 font-bold px-2 py-0.5 rounded-full border border-emerald-300/30">
                Verified Worker
              </span>
            </div>
            <p className="text-xs text-amber-100 flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5" /> Ludhiana, Punjab • College Student / Part-Time Earner
            </p>
          </div>
        </div>

        {/* Profile Attributes */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="bg-white/15 px-3 py-1.5 rounded-xl">⚡ Available: Evenings & Weekends</span>
          <span className="bg-white/15 px-3 py-1.5 rounded-xl">💼 Prefers: Data Entry, Assembly, WFH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Applications Tracker */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900">My Submitted Applications</h2>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {applications.length} Active
            </span>
          </div>

          {applications.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-2 text-xs text-slate-500">
              <p className="text-2xl">📋</p>
              <p className="font-bold text-slate-800">You have not applied for any tasks yet.</p>
              <p>Explore nearby tasks on the Find Work page and apply in 1 click.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {applications.map((app) => (
                <div 
                  key={app.id} 
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded">
                        {app.category}
                      </span>
                      <span className="text-xs text-slate-400">Applied {app.appliedDate}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{app.jobTitle}</h3>
                    <p className="text-xs text-slate-500">{app.employerName} • {app.location}</p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <span className="text-sm font-black text-slate-900">₹{app.payment}</span>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      app.status === 'Applied' ? 'bg-amber-100 text-amber-800' :
                      app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'Shortlisted' ? 'bg-purple-100 text-purple-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      ● {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Recommendations */}
        <div className="space-y-4">
          <h2 className="text-lg font-black text-slate-900">Recommended For Your Skills</h2>
          
          <div className="space-y-3">
            {recommendedJobs.slice(0, 3).map((job) => (
              <div 
                key={job.id} 
                onClick={() => onSelectJob(job)}
                className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-4 cursor-pointer transition shadow-xs space-y-2 group"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {job.category}
                  </span>
                  <span className="text-xs font-black text-slate-900">₹{job.payment}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition">
                  {job.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>{job.location} ({job.distanceKm} km)</span>
                  <span className="text-amber-600 font-bold flex items-center gap-0.5">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};