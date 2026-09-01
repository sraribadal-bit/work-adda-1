import React from 'react';
import { ShieldCheck, UserCheck, Star, AlertTriangle, Lock, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gradient-to-b from-slate-50 to-amber-50/30 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-md">
            Safe & Reliable Hyperlocal Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Built-In Trust & Safety Mechanisms
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Work Adda ensures peace of mind for both task workers and local business employers through layered verification features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <UserCheck className="w-6 h-6 text-amber-600" />,
              title: 'Verified Worker Profiles',
              desc: 'Basic mobile OTP, skills checklist, and local student ID verification before task application.'
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
              title: 'Employer Verification',
              desc: 'Wholesalers, retail shops, and individuals are checked for address authenticity and genuine work requirements.'
            },
            {
              icon: <Star className="w-6 h-6 text-amber-500" />,
              title: 'Community Ratings & Reviews',
              desc: 'Dual-sided feedback after task completion ensures accountability on payout speed and work quality.'
            },
            {
              icon: <Lock className="w-6 h-6 text-blue-600" />,
              title: 'Secure Payout Agreements',
              desc: 'Clear, pre-agreed payment terms (per day or per task) visible upfront without hidden deductions.'
            },
            {
              icon: <AlertTriangle className="w-6 h-6 text-rose-600" />,
              title: 'Report Suspicious Tasks',
              desc: 'Instant 1-click flagging removes deceptive listings or requests asking for upfront registration money.'
            },
            {
              icon: <Award className="w-6 h-6 text-purple-600" />,
              title: 'Skill Endorsements',
              desc: 'Consistently high ratings in Excel or packaging earn priority placement on future local tasks.'
            }
          ].map((card, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};