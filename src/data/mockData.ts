import { Job, WorkCategory } from '../types';

export const CATEGORIES: { name: WorkCategory; icon: string; count: number; desc: string; color: string }[] = [
  { name: 'Data Entry', icon: '💻', count: 28, desc: 'Excel, Form Filling & Document Digitization', color: 'from-blue-500 to-indigo-600' },
  { name: 'Assignment Writing', icon: '📝', count: 19, desc: 'College Projects, Notes & Formatting', color: 'from-amber-500 to-orange-600' },
  { name: 'Product Assembly', icon: '📦', count: 14, desc: 'Gift Boxes, Manual Assembling & Kits', color: 'from-emerald-500 to-teal-600' },
  { name: 'Packaging & Packing', icon: '🏷️', count: 22, desc: 'Labeling, Sorting & Order Parcels', color: 'from-purple-500 to-pink-600' },
  { name: 'Wholesale Tasks', icon: '🏭', count: 17, desc: 'Stock Sorting, Counting & Inventory', color: 'from-rose-500 to-red-600' },
  { name: 'Work From Home', icon: '🧑‍💻', count: 31, desc: 'Online Typing, Research & Data Entry', color: 'from-cyan-500 to-blue-600' },
  { name: 'Shop Tasks', icon: '🛍️', count: 16, desc: 'Price Tagging & Display Organization', color: 'from-orange-500 to-amber-600' },
  { name: 'Other Local Tasks', icon: '🧰', count: 11, desc: 'Short-term Urgent Help & Errands', color: 'from-slate-600 to-slate-800' }
];

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Excel Data Entry Assistant (Product Catalog)',
    category: 'Data Entry',
    payment: 400,
    paymentType: 'Per task',
    location: 'Ludhiana',
    distanceKm: 2.1,
    workType: 'Work from home',
    duration: 'Flexible (2-3 hrs)',
    workersRequired: 3,
    description: 'Enter 150 local textile product specs and wholesale prices into our standardized Excel sheet. Instant verification upon upload.',
    responsibilities: [
      'Extract specs from scanned receipt copies into Excel',
      'Double-check SKU numbers and GST rates',
      'Submit finalized workbook via platform link'
    ],
    skillsRequired: ['Excel', 'Fast Typing', 'Computer Basics'],
    employerName: 'Verma Hosiery & Textiles',
    employerPhone: '919876543210',
    employerType: 'Wholesaler',
    isVerifiedEmployer: true,
    postedDate: 'Today, 2 hrs ago',
    instantUpiAvailable: true
  },
  {
    id: 'job-2',
    title: 'B.Tech College Assignment Writing & Formatting',
    category: 'Assignment Writing',
    payment: 300,
    paymentType: 'Per task',
    location: 'Ludhiana',
    distanceKm: 1.5,
    workType: 'Work from home',
    duration: '1 Day',
    workersRequired: 2,
    description: 'Prepare clean handwritten engineering workshop files as per provided syllabus index and layout guidelines.',
    responsibilities: [
      'Maintain legible, neat cursive writing on A4 sheets',
      'Draw standard mechanical diagrams with pencil & ruler',
      'Hand over sheets near Gill Road or share scanned PDF'
    ],
    skillsRequired: ['Neat Handwriting', 'Speed Writing', 'Diagram Drafting'],
    employerName: 'Amanpreet Singh (Student)',
    employerPhone: '919812345678',
    employerType: 'Student',
    isVerifiedEmployer: false,
    postedDate: 'Today, 4 hrs ago',
    instantUpiAvailable: true
  },
  {
    id: 'job-3',
    title: 'Festival Gift Box Assembly Worker',
    category: 'Product Assembly',
    payment: 600,
    paymentType: 'Per day',
    location: 'Ludhiana',
    distanceKm: 3.8,
    workType: 'On-site',
    duration: '6 hours',
    workersRequired: 5,
    description: 'Fold pre-cut corrugated craft boxes, arrange items neatly inside, and tie branded decorative ribbons for dispatch.',
    responsibilities: [
      'Fold boxes along crease lines accurately',
      'Insert protective bubble packaging and curated items',
      'Inspect seal quality before batch packing'
    ],
    skillsRequired: ['Manual Dexterity', 'Attention to Detail', 'Punctuality'],
    employerName: 'Royal Pack & Craft Co.',
    employerPhone: '919876501234',
    employerType: 'Small Business',
    isVerifiedEmployer: true,
    postedDate: 'Yesterday',
    instantUpiAvailable: true
  },
  {
    id: 'job-4',
    title: 'Battery & Electrical Parts Packaging / Labelling',
    category: 'Packaging & Packing',
    payment: 500,
    paymentType: 'Per day',
    location: 'Khanna',
    distanceKm: 8.4,
    workType: 'On-site',
    duration: '5 hours',
    workersRequired: 4,
    description: 'Affix barcode and MRP stickers on auto-electrical battery parts and prepare cartons for regional dispatch.',
    responsibilities: [
      'Attach holographic labels to battery casing corners',
      'Pack finished units into 10-piece shipping boxes',
      'Stack boxes onto wooden pallets'
    ],
    skillsRequired: ['Product Packaging', 'Labeling', 'Sorting'],
    employerName: 'G-One Battery House',
    employerPhone: '919876598765',
    employerType: 'Wholesaler',
    isVerifiedEmployer: true,
    postedDate: '1 day ago',
    instantUpiAvailable: true
  },
  {
    id: 'job-5',
    title: 'Wholesale Garment Stock Sorting & Counting',
    category: 'Wholesale Tasks',
    payment: 700,
    paymentType: 'Per day',
    location: 'Jalandhar',
    distanceKm: 14.2,
    workType: 'On-site',
    duration: '7 hours',
    workersRequired: 3,
    description: 'Assist wholesale warehouse in physical bundle counts, sorting by size & color, and organizing aisle racks.',
    responsibilities: [
      'Count incoming shipments against challan slips',
      'Arrange bundles onto designated shelf tiers',
      'Maintain clear passageways for pallet trucks'
    ],
    skillsRequired: ['Inventory Tally', 'Physical Fitness', 'Organized'],
    employerName: 'Jalandhar Apparel Hub',
    employerPhone: '919876112233',
    employerType: 'Wholesaler',
    isVerifiedEmployer: true,
    postedDate: '2 days ago',
    instantUpiAvailable: true
  },
  {
    id: 'job-6',
    title: 'Footwear Store Price Tagging & Display Setup',
    category: 'Shop Tasks',
    payment: 450,
    paymentType: 'Per day',
    location: 'Amritsar',
    distanceKm: 18.0,
    workType: 'On-site',
    duration: '4 hours',
    workersRequired: 2,
    description: 'Update discount stickers across seasonal inventory shelves and reorganize stock boxes by UK shoe sizes.',
    responsibilities: [
      'Apply promotional price tags on display models',
      'Organize backroom shoe boxes sequentially',
      'Assist shop owner during evening peak hours'
    ],
    skillsRequired: ['Display Care', 'Punctuality', 'Speed'],
    employerName: 'Urban Footwear Store',
    employerPhone: '919855443322',
    employerType: 'Shop Owner',
    isVerifiedEmployer: true,
    postedDate: '3 days ago',
    instantUpiAvailable: true
  }
];