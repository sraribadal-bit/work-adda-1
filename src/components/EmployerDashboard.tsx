import React, { useState } from 'react';
import { Job, Application } from '../types';
import { Briefcase, Users, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

interface EmployerDashboardProps {
  jobs: Job[];
  applications: Application[];
  onOpenPostWork: () => void;
}

export const EmployerDashboard: React.FC<EmployerDashboardProps> = ({
  jobs,
  applications,
  onOpenPostWork
}) => {
  const [activeTab, setActiveTab] = useState<'listings' | 'applicants'>('listings');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Employer Control Hub</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your posted work requirements and review local applicant submissions.
          </p>
        </div>
        <button
          onClick={onOpenPostWork}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition"
        >
          + Post New Requirement
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab('listings')}
          className={`pb-3 px-3 border-b-2 transition ${activeTab === 'listings' ? 'border-amber-600 text-amber-700' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
        >
          My Posted Tasks ({jobs.length})
        </button>
        <button
          onClick={() => setActiveTab('applicants')}
          className={`pb-3 px-3 border-b-2 transition ${activeTab === 'applicants' ? 'border-amber-600 text-amber-700' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
        >
          Received Applications ({applications.length})
        </button>
      </div>

      {activeTab === 'listings' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold bg-amber-50 text-amber-900 px-2.5 py-1 rounded-md">
                  {job.category}
                </span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  🟢 Active
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{job.location} • ₹{job.payment} / {job.paymentType}</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between text-xs text-slate-600">
                <span>Workers Needed: <strong>{job.workersRequired}</strong></span>
                <span className="text-amber-700 font-bold">4 Candidates</span>
              </div>

              <button 
                onClick={() => setActiveTab('applicants')}
                className="w-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-xl transition"
              >
                Review Applications
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {applications.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
              No applications submitted yet for your requirements.
            </div>
          ) : (
            applications.map((app) => (
              <div key={app.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{app.applicantName}</h3>
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3" /> Profile Vetted
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Applied for: <strong className="text-slate-800">{app.jobTitle}</strong>
                  </p>
                  <p className="text-xs text-slate-600 flex items-center gap-1 pt-1">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    {app.applicantPhone}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl transition">
                    Accept & Hire
                  </button>
                  <button className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl transition">
                    Shortlist
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

    </div>
  );
};