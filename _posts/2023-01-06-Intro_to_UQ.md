---
layout: post
title:  "Introduction to Uncertainty Quantification"
publish_author: Kyle Fogarty
categories: []
image: assets/images/UQ.png
featured: False
blog_topic: Applied Mathematics, Uncertainty Quantification
usemathjax: true
---

<i style="text-align: center;">This article was written as part of the Computational Toolkit Seminar Series. Once the final article has been published a link will be avaible here.</i>

>I have approximate answers and possible beliefs in different degrees of certainty about different things, but I'm not absolutely sure of anything.
*- **Richard P Feynman**, 1981*

<b>This article will be posted soon!</b>

<!-- # Introduction

Uncertainty is intrinsic to all natural sciences and being capable of
correctly dealing with it is a skill that most PhD student must master.
In this article we will briefly discuss an exciting branch of
mathematics known as *uncertainty quantification* (UQ).\
In contrast to purely data-driven approaches, UQ methods usually
leverage some form of *a-priori* knowledge about the system under study,
usually in the form of a model. These models are usually parametric in
nature depending on variables $$\boldsymbol{\theta}$$.

It is very common to construct a functional model

$$y = f(\boldsymbol{x},\boldsymbol{\theta})$$ 

where $$\boldsymbol{x}$$ is
the input variable and $$\boldsymbol{\theta}$$ is a vector of
coefficients. Often the models we construct are deterministic, meaning
for fixed $$\boldsymbol{x}$$ and $$\boldsymbol{\theta}$$, the output $$y$$ is
fixed. The banch on UQ we will discuss in this article is about how to
deal with coefficient $$\boldsymbol{\theta}$$ that are not exactly known,
but instead assumed to be drawn from a distribution.\
We will discuss this via an example of the preditor-prey model.

Defined by

$$\frac{dx}{dt} = ax - bxy$$

$$\frac{dy}{dt} = -cy + pxy$$

An example

The aim of this section is to introduce several core computational
approaches to UQ. Probability is the language by which uncertainty is
expressed, we begin by an introduction to this.\
We begin we a review of fundamental probability theory, followed by an
introduction to some of the core elements of Bayesian inference.

# Probability Theory

A random variable is one of the central components of probability
theory. It is a mapping from a sample space (denoted $$\Omega$$) typically
to a real number $$X : \Omega \to \mathbb{R}$$.

We will assume the reader has a basic understanding of probability
thoery. We recap the salient points now.

$$\mathbb{P}(X = x) = \int_\Omega X(x) d\mathbb{P}$$

The core operation in probabiltiy theory is

# Bayesian Inference

Baye -->
