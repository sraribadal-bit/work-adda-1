import React, { useState } from 'react';
import { WorkCategory, PaymentType, WorkLocationType, Job } from '../types';
import { CATEGORIES } from '../data/mockData';
import { PlusCircle, Sparkles, CheckCircle2, ShieldCheck, IndianRupee } from 'lucide-react';

interface PostWorkViewProps {
  onJobCreated: (newJob: Job) => void;
}

export const PostWorkView: React.FC<PostWorkViewProps> = ({ onJobCreated }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<WorkCategory>('Product Assembly');
  const [payment, setPayment] = useState(600);
  const [paymentType, setPaymentType] = useState<PaymentType>('Per day');
  const [location, setLocation] = useState('Ludhiana');
  const [workType, setWorkType] = useState<WorkLocationType>('On-site');
  const [duration, setDuration] = useState('6 hours');
  const [workersRequired, setWorkersRequired] = useState(5);
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('Packaging, Quality Check, Basic Counting');
  const [employerName, setEmployerName] = useState('Verma Battery & Retail Mart');
  const [employerPhone, setEmployerPhone] = useState('919876543210');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const created: Job = {
      id: `job-${Date.now()}`,
      title,
      category,
      payment: Number(payment),
      paymentType,
      location,
      distanceKm: 1.2,
      workType,
      duration,
      workersRequired: Number(workersRequired),
      description: description || 'Complete task as per instructions provided at location.',
      responsibilities: [
        'Complete scheduled tasks within designated hours',
        'Follow supervisor guidelines for quality and safety',
        'Submit daily progress count'
      ],
      skillsRequired: skills.split(',').map(s => s.trim()).filter(Boolean),
      employerName,
      employerPhone: employerPhone || '919876543210',
      employerType: 'Small Business',
      isVerifiedEmployer: true,
      postedDate: 'Just now',
      instantUpiAvailable: true
    };

    onJobCreated(created);
    setIsSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      {isSuccess ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Work Posted Successfully!</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Your task requirement for <strong className="text-slate-900">{title}</strong> is now live on the Work Adda network. Matched local workers near <strong>{location}</strong> have been notified.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition"
            >
              Post Another Task
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          <div className="border-b border-slate-100 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md">
              Employer Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Need Someone to Get Your Work Done?
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Post task requirements for data entry, gift packaging, warehouse sorting, or assignment assistance in 60 seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Task Title */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Product Assembly Worker, Excel Data Entry Assistant"
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Category & Workers Required */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as WorkCategory)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Number of Workers Required *
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  required
                  value={workersRequired}
                  onChange={(e) => setWorkersRequired(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Payment & Rate Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Payment Amount (in INR ₹) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    min="100"
                    step="50"
                    required
                    value={payment}
                    onChange={(e) => setPayment(Number(e.target.value))}
                    className="w-full border border-slate-200 rounded-xl pl-8 pr-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Payment Type *
                </label>
                <select
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value as PaymentType)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Per task">Per task</option>
                  <option value="Per day">Per day</option>
                  <option value="Per hour">Per hour</option>
                  <option value="Per project">Per project</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
            </div>

            {/* Location & Work Type */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Location (City / Area) *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Ludhiana, Gill Road"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Work Type *
                </label>
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value as WorkLocationType)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold bg-slate-50 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="On-site">On-site</option>
                  <option value="Work from home">Work from home</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Estimated Duration *
                </label>
                <input
                  type="text"
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 5 hours, 2 days"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Skills Required */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Skills Required (Comma separated)
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Excel, Typing, Packing, Hindi..."
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Explain What Needs to be Done *
              </label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the tasks, tools provided, guidelines, and where to report..."
                className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Employer Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Business / Shop / Name *
                </label>
                <input
                  type="text"
                  required
                  value={employerName}
                  onChange={(e) => setEmployerName(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="text"
                  required
                  value={employerPhone}
                  onChange={(e) => setEmployerPhone(e.target.value)}
                  placeholder="e.g. 919876543210"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Publish Work Requirement
            </button>

          </form>

        </div>
      )}

    </div>
  );
};