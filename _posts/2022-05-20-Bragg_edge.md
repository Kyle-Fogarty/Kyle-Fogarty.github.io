---
layout: post
title:  "Recovering the second moment of the strain distribution from neutron Bragg edge data"
publish_author: Kyle Fogarty, Evelina Ametova, Genoveva Burca, Alexander M Korsunsky, Søren Schmidt, Philip J Withers, William RB Lionheart
publish_venue: Applied Physics Letters (APL)
publish_year: 2022
categories: [Physics, Applied Mathematics, Inverse Problems]
image: assets/images/imat.jpg
featured: True
---

Point by point strain scanning is often used to map the residual stress (strain) in engineering materials and components. However, the gauge volume and, hence, spatial resolution are limited by the beam defining apertures and can be anisotropic for very low and high diffraction (scattering) angles. Alternatively, wavelength resolved neutron transmission imaging has a potential to retrieve information tomographically about residual strain induced within materials through measurement in transmission of Bragg edges—crystallographic fingerprints whose locations and shapes depend on microstructure and strain distribution. In such a case, the spatial resolution is determined by the geometrical blurring of the measurement setup and the detector point spread function. Mathematically, reconstruction of the strain tensor field is described by the longitudinal ray transform; this transform has a non-trivial null-space, making direct inversion impossible. A combination of the longitudinal ray transform with physical constraints was used to reconstruct strain tensor fields in convex objects. To relax physical constraints and generalize reconstruction, a recently introduced concept of histogram tomography can be employed. Histogram tomography relies on our ability to resolve the distribution of strain in the beam direction, as we discuss in the paper. More specifically, Bragg edge strain tomography requires extraction of the second moment (variance about zero) of the strain distribution, which has not yet been demonstrated in practice. In this paper, we verify experimentally that the second moment can be reliably measured for a previously well characterized aluminum ring and plug sample. We compare experimental measurements against numerical calculation and further support our conclusions by rigorous uncertainty quantification of the estimated mean and variance of the strain distribution.


<table style="width:80%">
  <tr>
    <th><a href="{{site.baseurl}}/assets/papers/Bragg_Edge_2022.pdf" class="btn btn-dark text-white px-5 btn-lg">PDF</a></th>
    <th><a href="{{site.baseurl}}/assets/papers/BraggEdge2022.txt" class="btn btn-dark text-white px-5 btn-lg">BiBTex</a></th> 
  </tr>
</table>

