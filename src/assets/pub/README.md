# Publication cover figures

Drop a teaser figure here for each paper. Astro optimizes these at build time
(WebP/resize, lazy-loaded), so use the full-resolution source figure — don't
pre-shrink.

## Naming

Name the file to match the `image` slug in `src/data/publications.ts`, with any
supported extension (`.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`). Lookup is
extension-agnostic, so `matryoshka-gs.png` and `matryoshka-gs.webp` both work.

Expected filenames:

| Paper                                | File               |
| ------------------------------------ | ------------------ |
| Self-Supervised Implicit Attention…  | `implicit-attention-priors.*`     |
| Matryoshka Gaussian Splatting        | `matryoshka-gs.*`                 |
| PoseCraft                            | `posecraft.*`                     |
| An Information Theoretic Approach…   | `info-theoretic-unlearning.*`     |
| Best Foot Forward                    | `best-foot-forward.*`             |
| SYM3D                                | `sym3d.*`                         |
| Twist and Compute                    | `twist-and-compute.*`             |
| FrePolad                             | `frepolad.*`                      |
| Zero-Shot Machine Unlearning…        | `zero-shot-unlearning.*`          |
| Neural Fields with Hard Constraints  | `neural-fields-hard-constraints.*`|

## Cropping

- Crop to **16:10** (e.g. 480×300 or larger at the same ratio). The card
  center-crops with `object-fit: cover`, so anything off-ratio still fills the
  frame cleanly, but 16:10 avoids surprises.
- Any paper without a file here shows a tinted placeholder tile, so the page
  never breaks while you gather figures.
