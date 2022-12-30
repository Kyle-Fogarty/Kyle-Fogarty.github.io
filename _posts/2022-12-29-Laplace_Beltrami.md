---
layout: post
title:  "The Mesh Laplacian : The Galerkin Derivation"
publish_author: Kyle Fogarty
categories: []
image: assets/images/Laplace_Beltrami.png
featured: False
blog_topic: Differential Geometry
usemathjax: true
---


In Michelmas 2022 I started supervising second year undergraduate students on the Further Graphics course at the University of Cambridge. The course, linked here, covers a broad range of topics from differential geometry to inverse rendering. 

As part of the differential geometry topic, the students are introduced to the Laplacian operator and how the continuous operator can be approximated on the mesh data structure. In particular, we arrive at the famous cotangent Laplacian operator defined by 

$$
C_{i j}= \begin{cases}-\frac{1}{2}\left(\cot \alpha_{i j}+\cot \beta_{i j}\right) & i j \text { is an edge } \\ -\sum_{k \in N(i)} C_{i k} & i=j \\ 0 & \text { otherwise }\end{cases}
$$

In this post we derive the cotangent Laplace operator using a first order finite element approach (Galerkin approach). The aim of solving a Laplacian type equation is to recover $$f$$ on some manifold $$\mathcal{M}$$. As the mesh data structure is ubiquitous in geometry processing, we will investigate how the continous Laplacian operator can be discretised on the mesh.

Suppose we wish to solve a Poission equation

$$
\nabla^2_{\mathcal{M}} ~ f(x) = g(x).
$$

Under the typical approach to solving the Galerkin approach, we approximate the is equation with a weak-form; we multiply the equation by some test function $$\phi_i(x)$$ and then integrate over some domain:

$$
\int \nabla^2_{\mathcal{M}} ~ f(x) ~\cdot~\phi_i(x)~ dx  = \int \phi_i(x) \cdot g(x)~dx
$$

for all test functions $$\phi_i(x)$$. Using Stokes theorem, the left-hand side of the above variational form can be rewritten as 

$$
\int \nabla^2 f(x) ~\cdot~\phi_i(x)~ dx = \int \nabla f(x) ~\cdot~\nabla \phi_i(x)~ dx
$$

(where we have neglected the boundary term).