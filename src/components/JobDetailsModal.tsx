import React, { useState } from 'react';
import { Job } from '../types';
import { 
  X, MapPin, Clock, Users, ShieldCheck, CheckCircle2, 
  MessageCircle, Sparkles, QrCode, ArrowRight, Zap 
} from 'lucide-react';

interface JobDetailsModalProps {
  job: Job | null;
  onClose: () => void;
  onApply: (job: Job, applicantName: string, phone: string) => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, onClose, onApply }) => {
  const [applicantName, setApplicantName] = useState('Yash Lamba');
  const [applicantPhone, setApplicantPhone] = useState('+91 9876543210');
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(job, applicantName, applicantPhone);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${job.employerName}, I found your task "${job.title}" on Work Adda and I am available to complete it.`
  );

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[92vh] overflow-y-auto border border-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header Area */}
            <div className="space-y-3 border-b border-slate-100 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black bg-amber-100 text-amber-950 px-3 py-1 rounded-xl border border-amber-300">
                  {job.category}
                </span>
                <span className="text-xs font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-xl">
                  {job.workType}
                </span>
                <span className="text-[11px] text-slate-400 ml-auto font-medium">
                  Posted {job.postedDate}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {job.title}
              </h2>

              {/* Compensation Showcase */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 p-4 rounded-2xl border border-amber-200">
                <div>
                  <p className="text-xs text-amber-900 font-bold uppercase tracking-wider">Assured Payout</p>
                  <p className="text-2xl sm:text-3xl font-black text-amber-700">
                    ₹{job.payment}
                    <span className="text-xs font-bold text-slate-600 ml-1">/ {job.paymentType}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-emerald-800 text-xs font-bold">
                  <QrCode className="w-4 h-4 text-emerald-600" />
                  <span>Instant UPI Settlement Enabled</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <p className="text-slate-400 font-bold">Location</p>
                <p className="font-extrabold text-slate-900 mt-0.5">{job.location}</p>
                <p className="text-[10px] text-amber-700 font-semibold mt-0.5">{job.distanceKm} km away</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <p className="text-slate-400 font-bold">Duration</p>
                <p className="font-extrabold text-slate-900 mt-0.5">{job.duration}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{job.workersRequired} worker(s) required</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 col-span-2 sm:col-span-1">
                <p className="text-slate-400 font-bold">Posted By</p>
                <p className="font-extrabold text-slate-900 mt-0.5 flex items-center gap-1">
                  {job.employerName}
                  {job.isVerifiedEmployer && <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />}
                </p>
                <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">Verified Local Merchant</p>
              </div>
            </div>

            {/* Overview & Key Requirements */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <h4 className="font-black text-slate-900 text-sm">Task Details</h4>
              <p className="bg-slate-50 p-3.5 rounded-2xl text-slate-600 border border-slate-100">{job.description}</p>

              <h4 className="font-black text-slate-900 text-sm pt-1">Task Deliverables</h4>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                {job.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>

              <h4 className="font-black text-slate-900 text-sm pt-1">Required Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {job.skillsRequired.map((skill, i) => (
                  <span key={i} className="bg-amber-100 text-amber-950 text-xs font-bold px-3 py-1 rounded-xl border border-amber-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast 1-Click Application Form */}
            <form onSubmit={handleFormSubmit} className="border-t border-slate-200 pt-5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-slate-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
                  Instant Task Application
                </h4>
                <a
                  href={`https://wa.me/${job.employerPhone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-xl transition"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">WhatsApp Phone Number</label>
                  <input
                    type="text"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black py-3 rounded-2xl shadow-lg shadow-amber-600/25 text-sm transition"
              >
                Apply for Task — ₹{job.payment} ({job.paymentType})
              </button>
            </form>
          </>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your application for <strong className="text-slate-900">{job.title}</strong> has been received by <strong>{job.employerName}</strong>. You can also message them directly on WhatsApp.
            </p>

            <div className="pt-3 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${job.employerPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-5 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 transition"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                Contact Employer on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="bg-slate-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition"
              >
                Close & Browse More
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};