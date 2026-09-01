import React, { useState } from 'react';
import { Job, Application, WorkCategory, Language } from './types';
import { INITIAL_JOBS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { MatchingEngine } from './components/MatchingEngine';
import { TrustSection } from './components/TrustSection';
import { FindWorkView } from './components/FindWorkView';
import { JobDetailsModal } from './components/JobDetailsModal';
import { PostWorkView } from './components/PostWorkView';
import { WorkerDashboard } from './components/WorkerDashboard';
import { EmployerDashboard } from './components/EmployerDashboard';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentTab, setCurrentTab] = useState<'home' | 'find-work' | 'post-work' | 'worker-dashboard' | 'employer-dashboard'>('home');
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'app-seed-1',
      jobId: 'job-1',
      jobTitle: 'Excel Data Entry Assistant (Product Catalog)',
      category: 'Data Entry',
      employerName: 'Verma Hosiery & Textiles',
      employerPhone: '919876543210',
      location: 'Ludhiana',
      payment: 400,
      paymentType: 'Per task',
      appliedDate: 'Today',
      status: 'Under Review',
      applicantName: 'Yash Lamba',
      applicantPhone: '+91 9876543210',
      applicantSkills: ['Excel', 'Typing']
    }
  ]);
  
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);
  const [filterCategory, setFilterCategory] = useState<WorkCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState({ keyword: '', location: '' });

  const handleHeroSearch = (keyword: string, location: string) => {
    setSearchQuery({ keyword, location });
    setFilterCategory(null);
    setCurrentTab('find-work');
  };

  const handleSelectCategory = (cat: WorkCategory) => {
    setFilterCategory(cat);
    setSearchQuery({ keyword: '', location: '' });
    setCurrentTab('find-work');
  };

  const handleApply = (job: Job, applicantName: string, applicantPhone: string) => {
    const newApp: Application = {
      id: `app-${Date.now()}`,
      jobId: job.id,
      jobTitle: job.title,
      category: job.category,
      employerName: job.employerName,
      employerPhone: job.employerPhone,
      location: job.location,
      payment: job.payment,
      paymentType: job.paymentType,
      appliedDate: 'Just now',
      status: 'Applied',
      applicantName,
      applicantPhone,
      applicantSkills: job.skillsRequired
    };
    setApplications(prev => [newApp, ...prev]);
  };

  const handleJobCreated = (newJob: Job) => {
    setJobs(prev => [newJob, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* Global Responsive Navigation with Language Toggle */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={(tab) => {
          if (tab === 'find-work') {
            setFilterCategory(null);
            setSearchQuery({ keyword: '', location: '' });
          }
          setCurrentTab(tab as any);
        }}
        applicationsCount={applications.length}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Routed Views */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection 
              onSearch={handleHeroSearch}
              onFindClick={() => setCurrentTab('find-work')}
              onPostClick={() => setCurrentTab('post-work')}
              lang={lang}
            />
            <CategoryGrid onSelectCategory={handleSelectCategory} />
            <MatchingEngine />
            <TrustSection />
          </>
        )}

        {currentTab === 'find-work' && (
          <FindWorkView
            jobs={jobs}
            onSelectJob={(job) => setSelectedJobForModal(job)}
            initialCategory={filterCategory}
            initialKeyword={searchQuery.keyword}
            initialLocation={searchQuery.location}
          />
        )}

        {currentTab === 'post-work' && (
          <PostWorkView onJobCreated={handleJobCreated} />
        )}

        {currentTab === 'worker-dashboard' && (
          <WorkerDashboard
            applications={applications}
            recommendedJobs={jobs}
            onSelectJob={(job) => setSelectedJobForModal(job)}
          />
        )}

        {currentTab === 'employer-dashboard' && (
          <EmployerDashboard
            jobs={jobs}
            applications={applications}
            onOpenPostWork={() => setCurrentTab('post-work')}
          />
        )}
      </main>

      {/* Quick Details & Fast Application Modal */}
      <JobDetailsModal 
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
        onApply={handleApply}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}