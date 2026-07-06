export interface ResearchFocus {
  title: string;
  description: string;
  accent: 'blue' | 'green' | 'lilac';
}

export const researchFocus: ResearchFocus[] = [
  {
    title: '3D reconstruction',
    description:
      'Recovering geometry and appearance from partial observations — neural implicit surfaces, point cloud generation, and shape recovery from images or scans.',
    accent: 'blue',
  },
  {
    title: 'Generative 3D',
    description:
      'Diffusion, splatting, and latent models for synthesising and editing 3D content at scale.',
    accent: 'green',
  },
  {
    title: 'Structured learning',
    description:
      'Hard constraints, symmetries, and self-supervised priors that make 3D inference reliable in the wild.',
    accent: 'lilac',
  },
];
