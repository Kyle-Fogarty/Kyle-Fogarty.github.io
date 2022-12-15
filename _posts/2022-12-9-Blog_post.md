---
layout: post
title:  "First Blog Post"
publish_author: Kyle Fogarty
categories: []
image: assets/images/blog_1.jpg
featured: False
blog_topic: Life
---


# Introduction

Over the past three decades polygonal meshes have established themselves
as the dominant form of geometry representation in computer graphics.
Triangular meshes, like most forms of explicit geometry representations,
are efficient at inference time.\
There has been a vast number of works that consider implicit neural
representations (INR), sometimes referred to as coordinate-based MLPs.

INRs in their current form has significant drawbacks: INRs are obtained
via *training* of the underlying neural network. Training based methods
work to minimising a loss functional via traversing the gradients of the
functional. While the aim is to obtain a global minima, local minimia is
often all that can be obtained. This has the implication INRs can only
ever be trained with *soft* constraints. INRs are also very slow to
query.

# Geometry Processing for INRs

Most existing geometry processing algorithms are build with explicit
underlying geometry representations (i.e., polygonal meshes). Performing
the same sorts of geometry processing on NIRs has yet to receive much
attention. Geometry processing on implicit surfaces is challenging, as
other than training the underlying parameters of the network, we have no
other way of editing the geometry. However, with INRs we have the
advantage being able to directly access[^1] differential quantities of
the surface, without the need for approximating the differential
operators like in the case of explicit representations.\
The authors of ([@yang2021geometry]) explore two examples of geometry
processing, with INRs as the underlying representation. The authors use
an MLP with sinusoidal activation functions, $f_\theta(\boldsymbol{x})$,
to approximate the signed distance function of some geometric model.
Then, differential quantities of the level-set surface can be accessed
via derivatives of the INR - the outwards oriented surface normal of the
level set is given by

$$\boldsymbol{n}(x) = \nabla_{\boldsymbol{x}} f_{\theta}(\boldsymbol{x})$$

and curvature can be obtained from the shape operator on the normal
field. For SDFs, this reduces to obtaining the Hessian of the INR
$$\mathcal{S}(\boldsymbol{x}) = H(f_\theta(\boldsymbol{x})).$$

Given the SIREN network, allow of the above derivatives can be obtained
via automatic reverse differentiation of the network. Given access to
the mean curvature (the trace of the Hessian) the authors showed that
adding a hand-crafted term to the loss function
$$\int_{\mathbf{x} \in V_\tau} \lambda_k\left(\kappa_{G_\theta}(\mathbf{x})-\beta \kappa_F(\mathbf{x})\right)^2 d \mathbf{x}$$
could be used to smooth and sharpen the geometry in the underlying INR
(see Fig. [1](#fig:yang2021_geom_processing){reference-type="ref"
reference="fig:yang2021_geom_processing"}). One limitation noted in this
approach is that computation of the mean curvature can be very noisy
because of the underlying periodic activation functions.

![Smoothing and sharpening results. (A) zoomed-in input; (B) our method;
(C) baseline without remeshing; (D) baseline with remeshing. We can see
that the baseline without remeshing finds it difficult to smooth or
sharpen the mesh extracted from neural fields. Our method is able to
achieve good results without discretizing the surface. Figure taken
directly from
([@yang2021geometry])](figures/yang2021.png){#fig:yang2021_geom_processing
width="90%"}

The authors also considered the challenge of deforming neural fields
into key-frames. Given some explicit *handles* $h_i$ and *target*
locations $t_i$, the goal is to find a natural deformation such that the
user specified conditions of handles reaching the targets are achieved.
Traditional mesh based approaches to achieving natural deformations is
to assume that the surface behaves as a thin elastic shell, but this
approaches don't translate to NIRs because it is non-trivial to find
dense correspondences between a INR surface and its target. Instead, the
authors opt for an explicit representation by sampling points from the
surface of the surface. Once obtained, hand-crafted stretching and
bending losses are used to optimise the surface.\
In ([@Liu2022]) the authors consider the challenge of deformations, but
this time via learning *'time-dependent'* INRs via an encoding latent
variable. The idea is that the manifold surface that is learnt should
smoothly interpolate between seen *'time-dependent'* geometry (see
Fig. [2](#fig:Liu2022){reference-type="ref" reference="fig:Liu2022"}).

![ Figure taken directly from ([@Liu2022]) - We fit neural networks to
the signed distance field of a torus when the latent code $t=0$ and a
double torus when $t=1$ (green). Our Lipschitz multilayer perceptron
(MLP) achieves smooth interpolation and extrapolation results (blue)
when changing $t$, while the standard MLP fails
(red).](figures/Liu2022.png){#fig:Liu2022 width="\\textwidth"}

The question the researchers try to answer is how to regularise an MLP
such that the geometry interpolates *smoothly* in the latent space. Core
to enforcing smoothness in the latent space is penalizing the upper
bound on the field's Lipschitz constant.

::: tcolorbox
[**Definition**:]{.smallcaps} A neural network $f_\theta$ is called
Lipschitz continuous if there exists a constant $c \ge 0$ such that
$$|| f_\theta(x) - f_\theta(y)||_p \le c~||x - y ||_p$$ for all $x, y$,
under a $p-$norm of choice.
:::

TODO: Write up the technical details of the Lipschitz MLP.

As observed in many of the geometry processing papers presented,
performing geometric queries on INR is an expensive operation. One may
think that the the only way of interacting with INRs in an explicit way
is to perform costly samplings of the surface. In ([@sharp2022]) the
authors introduce an alternative approach based on the concept of range
analysis. By constructing affine arithmetic queries
$$\hat{\boldsymbol{x}} = x_0 + \sum_{i = 1}^N x_i \epsilon_i ~~~\epsilon_i \in [-1, 1]$$
that represent a volume in the input space, the range of an MLP can be
established by forward propergating $\hat{y
} = f_\theta(\hat{\boldsymbol{x}})$ and considering $[\hat{y
}_{-}, \hat{y
}_{+}]$: if $\hat{y
}_{-} > 0$ then the level-sets of the MLP within that bounding region
are necessarily positive and $\hat{y
}_{+} < 0$ necessarily negative. The geometric query can return an
ambiguous value, in which case the query box needs to be subdivided.

![ Figures taken from ([@sharp2022]).
](figures/Sharp2022.png){#fig:Sharp2022 width="\\textwidth"}

The resulting algorithm is computationally much more efficient for
performing many types of geometric queries than nïeve sampling or
extraction of level-sets via marching cubes as a hierarchical structure
can be formed.

# MLP Representation of INRs

Section to discuss the underlying MLP representations, spectral bias,
and methods of overcoming that to obtain high-fidelity representations.\
**Papers to write up:**

-   Implicit Geometry Regularisation ([@gropp2020implicit])

-   Spectral Bias of NN ([@rahaman19a])

-   Fourier Features ([@tancik2020fourier])

-   SIREN Networks ([@sitzmann2020implicit])

-   Implicit Displacement Fields ([@yifan2022geometryconsistent])

-   Beyond Periodicity ([@ramasinghe2022beyond])

-   Gaussian Activated Radiance Fields ([@Chng2022])

# Optimisation of INRs

Section to discuss optimisation strategies and regularisation methods
for obtaining implicit geometry representations from different input
forms.

**Papers to write up:**

-   Iso-Points ([@yifan2021iso])

-   Regularization for Neural Surface Reconstruction in the Wild
    ([@zhang2022critical])

# Rendering INRs

With the popularity in Neural Radiance Fields ([@mildenhall2021nerf]),
there has been a number of works on connecting INRs that define implicit
surfaces (e.g., via signed distance functions) and rendering techniques.

*UNISURF, Nueral Rendering, NeuS*

Disentangling Geometry and Appearance ([@yariv2020multiview]) adresses
the problem of learning unknown geometry, camera parameters, and light
field, via a neural rendering technique.

**IDR**\
The goal of the IDR paper is to reconstruct the geometry of an object
from masked 2D images, with noisy camera information. This culminates in
a reconstruction problem of recovering three families of unknowns, the
geometry, the lighting appearance, and the camera positions.\
The IDR paper uses the zero level-set of a neural network to represent
the geometry, and regularises the implicit field via enforcing signed
distance via the Eikonal equation.

The forward rendering model is defined as follows. For each ray
$R(\tau)$ and surface $\mathcal{S}_\theta$, the surface intersection can
be represented as
$$\hat{\boldsymbol{x}}(\theta, \tau)=\boldsymbol{c}+t_0 \boldsymbol{v}-\frac{\boldsymbol{v}}{\nabla_{\boldsymbol{x}} f\left(\boldsymbol{x}_0 ; \theta_0\right) \cdot \boldsymbol{v}_0} f\left(\boldsymbol{c}+t_0 \boldsymbol{v} ; \theta\right)$$

**UniSURF**\
While IDR introduced above performs well at extracting a surface, it
requires pixel accurate geometry masks as an additional training signal.
Another line of work (NeRF) takes a different approach in its
differentiable rendering system. NeRF is built upon the idea of volume
rendering where the scene is parameterised as a density field over space
and a MLP determines the colour space. The problem with NeRF type
approaches is that recovering accurate surfaces requires selecting a
threshold density value, which often returns poor looking geometry. The
approach UniSURF takes is to combine surface rendering and volume
rendering in a single training approach.

![The geometry obtained from using a NeRF model of the DTU MVS Skull
model with varying density thresholds. Note that the surface geometry
recovered is poor.](figures/Oechsle2020.png){#fig:unisurf width="75%"}

![](figures/Oechsle2020b.png){#fig:my_label width="80%"}

To achieve this, the authors modify the usual volume rendering (alpha
compositing) approach; instead of modelling space as a density field
they use an indicator function $\mathcal{I} \in \{0, 1 \}$, such that
the volume rendering equation becomes

$$\hat{C}(\mathbf{r})=\sum_{i=1}^N \mathcal{I}\left(\mathbf{x}_i\right) \prod_{j<i}\left(1-\mathcal{I}\left(\mathbf{x}_j\right)\right) c\left(\mathbf{x}_i, \mathbf{d}\right).$$

Early in the optimisation process volume rendering is used to obtain a
course version of the geometry (i.e., a NeRF approach). A monotonic
function is used to switch from volume rendering to surface rendering
through the optimisation procedure. The geometry obtained via this
method is far more convincing than the geometry that is obtained from
COLMAP, NeRF, and does require the mask supervision of IDR.

**Volume Rendering of Neural Implicit Surfaces**\
The work by ([@yariv2021volume]) takes a different approach. They
formulate the volume density as a function of the object geometry,
rather than visa versa. Letting $d_{\Omega}$ define the Signed Distance
Function (SDF) to the boundary $\mathcal{M}$, then they model the
density field as $$\label{YarivVolSDFa}
    \sigma(\boldsymbol{x})=\alpha \Psi_\beta\left(-d_{\Omega}(\boldsymbol{x})\right)$$
where $$\label{YarivVolSDFb}
    \Psi_\beta(s)= \begin{cases}\frac{1}{2} \exp \left(\frac{s}{\beta}\right) & \text { if } s \leq 0 \\ 1-\frac{1}{2} \exp \left(-\frac{s}{\beta}\right) & \text { if } s>0\end{cases}.$$

In the limit of $\beta \to 0$,
Eq. [\[YarivVolSDFb\]](#YarivVolSDFb){reference-type="ref"
reference="YarivVolSDFb"} defines a discontinuous Heaviside function at
the surface boundary; therefore, $\beta$ controls the smoothness of the
surface.

![Caption](figures/Yarivbeta.png){#fig:my_label width="0.4 \\textwidth"}

The authors claim that the benefit of modelling the surface like this is
two-fold: (1) Provides a principled method of reconstructing the zero
level-set of $d_{\Omega}$ (2) This parameterisation of the density field
facilitates a bound on the error of the opacity.

**Neus**

[^1]: provided the network parameterised is sufficiently smooth
    ($C^{3})$
