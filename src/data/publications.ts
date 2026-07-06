export type VenueType = 'conference' | 'journal' | 'workshop' | 'preprint';

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  venueType: VenueType;
  year: number;
  selected?: boolean;
  note?: string; // short badge, e.g. "Oral"
  // Cover figure. Drop a 16:10 image into src/assets/pub/ named `<image>.<ext>`
  // (png/jpg/webp/avif). If the file is missing, the card shows a tinted
  // placeholder, so you can add figures over time.
  image?: string;
  links: { label: string; url: string }[];
}

// Add new entries at the top; the page groups them by year automatically.
export const publications: Publication[] = [
  {
    title: 'Self-Supervised Implicit Attention Priors for Point Cloud Reconstruction',
    authors: ['Kyle Fogarty', 'Chenyue Cai', 'Jing Yang', 'Zhilin Guo', 'Cengiz Öztireli'],
    venue: '3DV',
    venueType: 'conference',
    year: 2026,
    selected: true,
    image: 'implicit-attention-priors',
    links: [
      { label: 'DOI', url: 'https://doi.org/10.1109/3DV69130.2026.00048' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2511.04864' },
    ],
  },
  {
    title: 'Matryoshka Gaussian Splatting',
    authors: [
      'Zhilin Guo',
      'Boqiao Zhang',
      'Hakan Aktas',
      'Kyle Fogarty',
      'Jeffrey Hu',
      'Nursena Koprucu Aslan',
      'Wenzhao Li',
      'Canberk Baykal',
      'Albert Miao',
      'Josef Bengtson',
      'Chenliang Zhou',
      'Weihao Xia',
      'Cristina Nader Vasconcelos',
      'Cengiz Öztireli',
    ],
    venue: 'ECCV',
    venueType: 'conference',
    year: 2026,
    image: 'matryoshka-gs',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2603.19234' }],
  },
  {
    title:
      'PoseCraft: Tokenized 3D Body Landmark and Camera Conditioning for Photorealistic Human Image Synthesis',
    authors: [
      'Zhilin Guo',
      'Jing Yang',
      'Kyle Fogarty',
      'Jingyi Wan',
      'Boqiao Zhang',
      'Tianhao Wu',
      'Weihao Xia',
      'Chenliang Zhou',
      'Sakar Khattar',
      'Fangcheng Zhong',
      'Cristina Nader Vasconcelos',
      'Cengiz Öztireli',
    ],
    venue: 'arXiv',
    venueType: 'preprint',
    year: 2026,
    image: 'posecraft',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2602.19350' }],
  },
  {
    title: 'An Information Theoretic Approach to Machine Unlearning',
    authors: [
      'Jack Foster',
      'Kyle Fogarty',
      'Stefan Schoepf',
      'Zack Dugue',
      'Cengiz Öztireli',
      'Alexandra Brintrup',
    ],
    venue: 'TMLR',
    venueType: 'journal',
    year: 2025,
    selected: true,
    image: 'info-theoretic-unlearning',
    links: [
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=t1utIThKHD' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2402.01401' },
    ],
  },
  {
    title:
      'PSHead: 3D Head Reconstruction from a Single Image with Diffusion Prior and Self-Enhancement',
    authors: ['Jing Yang', 'Tianhao Wu', 'Kyle Fogarty', 'Fangcheng Zhong', 'Cengiz Öztireli'],
    venue: 'CGF',
    venueType: 'journal',
    year: 2025,
    image: 'pshead',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1111/cgf.70279' }],
  },
  {
    title: 'Best Foot Forward: Robust Foot Reconstruction in-the-wild',
    authors: [
      'Kyle Fogarty',
      'Jing Yang',
      'Chayan Kumar Patodi',
      'Jack Foster',
      'Aadi Bhanti',
      'Steven Chacko',
      'Cengiz Öztireli',
      'Ujwal Bonde',
    ],
    venue: 'ICCV Workshops',
    venueType: 'workshop',
    year: 2025,
    selected: true,
    image: 'best-foot-forward',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/ICCVW69036.2025.00459' }],
  },
  {
    title: 'SYM3D: Canonicalizing Triplanes via Symmetry for Single-View 3D Learning',
    authors: ['Jing Yang', 'Kyle Fogarty', 'Fangcheng Zhong', 'Cengiz Öztireli'],
    venue: 'ICCV Workshops',
    venueType: 'workshop',
    year: 2025,
    note: 'Oral',
    image: 'sym3d',
    links: [
      { label: 'DOI', url: 'https://doi.org/10.1109/ICCVW69036.2025.00715' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2406.06432' },
    ],
  },
  {
    title: 'Twist and Compute: The Cost of Pose in 3D Generative Diffusion',
    authors: ['Kyle Fogarty', 'Jack Foster', 'Boqiao Zhang', 'Jing Yang', 'Cengiz Öztireli'],
    venue: 'NeurIPS Workshop',
    venueType: 'workshop',
    year: 2025,
    image: 'twist-and-compute',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2511.08203' }],
  },
  {
    title: 'FrePolad: Frequency-Rectified Point Latent Diffusion for Point Cloud Generation',
    authors: [
      'Chenliang Zhou',
      'Fangcheng Zhong',
      'Param Hanji',
      'Zhilin Guo',
      'Kyle Fogarty',
      'Alejandro Sztrajman',
      'Hongyun Gao',
      'Cengiz Öztireli',
    ],
    venue: 'ECCV',
    venueType: 'conference',
    year: 2024,
    selected: true,
    image: 'frepolad',
    links: [
      { label: 'DOI', url: 'https://doi.org/10.1007/978-3-031-72855-6_25' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2311.12090' },
    ],
  },
  {
    title: 'Neural Fields with Hard Constraints of Arbitrary Differential Order',
    authors: [
      'Fangcheng Zhong',
      'Kyle Fogarty',
      'Param Hanji',
      'Tianhao Wu',
      'Alejandro Sztrajman',
      'Andrew Spielberg',
      'Andrea Tagliasacchi',
      'Petra Bosilj',
      'Cengiz Öztireli',
    ],
    venue: 'NeurIPS',
    venueType: 'conference',
    year: 2023,
    selected: true,
    image: 'neural-fields-hard-constraints',
    links: [
      {
        label: 'Paper',
        url: 'https://papers.nips.cc/paper_files/paper/2023/hash/47547ee84e3fbbcbbbbad7c1fd9a973b-Abstract-Conference.html',
      },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2306.08943' },
    ],
  },
  {
    title:
      'Recovering the second moment of the strain distribution from neutron Bragg edge data',
    authors: [
      'Kyle Fogarty',
      'Evelina Ametova',
      'Genoveva Burca',
      'Alexander M Korsunsky',
      'Søren Schmidt',
      'Philip J Withers',
      'William RB Lionheart',
    ],
    venue: 'APL',
    venueType: 'journal',
    year: 2022,
    image: 'bragg-edge-strain',
    links: [
      { label: 'DOI', url: 'https://doi.org/10.1063/5.0085896' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2201.09669' },
    ],
  },
];
