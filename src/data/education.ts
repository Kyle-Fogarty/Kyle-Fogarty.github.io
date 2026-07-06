export interface EducationItem {
  degree: string;
  org: string;
  orgUrl?: string;
  distinction?: string; // e.g. "Distinction", "First Class"
  period: string; // display string, e.g. "2021 – 2022"
  note?: string;
}

// Add new entries at the top.
export const education: EducationItem[] = [
  {
    degree: 'PhD, Machine Learning',
    org: 'University of Cambridge',
    orgUrl: 'https://www.cst.cam.ac.uk/',
    period: '2022 – Present',
    note: 'Thesis on Neural Geometry Processing — developing algorithms that embed structural priors into 3D ML tasks for improved robustness and generative fidelity.',
  },
  {
    degree: 'MSc Robotics',
    org: 'University of Lincoln',
    distinction: 'Distinction',
    period: '2021 – 2022',
    note: 'Thesis on point cloud reconstruction, using neural basis functions for surface recovery from sparse 3D data.',
  },
  {
    degree: 'MMath & Phys, Mathematics and Physics',
    org: 'University of Manchester',
    distinction: 'First Class',
    period: '2017 – 2021',
    note: 'Recovered strain in polycrystalline materials from neutron imaging spectra; work published in Applied Physics Letters.',
  },
];
