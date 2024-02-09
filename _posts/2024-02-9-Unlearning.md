---
layout: post
title:  "Zero-Shot Machine Unlearning at Scale via Lipschitz Regularization"
publish_author: Jack Foster, Kyle Fogarty, Stefan Schoepf, Cengiz Öztireli, Alexandra Brintrup
publish_venue: arXiv 
publish_year: 2024
categories: []
image: assets/images/unlearning.png
featured: True
thesis: False
---

To comply with AI and data regulations, the need to forget private or copyrighted information from trained machine learning models is increasingly important. The key challenge in unlearning is forgetting the necessary data in a timely man- ner, while preserving model performance. In this work, we address the zero-shot unlearning sce- nario, whereby an unlearning algorithm must be able to remove data given only a trained model and the data to be forgotten. Under such a defi- nition, existing state-of-the-art methods are in- sufficient. Building on the concepts of Lips- chitz continuity, we present a method that in- duces smoothing of the forget sample’s output, with respect to perturbations of that sample. We show this smoothing successfully results in for- getting while preserving general model perfor- mance. We perform extensive empirical evalua- tion of our method over a range of contemporary benchmarks, verifying that our method achieves state-of-the-art performance under the strict con- straints of zero-shot unlearning.

<table style="width:80%">
  <tr>
    <th><a href="https://arxiv.org/pdf/2402.01401.pdf" class="btn btn-dark text-white px-5 btn-lg"> ArXiV</a></th>
    <!-- <th><a href="https://cnf2023.netlify.app/" class="btn btn-dark text-white px-5 btn-lg"> Project Page</a></th> -->
  </tr>
</table>
