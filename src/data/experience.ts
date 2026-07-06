export interface ExperienceItem {
  role: string;
  org: string;
  orgUrl?: string;
  location?: string;
  period: string; // display string, e.g. "2024 – 2026"
  current?: boolean;
  points: string[];
}

// Add new roles at the top.
export const experience: ExperienceItem[] = [
  {
    role: 'Research Scientist Intern',
    org: 'Meta',
    orgUrl: 'https://ai.meta.com/',
    location: 'Zurich',
    period: 'Apr – Oct 2026',
    current: true,
    points: [
      "Working on Meta's 3D GenAI team to advance 3D asset generation models, with an emphasis on efficient generation pipelines and downstream asset usability.",
    ],
  },
  {
    role: 'Senior Deep Learning Research Scientist',
    org: 'Hike Medical',
    orgUrl: 'https://www.hikemedical.com/',
    period: 'Jul 2024 – Feb 2026',
    points: [
      'First ML research scientist hire at pre-seed; led model deployment end-to-end and scaled production ML systems that power $40M ARR.',
      'Built and shipped robust 3D reconstruction and geometry completion pipelines used by more than 30,000 users.',
      'Drove product roadmap and innovation with the CEO/CTO, mapping product needs to ML milestones.',
    ],
  },
];
