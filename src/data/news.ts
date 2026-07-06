export interface NewsItem {
  date: string; // display string, e.g. "Oct 2025"
  text: string;
  url?: string;
}

// Add new items at the top.
export const news: NewsItem[] = [
  {
    date: 'Apr 2026',
    text: 'Joined Meta’s 3D GenAI team in Zurich as a Research Scientist Intern.',
  },
  {
    date: '2026',
    text: '“Self-Supervised Implicit Attention Priors for Point Cloud Reconstruction” was presented at 3DV 2026.',
    url: 'https://doi.org/10.1109/3DV69130.2026.00048',
  },
  {
    date: 'Nov 2025',
    text: '“Twist and Compute” was accepted to the Principles of Generative Models workshop at NeurIPS 2025.',
    url: 'https://arxiv.org/abs/2511.08203',
  },
  {
    date: 'Oct 2025',
    text: 'Two papers at the ICCV 2025 workshops: “Best Foot Forward” and “SYM3D”.',
  },
  {
    date: '2025',
    text: '“An Information Theoretic Approach to Machine Unlearning” was accepted to TMLR.',
    url: 'https://openreview.net/forum?id=t1utIThKHD',
  },
  {
    date: 'Oct 2024',
    text: '“FrePolad: Frequency-Rectified Point Latent Diffusion for Point Cloud Generation” was presented at ECCV 2024.',
  },
  {
    date: '2024',
    text: 'Named a finalist for the Qualcomm Innovation Fellowship.',
  },
  {
    date: 'Jan 2024',
    text: 'Joined the EnterpriseTech programme at Cambridge Judge Business School.',
  },
  {
    date: 'Dec 2023',
    text: '“Neural Fields with Hard Constraints of Arbitrary Differential Order” was presented at NeurIPS 2023.',
  },
  {
    date: 'Oct 2022',
    text: 'Started my PhD in Computer Science at the University of Cambridge.',
  },
];
