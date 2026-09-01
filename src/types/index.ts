export type Language = 'en' | 'hi' | 'pa';

export type WorkCategory = 
  | 'Data Entry'
  | 'Assignment Writing'
  | 'Product Assembly'
  | 'Packaging & Packing'
  | 'Wholesale Tasks'
  | 'Work From Home'
  | 'Shop Tasks'
  | 'Other Local Tasks';

export type PaymentType = 'Per task' | 'Per day' | 'Per hour' | 'Per project' | 'Monthly';
export type WorkLocationType = 'On-site' | 'Work from home' | 'Hybrid';
export type ApplicationStatus = 'Applied' | 'Under Review' | 'Shortlisted' | 'Accepted' | 'Completed';

export interface Job {
  id: string;
  title: string;
  category: WorkCategory;
  payment: number;
  paymentType: PaymentType;
  location: string;
  distanceKm: number;
  workType: WorkLocationType;
  duration: string;
  workersRequired: number;
  description: string;
  responsibilities: string[];
  skillsRequired: string[];
  employerName: string;
  employerPhone: string;
  employerType: 'Wholesaler' | 'Shop Owner' | 'Student' | 'Small Business';
  isVerifiedEmployer: boolean;
  postedDate: string;
  instantUpiAvailable: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  category: WorkCategory;
  employerName: string;
  employerPhone: string;
  location: string;
  payment: number;
  paymentType: PaymentType;
  appliedDate: string;
  status: ApplicationStatus;
  applicantName: string;
  applicantPhone: string;
  applicantSkills: string[];
}