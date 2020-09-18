---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

  <span style="color: #ff0000;">Disclaimer</span>: _This site contains PDF files of articles that are covered by copyright. You may browse the articles at your convenience in the same spirit as you may read a journal or conference proceedings in a public library. Retrieving, copying, distributing these files, entirely or in parts, may violate copyright protection laws._
  {: .notice}

<h2 style="text-align: center;">RBF Liquids: An Adaptive PIC Solver Using RBF-FD</h2>
<center>
  <a href="https://rnakanishi.github.io/files/rbf-sa2020.pdf" target="\_blank"><img src="../images/publications/siggraph-2020.png" alt="rbf_pic" width="80%" height="80%" /></a>
</center>
<center>
<small>
<span style="font-style: italic;" >
<a href="https://rnakanishi.github.io/">Rafael Nakanishi</a>, 
Filipe Nascimento, 
<a href="https://www.campos.cc/">Rafael Campos</a>, 
<a href="http://www.facom.ufms.br/~pagliosa/">Paulo Pagliosa</a>, 
<a href="http://www.icmc.usp.br/%7Eapneto/">Afonso Paiva</a>, 
</span></small>
</center>
<center>
<small><span style="font-style: italic;" >ACM Siggraph Asia 2020 | ACM Transactions on Graphics</span></small>
</center>
<center>
<small><span style="font-style: italic;" >
<a href="https://rnakanishi.github.io/files/rbf-sa2020.pdf">pdf</a>
<a href="https://www.youtube.com/watch?v=JVt8NoF81uI">video</a>
<a href="https://rnakanishi.github.io/publications/rbf-liquids-adaptive-pic-solver-using-rbf/">webpage</a>
</span></small>
</center>
<center>
We introduce a novel liquid simulation approach that combines a spatially adaptive pressure projection solver with the Particle-in-Cell (PIC) method. The solver relies on a generalized version of the Finite Difference (FD) method to approximate the pressure field and its gradients in tree-based grid discretizations, possibly non-graded. In our approach, FD stencils are computed by using meshfree interpolations provided by a variant of Radial Basis Function (RBF), known as RBF-Finite-Difference (RBF-FD). This meshfree version of the FD produces differentiation weights on scattered nodes with high-order accuracy. Our method adapts a quadtree/octree dynamically in a narrow-band around the liquid interface, providing an adaptive particle sampling for the PIC advection step. Furthermore, RBF affords an accurate scheme for velocity transfer between the grid and particles, keeping the system’s stability and avoiding numerical dissipation. We also present a data structure that connects the spatial subdivision of a quadtree/octree with the topology of its corresponding dual-graph. Our data structure makes the setup of stencils straightforward, allowing its updating without the need to rebuild it from scratch at each time-step. We show the effectiveness and accuracy of our solver by simulating incompressible inviscid fluids and comparing results with regular PIC-based solvers available in the literature.
</center>


<h2 style="text-align: center;">Approximating implicit curves on plane and surface triangulations with affine arithmetic</h2>
<center>
  <a href="http://www.icmc.usp.br/~apneto/pub/aatri_cag14.pdf" target="\_blank"><img src="https://filipecn.files.wordpress.com/2015/07/teapot.png" alt="teapot" width="290" height="183" /></a>
</center>
<center>
<small><span style="font-style: italic;" >F.C. Nascimento, <a href="http://www.icmc.usp.br/%7Eapneto/">A. Paiva</a>, <a href="http://lhf.impa.br/">L.H. Figueiredo</a> and <a href="http://www.ic.unicamp.br/%7Estolfi">J. Stolfi</a></span></small>
</center>
<center>
<small><span style="font-style: italic;" >Computers &amp; Graphics 40, pp. 36-48, 2014</span></small>
</center>
<center>
<small><span style="font-style: italic;" >
<a href="../files/aatri_cag14.pdf">pdf</a>
</span></small>
</center>
<center>
  We present a spatially and geometrically adaptive method for computing a robust polygonal approximation of an implicit curve defined on a planar region or on a triangulated surface. Our method uses affine arithmetic to identify regions where the curve lies inside a thin strip. Unlike other interval methods, even those based on affine arithmetic, our method works on both rectangular and triangular decompositions and can use any refinement scheme that the decomposition offers. 
</center>

<h2 style="text-align: center;">Approximating implicit curves on triangulations with affine arithmetic</h2>
  <center>
  <a href="http://sibgrapi.sid.inpe.br/attachment.cgi/sid.inpe.br/sibgrapi/2012/07.04.00.56/doc/sib.pdf" target="\_blank"><img src="https://filipecn.files.wordpress.com/2015/07/aatri_sib2012.png" alt="aatri_sib2012" width="300" height="151" /></a>
</center>
<center>
<small><span style="font-style: italic;"><a href="http://www.icmc.usp.br/~apneto/">A. Paiva</a>, F.C. Nascimento, <a href="http://lhf.impa.br/">L.H. Figueiredo</a> and <a href="http://www.ic.unicamp.br/%7Estolfi">J. Stolfi</a> 
</span></small>
</center>
<center>
<small><span style="font-style: italic;">
Proceedings of SIBGRAPI 2012, IEEE Press, pp. 94-101, 2012
</span></small>
</center>
<center>
<small><span style="font-style: italic;">
<a href="../files/sib.pdf">pdf</a>
</span></small>
</center>
<center>
  We present an adaptive method for computing a robust polygonal approximation of an implicit curve in the plane that uses affine arithmetic to identify regions where the curve lies inside a thin strip. Unlike other interval methods, even those based on affine arithmetic, our method works on triangulations, not only on rectangular quadtrees. 
</center>


<!--
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
-->
